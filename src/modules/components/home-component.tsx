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
import NextLink from "next/link";
import { ArrowRightIcon } from "@chakra-ui/icons";

const HomeComponent: FC = () => {

  return (
    <>
        <Flex mt={0} paddingTop={0} minH={'1920px'} justifyContent={'left'} justifyItems={'left'} >
        <Image
            position={'absolute'}
            src='/TheFishStore/img/fishTank.jpg'
            opacity={1}
            minH={'450px'}
            zIndex={-1}
            />

          <Flex mt={20} ml={20} w="60%" h="450px" justifyContent={'center'} justifyItems={'center'}
          bgColor={'fishPalette.darkBlue'}
          bg={'fishPalette.darkBlue'}
          opacity={0.95}
          rounded={'lg'}
          boxShadow={'lg'}
          padding={10}
          >
            <VStack spacing={2} alignItems={'left'} justifyContent={'left'} justifyItems={'left'}>
            <Text
                fontSize={'md'}
                color={'fishPalette.gray'}
                as={'b'}
                >The Fish Store</Text>
              <Text
                fontSize={'3xl'}
                color={'fishPalette.white'}
                >Discover a decentralized marketplace where users can buy and sell their aquatic friends :)</Text>
              <Text
                fontSize={'lg'}
                color={'fishPalette.green'}
                >Shop our wide selection of fish and aquarium accessories</Text>
                <HStack spacing={8}>
                
              <Button mb={10} mt={10} maxW={'200px'} as={NextLink} href="/marketplace" colorScheme={'fishPalette.cyan'} rightIcon={<ArrowRightIcon/>}>Explore</Button>
              <Button mb={10} mt={10} maxW={'200px'} as={NextLink} href="/login" colorScheme={'fishPalette.cyan'} variant={'outline'}>Login</Button>
               </HStack>
                <HStack spacing={8}>
                  <VStack spacing={0} alignItems={'left'} justifyContent={'left'} justifyItems={'left'}>
                    <Text
                      fontSize={'3xl'}
                      color={'fishPalette.gray'}
                      as={'b'}
                      >374</Text>
                <Text
                  fontSize={'md'}
                  color={'fishPalette.gray'}
                  >Orders Fulfilled</Text>

                  </VStack>
                  <VStack spacing={0} alignItems={'left'} justifyContent={'left'} justifyItems={'left'}>
                  <Text
                      fontSize={'3xl'}
                      color={'fishPalette.gray'}
                      as={'b'}
                      >121</Text>
                <Text
                  fontSize={'md'}
                  color={'fishPalette.gray'}
                  >Active Listings</Text>
                  </VStack>
                </HStack>
                  
                  
            </VStack>
      
          </Flex>
      </Flex>
      <DataCreator/>
    </>
  );
};

export default HomeComponent;
