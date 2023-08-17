import { Box, Button, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { useUserQuery, useUserMutation, useUserLazyQuery } from "/src/shared/generated/graphql-schema.tsx";

const HomeComponent: FC = () => {

  const [festchUser ] = useUserLazyQuery({})
  const user = useUserQuery({
      variables: {
        where: {
          email: 'tjm3@gmail.com'
        }
      },
      // fetchPolicy: 'cache-and-network'
  });

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
    const info = await festchUser({
      variables: {
        where: {
          email: 'tjm3@gmail.com'
        }
      }
    });
    console.log(info);
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
          </HStack>
          </VStack>
      </Flex>
    </>
  );
};

export default HomeComponent;
