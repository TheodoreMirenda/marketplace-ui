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

const ProfileComponent: FC = () => {
  console.log(useContext(AuthContext));
  const userContext = useContext(AuthContext)?.user;
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
  return (
    <>
    {!userContext ? <> <Text>No user signed in</Text> </> : <> 
     
        <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'} >
          <VStack minH={'1000px'}>
              <Text fontSize={32} as={'b'}>Profile</Text>
          <Image
            position={'absolute'}
            src='/img/fishTank.jpg'
            opacity={0.25}
            minH={'450px'}
            zIndex={-1}
            />
            <VStack 
              align={'left'} 
              background={'fishPalette.cyan'}
              rounded={'lg'}
              boxShadow={'lg'}
              mr={25}
              padding={6}
              opacity={0.9}
              outline={'4px solid'}
              outlineColor={'fishPalette.green'}
            >
              <Image
                boxSize="200px"
                objectFit="cover"
                />
              <ProfileBlock title={'First Name'} info={userContext.firstName}/>
              <ProfileBlock title={'Last Name'} info={userContext.lastName}/>
              <ProfileBlock title={'Email'} info={userContext.email}/>
              <ProfileBlock title={'Password'} info={"********"}/>
            </VStack>
          </VStack>
      </Flex>
      </>}
      </>
  );
};

export default ProfileComponent;

const ProfileBlock = ({title, info}:{title:string, info:string}) => {
  return (
    <VStack align={'left'} spacing={0}>
      <Text fontSize={18} as={'b'}>{title}:</Text>
      <Text fontSize={16} >{info}</Text>
    </VStack>
  )
}
