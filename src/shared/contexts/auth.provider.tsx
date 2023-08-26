import React, { FC, useState, useEffect, useCallback } from "react";
import { useApolloClient } from "@apollo/client";

import AuthContext from "./auth.context";

// import { IUserProfile } from "@src/shared/generated/graphql-schema";
import {
  User,
  useLoginMutation,
  useUserLazyQuery,
} from "@src/shared/generated/graphql-schema";
import { useRouter } from "next/router";

import jwt from "jsonwebtoken";

const AuthProvider: FC<{ children: any }> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
 
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);

  const client = useApolloClient();

  const [loginMutation] = useLoginMutation();
  const [getUser] = useUserLazyQuery();

  const checkAuthToken = useCallback(async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
        setIsLoading(true);
      const decodedToken: any = jwt.decode(storedToken);
      const expirationDate =
        decodedToken["expiresIn"] * 1000 + decodedToken["iat"] * 1000;

      if (new Date(expirationDate).getTime() <= Date.now()) {
        localStorage.removeItem("token");
        setToken(null);
        setUser(undefined);
        setIsLoading(false);
      } else {
        try {
          const response = await getUser({
            variables: {
              where: {
                email: decodedToken["email"],
              },
            },
            context: {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            },
          });
          setIsLoading(false);
          setToken(storedToken);
          setUser(response.data?.user as User);
 
        } catch (error) {}
      }
    }else {
        setIsLoading(false);
    }
  }, [getUser]);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const response = await loginMutation({
        variables: {
          data: {
            email,
            password
          },
        },
      });

      console.log(response);
      setUser(response.data?.login.user as User);
      setIsLoading(false);
      localStorage.setItem(
        "token",
        response.data?.login.access_token as string
      );
      setToken(response.data?.login.access_token as string);
      
      router.push('/')
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);

      await client.clearStore();

      setUser(undefined);
      setToken(null);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    checkAuthToken();
  }, [checkAuthToken]);

  return (
    <AuthContext.Provider
      value={{ isLoading, user, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
