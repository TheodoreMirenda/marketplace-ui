import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer, Grid, SimpleGrid,
    GridItem,
    Divider,
    useDisclosure,

} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useLoginMutation, 
  useUserLazyQuery,
  useProductLazyQuery,
  useCategoryLazyQuery,
  useCreateUserMutation,
  Role,
} from "@src/shared/generated/graphql-schema";
import { ProductOrder, Product, } from "@src/shared/generated/graphql-schema";
import QuantityModifier from "@src/modules/components/quantity-modifier";

  const demoCart: ProductOrder[] = [
    {
        productId: 1,
        quantity: 1,
    },
    {
        productId: 2,
        quantity: 1,
    },
    {
        productId: 3,
        quantity: 2,
    },
]

const CartComponent: FC = () => {

    const cart = demoCart;
    const [fetchProduct] = useProductLazyQuery({})

    const getProduct = async (pId: number) => {
        const product = await fetchProduct({
          variables: {
            where: {
                id: pId
            }}
        });
        return product.data?.Product as Product;
    }


  return (
    <>
    <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'} >
        <Grid 
        w={'100%'}
        templateColumns='repeat(8, 1fr)'
        gap={6}
        margin={25}
        >
         <GridItem colSpan={6}  >
            <VStack>
                <Text
                    as={'b'}
                    fontSize={'2xl'}
                    alignSelf={'flex-start'}
                    marginBottom={4} 
                    > Shopping Cart </Text>
                
                <VStack w={'100%'} h={'100%'} 
                    rounded={'lg'} justify={'center'} align={'top'} boxShadow={'lg'} 
                    outline={'4px solid'}
                    outlineColor={'fishPalette.green'}
                    >
                    <Flex
                    rounded={'lg'} 
                    justifyItems={'center'}  
                    boxShadow={'lg'} 
                    outline={'4px solid'}
                    outlineColor={'fishPalette.green'}
                    roundedBottom={'none'}
                    bg={'fishPalette.cyan'} 
                    w={'100%'}
                    paddingLeft={8}
                    paddingTop={4}
                    paddingBottom={4}
                    >
                        <Text
                        as={'b'}
                        fontSize={'xl'}
                        >
                        Shipment 1 of 1 - These items ship together </Text>
                </Flex>
                <Grid gridTemplateColumns={'1fr 75px 150px 75px 50px'} gap={6} padding={8}>
                    <GridItem colSpan={1}  w='250px'
                    >Item </GridItem>
                    <GridItem colSpan={1} 
                        justifySelf={'center'}
   
                    >Price </GridItem>
                    <GridItem colSpan={1} 
                        justifySelf={'center'}
                    >Quantity </GridItem>
                    <GridItem colSpan={1} 
                        justifySelf={'center'}
                        >Total </GridItem>
                    <GridItem colSpan={1} w='50px'
                    > </GridItem>
                    <GridItem colSpan={5} 
                    > <Divider/></GridItem>

                    {cart.map((productOrder) => (
                        <ShoppingCartItem productOrder={productOrder}/>
                    ))}




            <GridItem>
                <Text
                    fontSize={'sm'}
                    alignSelf={'flex-start'}
                    color={'fishPalette.gray'}
                    > Shipments may be delayed due to COVID-19</Text>
            </GridItem>

                </Grid>
                </VStack>
            </VStack>
            </GridItem>

      <GridItem colSpan={2} 
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
                fontSize={'2xl'}
                alignSelf={'flex-start'}
                marginBottom={4} 
                > Order Summary </Text>
            <Divider/>
            
            <HStack w={'100%'} justifyContent={'space-between'}>
            <Text
                as={'b'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >Product Total </Text>
            <Text
                as={'b'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >$ </Text>
            </HStack>
            <HStack w={'100%'} justifyContent={'space-between'}>
            <Text
                as={'i'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >Shipping </Text>
            <Text
                as={'i'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >$ </Text>
            </HStack>
            <HStack w={'100%'} justifyContent={'space-between'}>
            <Text
                as={'i'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >Tax Total</Text>

            <Text
                as={'i'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >$ </Text>
            </HStack>
            <Divider/>
            <HStack w={'100%'} justifyContent={'space-between'}>
            <Text
                as={'b'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >Order Total </Text>

            <Text
                as={'b'}
                fontSize={'lg'}
                color={'fishPalette.gray'}
                >$ </Text>
            </HStack>


            <Divider/>
            <Button
                mb={4}
                h={'30px'} w={'125px'}>
                Checkout</Button>

       
        </VStack>
      </GridItem>
 
      </Grid>
      </Flex>
    </>
  );
};

export default CartComponent;

interface ShoppingCartItemProps {
    productOrder: ProductOrder
}

export const ShoppingCartItem = ({productOrder}:ShoppingCartItemProps) => {
    const [quantity, setQuantity] = useState<number>(productOrder.quantity!);
    const changeAmount = (amount: number) => {
        setQuantity(quantity + amount);
    }
    
    return (
        <>
        <GridItem colSpan={1}>
            <Text
                as={'i'}
                fontSize={'md'}
                color={'fishPalette.gray'}
                h={'20px'}
            >
                {productOrder.product?.name}
            </Text>
      </GridItem>
      <GridItem colSpan={1}>
            <Text
                as={'i'}
                fontSize={'md'}
                color={'fishPalette.gray'}
                h={'20px'}
            >
                ${productOrder.product?.price?.toFixed(2)}
            </Text>
      </GridItem>
      <GridItem colSpan={1}>
            <QuantityModifier quantity={productOrder.quantity!} changeAmount={changeAmount} />
      </GridItem>
      <GridItem colSpan={1} alignSelf={'center'}>
            <Text
                as={'i'}
                fontSize={'md'}
                color={'fishPalette.gray'}
                h={'20px'}
                textAlign={'center'}
                alignSelf={'center'}
                >
                ${Number(productOrder.product?.price?.toFixed(2)) * Number(productOrder.quantity)}
            </Text>
      </GridItem>
      <GridItem colSpan={1}>
            <Button 
                variant={'ghost'}
                h={'25px'} w={'25px'}>
                X</Button>

      </GridItem>
      </>
    )
  }