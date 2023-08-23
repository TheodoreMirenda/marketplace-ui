"use client"
import { 
  Flex, 
  VStack, 
  Text, 
  Image, 
  Button, 
  HStack, 
  Grid,
  GridItem,
  Spacer,
  Divider,
  useDisclosure,
  } from "@chakra-ui/react"

import {
  Product,
  ProductOrder,
} from "@src/shared/generated/graphql-schema";

import { FC, useContext } from "react";
import { useRouter } from 'next/router'
import { ArrowBackIcon } from "@chakra-ui/icons";
import CartModal from "./cart/cart-modal";
import { useState, useEffect } from "react";
import AuthContext from "@src/shared/contexts/auth.context";
import CartContext from "@src/shared/contexts/cart.context";

const ProductPageComponent: FC<Product> = (product) => {

  console.log(product);

  const router = useRouter()
  const {isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart} = useDisclosure();
  const [productOrder, setProductOrder] = useState<ProductOrder>({});
  const imgPath = '/img/'
  const { addToCart, isLoading } = useContext(CartContext);

  const getImagePath = () => {
    if (product.images?.length > 0) {
      return imgPath + product.images[0];
    } else {
      return 'https://via.placeholder.com/225';
    }
  }

  useEffect(() => {
    if(!productOrder.product) return;

    onOpenCart();
  }, [productOrder]);

  const handleAddToCart = () => {
    addToCart({product: product, quantity: 1});
    setProductOrder({product: product, quantity: 1});
  }

  return (
    <>
    <CartModal isOpen={isOpenCart} onClose={onCloseCart} productOrder={productOrder} />
    <Image
        position={'absolute'}
        src='/img/fishTank.jpg'
        minH={'450px'}
        zIndex={-1}
        opacity={0.25}
        />
    <VStack ml={25} mt={25} spacing={4}>
    <Button
      alignSelf={'flex-start'}
      onClick={() => router.back()}
      leftIcon={<ArrowBackIcon/>}
      h={'40px'} w={'80px'}>Back</Button>

    <Grid 
      w={'100%'}
      templateColumns='repeat(5, 1fr)'
      gap={6}
      mb={25}
      >
      
        <GridItem colSpan={2} 
        outline={'2px solid'}
        outlineColor={'fishPalette.green'}
        rounded={'lg'}
        >
          <Image
            rounded={'lg'}
            objectFit="cover"
            w={'100%'}
            h={'100%'}
            bg={'fishPalette.gray'}
            // alt={product.name}
            fallbackSrc='https://via.placeholder.com/225'
            src={getImagePath()}
            />
        </GridItem>

      <GridItem colSpan={3} 
        background={'fishPalette.cyan'}
        rounded={'lg'}
        boxShadow={'lg'}
        mr={25}
        padding={10}
        opacity={0.9}
        outline={'2px solid'}
        outlineColor={'fishPalette.green'}
      >
        <VStack spacing={0} 
          alignItems={'left'}>

          <Text
            as={'b'}
            fontSize={'3xl'}
            color={'fishPalette.white'}
            >{product.name}</Text>

          <Text
            as={'i'}
            fontSize={'lg'}
            color={'fishPalette.gray'}
            >{product.description}</Text>

          <Text
            fontSize={'2xl'}
            color={'fishPalette.white'}
            mb={4}
            >${product.price?.toFixed(2)}</Text>
            
          <Divider mb={8}/>
            
          <Text
            as={'i'}
            fontSize={'lg'}
            color={'fishPalette.gray'}
            mb={4}
            >Sold by {product.vendorProduct?.vendor?.name} </Text>

          <Button 
            bg={'fishPalette.green'}
            color={'fishPalette.white'}
            mb={4}
            onClick={() => handleAddToCart()}
            h={'30px'} w={'125px'}>
            Add to Cart</Button>

          <Button 
            mb={4}
            h={'30px'} w={'125px'}>
            Buy Now</Button>
        </VStack>
      </GridItem>
      </Grid>
      </VStack>
    </>
  )
}
export default ProductPageComponent;
