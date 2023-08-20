"use client"
import { Flex, VStack, Text, Image, Button, HStack, Link } from "@chakra-ui/react"
import {
  Product,
} from "@src/shared/generated/graphql-schema";
import { FC } from "react";
const imgPath = '/img/'
import NextLink from 'next/link'

const ProductComponent: FC<Product> = (product) => {
  console.log(product);
  return (
    <Flex
    w={'250px'}
    h={'375px'}
    bg={'fishPalette.cyan'}
    rounded={'lg'}
    justify={'center'}
    align={'top'}
    boxShadow={'lg'}
    outline={'4px solid'}
    outlineColor={'fishPalette.green'}
    >
      <VStack spacing={0} justifyContent={'left'}>
      <Link as={NextLink} color={'fishPalette.white'}href={`/product/${product.uuid}`}>
        <Image
          mt={'12.5px'}
          boxSize="225px"
          objectFit="cover"
          bg={'fishPalette.gray'}
          // alt={product.name}
          fallbackSrc='https://via.placeholder.com/225'
          src={imgPath + product.images[0]}
          rounded={'lg'}
        />
      </Link>
      <Text
        as={'b'}
        fontSize={'lg'}
        color={'fishPalette.white'}
        >{product.name}</Text>
        <HStack>
          <Text
            as={'b'}
            fontSize={'lg'}
            color={'fishPalette.white'}
            >${product.price}</Text>
          
        </HStack>
      <Text
        as={'i'}
        fontSize={'sm'}
        color={'fishPalette.gray'}
        >{product.description} sold by {product.vendorProduct?.vendor?.name}</Text>
      <Button 
            h={'30px'} w={'125px'}>
              Add to Cart</Button>
      </VStack>
    </Flex>
  )
}
export default ProductComponent;