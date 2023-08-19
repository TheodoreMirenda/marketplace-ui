"use client"
import { Flex, VStack, Text, Image } from "@chakra-ui/react"
import {
  Product,
} from "@src/shared/generated/graphql-schema";
import { FC } from "react";

const ProductComponent: FC<Product> = (product) => {
  return (
    <Flex
    w={'200px'}
    h={'300px'}
    bg={'fishPalette.green4'}
    rounded={'lg'}
    justify={'center'}
    align={'center'}
    boxShadow={'lg'}
    >
      <VStack>
      <Image
        boxSize="180px"
        objectFit="cover"
        bg={'fishPalette.green2'}
        // alt={product.name}
        rounded={'lg'}
      />

      <Text
        as={'b'}
        fontSize={'lg'}
        color={'white'}
        >{product.name}</Text>
      <Text
        as={'i'}
        fontSize={'sm'}
        color={'fishPalette.green1'}
        >{product.description}</Text>
      <Text
        as={'b'}
        fontSize={'lg'}
        color={'white'}
      >${product.price}</Text>

      </VStack>
      </Flex>

  )
}
export default ProductComponent;