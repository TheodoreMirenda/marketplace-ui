import { Box, Button, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";

const HomeComponent: FC = () => {
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
            <Button>Button</Button>
          </HStack>
          </VStack>
      </Flex>
    </>
  );
};

export default HomeComponent;
