"use client"
import {
    Flex, 
    VStack, 
    Text, 
    Image, 
    Button, 
    HStack, 
    Link, 
    border,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Spacer,
} from "@chakra-ui/react"
import {
  Product, ProductOrder,
} from "@src/shared/generated/graphql-schema";
import { FC } from "react";
const imgPath = '/TheFishStore/img/'
import NextLink from 'next/link'
import { useEffect } from "react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router'

interface CartModalProps {
    isOpen: boolean,
    onClose: () => void,
    productOrder: ProductOrder
}

const CartModal = ({ isOpen, onClose, productOrder} : CartModalProps)=> {
  const router = useRouter()

const getImagePath = () => {
    if (!productOrder?.product?.images) return 'https://via.placeholder.com/225';

    return imgPath + productOrder?.product?.images[0];
    }

  return (
    <>
      <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor={'fishPalette.cyan'} pt={4} pb={16}>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={4}>
            <Image
                boxSize="180px"
                objectFit="cover"
                bg={'fishPalette.gray'}
                fallbackSrc='https://via.placeholder.com/128'
                alignSelf={'flex-start'}
                src={getImagePath()}
                rounded={'lg'}
            />
            <VStack height={'180px'} spacing={0} alignSelf={'flex-start'} alignItems={'flex-start'} w={'70%'}>
                <ModalHeader padding={0} >Added to your cart:</ModalHeader>
                <CartText txt={productOrder.product?.name as string}/>
                <CartText txt={'Quantity: ' + productOrder.quantity  as string}/>
                <CartText txt={'$' + productOrder.product?.price?.toFixed(2) as string}/>
                <HStack spacing={2} mt={8} >
                    <Button onClick={() => router.push("/cart")}  >View Cart</Button>
                    <Button onClick={onClose}rightIcon={<ArrowForwardIcon/>}>Checkout</Button>
                </HStack>
                <Button mt={4}  variant={'ghost'} onClick={onClose} leftIcon={<ArrowBackIcon/>}>Continue Shopping</Button>
            
            </VStack>
            </HStack>

          </ModalBody>
    
        </ModalContent>
      </Modal>
    </>
  )
}

export default CartModal;
interface CartTextProps {
    txt: string
}

export const CartText = ({txt}:CartTextProps) => {
    return (
      <Text
        as={'i'}
        fontSize={'md'}
        color={'fishPalette.gray'}
        h={'20px'}
       >
        {txt}
      </Text>
    )
  }