"use client"
import { Flex, VStack, Text, Image, Button, HStack } from "@chakra-ui/react"
import {
  Product,
} from "@src/shared/generated/graphql-schema";
import { FC } from "react";

const imgPath = '/img/'

const ProductPageComponent: FC<Product> = (product) => {
  console.log("product: " + product);

  const getImagePath = () => {
    if (product.images?.length > 0) {
      return imgPath + product.images[0];
    } else {
      return 'https://via.placeholder.com/225';
    }
  }

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
      <Image
        mt={'12.5px'}
        boxSize="225px"
        objectFit="cover"
        bg={'fishPalette.gray'}
        // alt={product.name}
        fallbackSrc='https://via.placeholder.com/225'
        src={getImagePath()}
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
            >${product?.price}</Text>
          
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
export default ProductPageComponent;
