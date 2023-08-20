"use client"
import { Flex, VStack, Text, Image, Button, HStack, Link, border ,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,

} from "@chakra-ui/react"
import {Product,} from "@src/shared/generated/graphql-schema";

interface QuantityProps {
    quantity: number,
    changeAmount: (amount: number) => void,
}

const QuantityModifier = ({quantity, changeAmount}: QuantityProps) => {
  return (
      <Flex
        w={'50px'}
        h={'25px'}
        _hover={
        {
            transform: 'scale(1.025)',
            transition: 'transform .1s',
            cursor: 'pointer',
            outlineColor : 'fishPalette.gray'
        }
        }
    >

        <Button 
        mr={'5px'}
            rounded={'full'}
            onClick={() => changeAmount(-1)}
            h={'25px'} w={'25px'}>
         -</Button>

            <NumberInput defaultValue={quantity} min={1} max={99} alignSelf={'center'}>
                <NumberInputField />
                <NumberInputStepper>
                </NumberInputStepper>
            </NumberInput>

        <Button
        ml={'5px'}
        rounded={'full'}
            onClick={() => changeAmount(1)}
            h={'25px'} w={'25px'}>
        +</Button>
    </Flex>
  )
}
export default QuantityModifier;