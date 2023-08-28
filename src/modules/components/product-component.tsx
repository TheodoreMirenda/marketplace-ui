"use client"
import { Flex, VStack, Text, Image, Button, HStack, Link, border } from "@chakra-ui/react"
import {
  Product,
} from "@src/shared/generated/graphql-schema";
import { FC, useContext, useCallback } from "react";
import NextLink from 'next/link'
import CartContext from "@src/shared/contexts/cart.context";
import { StarIcon } from "@chakra-ui/icons";

const ProductComponent: FC<Product> = (product) => {

  const { addToCart, isLoading } = useContext(CartContext);
  const imgPath = 'img/'

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
        w={{base: '300px', md: '255px'}}
        minH={'375px'}
        bg={'fishPalette.cyan'}
        rounded={'lg'}
        justify={'center'}
        align={'top'}
        boxShadow={'lg'}
        outline={'2px solid'}
        outlineColor={'fishPalette.cyan'}
        bgGradient={'linear(to-r, fishPalette.darkBlue, fishPalette.cyan)'}
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
      w={'100%'}
      >
        <Image
          mb={2}
          h={{base: '225px', md: '150px'}}
          w={{base: '275px', md: '225px'}}
          objectFit={"cover"}
          bg={'fishPalette.gray'}
          fallbackSrc='https://via.placeholder.com/225'
          src={imgPath + product.images[0]}
          rounded={'lg'}
          alignSelf={'center'}
        />

        <VStack w={'100%'} alignItems={'left'} 

        rounded={"md"} padding={2}>

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
        noOfLines={3}
        minH={'65px'}
        maxH={'65px'}
        maxW={'250px'}
        >{product.description}</Text>

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
      </VStack>
    </Flex>
    </Link>
  )
}
export default ProductComponent;