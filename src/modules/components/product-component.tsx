"use client"
import { Flex, VStack, Text, Image, Button, HStack, Link, border } from "@chakra-ui/react"
import {
  Product,
} from "@src/shared/generated/graphql-schema";
import { FC, useContext, useCallback } from "react";
const imgPath = '/img/'
import NextLink from 'next/link'
import CartContext from "@src/shared/contexts/cart.context";
import { StarIcon } from "@chakra-ui/icons";

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
      <VStack spacing={0} padding={2} align={'left'}
      alignContent={'left'}
      >
        <Image
          mt={'6px'}
          h={'200px'}
          w={'225px'}
          objectFit="cover"
          bg={'fishPalette.gray'}
          fallbackSrc='https://via.placeholder.com/225'
          src={imgPath + product.images[0]}
          rounded={'lg'}
          alignSelf={'center'}
        />

        <HStack justifyContent={'space-between'} mr={1}>
      <Text
        as={'b'}
        fontSize={'xl'}
        color={'fishPalette.white'}
        textAlign={'left'}
        alignSelf={'left'}
        align={'left'}
        >{product.name}</Text>
        <HStack spacing={0}>
          <StarIcon w={3} color={'yellow'} />
          <StarIcon w={3} color={'yellow'} />
          <StarIcon w={3} color={'yellow'} />
          <StarIcon w={3} color={'yellow'} />
          <StarIcon w={3} color={'yellow'} />
        </HStack>
        </HStack>

        <Text
        as={'i'}
        fontSize={'sm'}
        color={'fishPalette.gray'}
        h={'65px'}
        >{product.description?.substring(0, 100)}{product.description?.length! > 100 ? "..." : ""}</Text>

          <Text
            as={'b'}
            fontSize={'lg'}
            color={'fishPalette.white'}
            >${product.price?.toFixed(2)}</Text>

      <Text
        as={'i'}
        fontSize={'sm'}
        color={'fishPalette.gray'}
        >Sold by {product.vendorProduct?.vendor?.name}</Text>
      
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