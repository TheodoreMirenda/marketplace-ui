import { Box, Button, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useLoginMutation, 
  useUserLazyQuery,
  useUserQuery,
  useProductLazyQuery,
} from "/src/shared/generated/graphql-schema.tsx";

import { useMutation, gql } from '@apollo/client';

const HomeComponent: FC = () => {

  const [fetchUser ] = useUserLazyQuery({})
  const [fetchProduct ] = useProductLazyQuery({})
  const [login ] = useLoginMutation({})

  // const user = useUserQuery({
  //     variables: {
  //       where: {
  //         email: 'tjm3@gmail.com'
  //       }
  //     },
  //     // fetchPolicy: 'cache-and-network'
  // });

  // const [createUser ] = useUserMutation({
  //   variables: {
  //     data: {
  //       email: 'test',
  //       password: 'test',
  //       firstName: 'test',
  //       lastName: 'test',
  //       role: 'test'
  //     }
  //   }
  // })
  const handleClick = async () => {
    console.log('clicked');
    const info = await fetchUser({
      variables: {
        where: {
          email: 'tjm3@gmail.com'
        }
      }
    });
    console.log(info.data?.user?.email);
  }
  const handleProduct = async () => {
    console.log('clicked');
    const info = await fetchProduct({
      variables: {
        where: {
          id:1
        }
      }
    });
    console.log(info.data);
  }

  const handleLogin = async () => {
    console.log('login clicked');
    login({
      variables:{
        data: {
          email: 'tjm3@gmail.com',
          password: '12345678910'
        }
      }
    });
    console.log("loing done");

  }
  return (
    <>
         <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'}
         >
          <VStack>
          <Image
            src='/img/fishTank.jpg'
            minH={'450px'}
            >
            </Image>
            
          <HStack justifyContent={'center'} justifyItems={'center'} mt={'100'} mb={'100px'}>
            <Button>Sign Up</Button>
            <Button
            onClick={handleClick}>Get User</Button>
            <Button
            onClick={handleLogin}>Login</Button>
            <Button
            onClick={handleProduct}>Get Product</Button>

          </HStack>
          </VStack>
      </Flex>
    </>
  );
};

export default HomeComponent;
