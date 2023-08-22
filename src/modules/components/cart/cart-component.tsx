import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer, Grid, SimpleGrid, GridItem,Divider, Input, } from "@chakra-ui/react";
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
import CartContext from "@src/shared/contexts/cart.context";
import { ArrowRightIcon } from "@chakra-ui/icons";

const CartComponent: FC = () => {

    const { cartItems, removeFromCart, getCartTotal, overrideCartItem } = useContext(CartContext);
    const shippingCost = 29.99;
    const [taxTotal, setTaxTotal] = useState<number>(0);
    const [orderTotal, setOrderTotal] = useState<number>(0);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    useEffect(() => {
        const tax = getCartTotal() * 0.06;
        setTaxTotal(tax);
        setOrderTotal(getCartTotal() + tax + shippingCost);
    }, [cartItems]);

  return (
    <>
    <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'} >
        <Grid 
        templateColumns='repeat(8, 1fr)'
        gap={6}
        margin={25}
        justifyContent={'center'}
        >
         <GridItem colSpan={6} maxW={'750px'} >
            <VStack>
                <Text
                    as={'b'}
                    fontSize={'2xl'}
                    alignSelf={'flex-start'}
                    marginBottom={4} 
                    > Shopping Cart </Text>
                
                <VStack w={'100%'} h={'100%'} 
                    rounded={'lg'} justify={'center'} align={'top'} boxShadow={'lg'} 
                    outline={'2px solid'}
                    outlineColor={'fishPalette.green'}
                    >
                    <Flex
                    rounded={'lg'} 
                    justifyItems={'center'}  
                    boxShadow={'lg'} 
                    outline={'2px solid'}
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

                    {cartItems?.map((productOrder) => (
                        <ShoppingCartItem productOrder={productOrder} overrideCartItem={overrideCartItem} removeFromCart={removeFromCart}/>
                    ))}

            <GridItem>
                <Text
                    fontSize={12}
                    alignSelf={'flex-start'}
                    color={'fishPalette.red'}
                    > Shipments may be delayed due to COVID-19</Text>
            </GridItem>

                </Grid>
                </VStack>
            </VStack>
            </GridItem>

      <GridItem colSpan={2} 
        mt={58}
        rounded={'lg'}
        boxShadow={'lg'}
        mr={25}
        padding={4}
        opacity={0.9}
        outline={'2px solid'}
        outlineColor={'fishPalette.green'}
        w={'250px'}
      >
        <VStack spacing={0} 
          alignItems={'left'}>
            <Text
                as={'b'}
                fontSize={'2xl'}
                alignSelf={'flex-start'}
                > Order Summary </Text>
            <Divider mb={4} mt={4}/>
            
            
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
                >$ {getCartTotal().toFixed(2)}</Text>
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
                >$ {shippingCost.toFixed(2)}</Text>
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
                >$ {taxTotal.toFixed(2)}</Text>
            </HStack>
            <Divider mb={4} mt={4}/>
            <HStack w={'100%'} justifyContent={'space-between'}>
            <Text
                as={'b'}
                fontSize={'lg'}
                color={'fishPalette.white'}
                >Order Total </Text>

            <Text
                as={'b'}
                fontSize={'lg'}
                color={'fishPalette.white'}
                >$ {orderTotal.toFixed(2)}</Text>
            </HStack>
            <Divider mb={4} mt={4}/>

            <Input placeholder='Enter promo code' mb={2} />
            <Input placeholder='Enter gift certificate code' />
            <Divider mb={4} mt={4}/>
            <Button
                alignSelf={'center'}
                mb={4}
                rightIcon={<ArrowRightIcon/>}
                h={'60px'} w={'90%'}>
                Proceed to Checkout</Button>

       
        </VStack>
      </GridItem>
 
      </Grid>
      </Flex>
    </>
  );
};

export default CartComponent;

interface ShoppingCartItemProps {
    productOrder: ProductOrder,
    overrideCartItem: (productOrder: ProductOrder) => Promise<void>;
    removeFromCart: (productOrder: ProductOrder) => Promise<void>;
}

export const ShoppingCartItem = ({productOrder, overrideCartItem, removeFromCart}:ShoppingCartItemProps) => {
    const changeAmount = (amount: number) => {
        overrideCartItem({...productOrder, quantity: productOrder.quantity! + amount})
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
                onClick={() => removeFromCart(productOrder)}
                variant={'ghost'}
                h={'25px'} w={'25px'}>
                X</Button>

      </GridItem>
      </>
    )
  }