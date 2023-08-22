"use client"
import { Flex, VStack, Text, Image, Button, HStack, Link, border } from "@chakra-ui/react"
import {
  Product,
} from "@src/shared/generated/graphql-schema";
import { FC, useContext, useCallback } from "react";
const imgPath = '/img/'
import NextLink from 'next/link'
import CartContext from "@src/shared/contexts/cart.context";

const ProductComponent: FC<Product> = (product) => {

  const { addToCart, isLoading } = useContext(CartContext);

  const handleLinkClick = useCallback((e: any) => {    
  }, []);
  

  const handleButtonClick = useCallback((e: any) => {
    // e.stopPropagation();
    e.preventDefault();
    addToCart({product: product, quantity: 1})
  }, []);


  return (
      <Link as={NextLink} color={'fishPalette.white'} href={`/product/${product.uuid}`} onClick={handleLinkClick }>
      <Flex
        w={'250px'}
        h={'375px'}
        bg={'fishPalette.cyan'}
        rounded={'lg'}
        justify={'center'}
        align={'top'}
        boxShadow={'lg'}
        outline={'2px solid'}
        outlineColor={'fishPalette.green'}
        _hover={
          {
            transform: 'scale(1.025)',
            transition: 'transform .1s',
            cursor: 'pointer',
            outlineColor : 'fishPalette.gray'
          }
        }
    >
      <VStack spacing={0} justifyContent={'left'}>
        <Image
          mt={'12.5px'}
          boxSize="225px"
          objectFit="cover"
          bg={'fishPalette.gray'}
          fallbackSrc='https://via.placeholder.com/225'
          src={imgPath + product.images[0]}
          rounded={'lg'}
        />
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
            >${product.price?.toFixed(2)}</Text>
          
        </HStack>
      <Text
        as={'i'}
        fontSize={'sm'}
        color={'fishPalette.gray'}
        >{product.description}</Text>
      {/* <Button 
        onClick={handleButtonClick}
            h={'30px'} w={'125px'}>
              Add to Cart</Button> */}
      </VStack>
    </Flex>
    </Link>
  )
}
export default ProductComponent;