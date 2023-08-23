import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer, Grid, SimpleGrid} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useLoginMutation, 
  useUserLazyQuery,
  useProductLazyQuery,
  useCategoryLazyQuery,
  useCreateUserMutation,
  Role,
} from "@src/shared/generated/graphql-schema";
import DataCreator from "./create-data";
import AuthContext from "@src/shared/contexts/auth.context";
import CartContext from "@src/shared/contexts/cart.context";

const HomeComponent: FC = () => {
  // console.log(useContext(AuthContext));
  // console.log(useContext(CartContext));

  const [fetchUser] = useUserLazyQuery({})
  const [fetchProduct] = useProductLazyQuery({})
  const [fetchCategory] = useCategoryLazyQuery({})

  const [login] = useLoginMutation({})
  const [createUser] = useCreateUserMutation({})

  const handleClick = async () => {
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
    const info = await fetchProduct({
      variables: {
        where: {
          id:1
        }
      }
    });
    console.log(info.data);
  }
  const handleCategory = async () => {
    const info = await fetchCategory({
      variables: {
        where: {
          id:1
        }
      }
    });
    console.log(info.data);
  }
  const handleCreateUser = async () => {
    const stuff = await createUser({
      variables:{
        data: {
          email:"use32@gmail.com",
          password:"password123",
          username:"user3",
          firstName:"user3Name",
          lastName:"user3LastName",
          avatar:"sdfgsdf",
          type: Role.User
        }
      }
    }); 
    console.log(stuff);
  }

  return (
    <>
        <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'} >
          <VStack minH={'1000px'}>
          <Image
            position={'absolute'}
            src='/img/fishTank.jpg'
            opacity={0.25}
            minH={'450px'}
            zIndex={-1}
            />
            <Text
              as={'b'}
              fontSize={'2xl'}
              alignSelf={'flex-start'}
              marginBottom={4} 
              >  </Text>
              {/* <Button
                alignSelf={'flex-start'}
                onClick={createProducts}
                >create</Button> */}
        
          </VStack>
      </Flex>
      <DataCreator/>
    </>
  );
};

export default HomeComponent;
