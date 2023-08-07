import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  MovieWhereUniqueInput,
  OrderByArg,
  useGetMoviesQuery,
} from "@/shared/generated/graphql-schema";
import { useRouter } from "next/router";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

const GET_USERS = gql`
user(where: { email: "tjm@gmail.com" }) {
  uuid
  username
  id
  email
}
`;


export default function DevTools() {
  
const { data, loading, error } = useQuery(GET_DOGS);
if (loading) return "Loading...";
if (error) return <pre>{error.message}</pre>


  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch:any) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
   
  );
};
