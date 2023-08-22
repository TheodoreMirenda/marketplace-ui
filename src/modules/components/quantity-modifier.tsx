"use client"
import { Flex, VStack, Text, Image, Button,
    NumberInput,
    NumberInputField,
} from "@chakra-ui/react"
import {useRef} from 'react';

interface QuantityProps {
    quantity: number,
    changeAmount: (amount: number) => void,
}

const QuantityModifier = ({quantity, changeAmount}: QuantityProps) => {


  const handleChange = (value:string) => {
    changeAmount(Number(value)-quantity);
    quantity = Number(value);
  }

  return (
      <Flex
        w={'150px'}
        h={'25px'}
        _hover={ {
            cursor: 'pointer',
            outlineColor : 'fishPalette.gray'
            }} 
            >
        <Button 
            mr={'5px'}
            rounded={'full'}
            onClick={() => handleChange((quantity-1).toString())}
            h={'25px'} w={'25px'}>
         -</Button>

        <NumberInput value={quantity} size='md' maxW={16} max={99} defaultValue={quantity} alignSelf={'center'} onChange={handleChange}>
            <NumberInputField alignSelf={'center'} padding={0} textAlign={'center'}/>
        </NumberInput>

        <Button
        ml={'5px'}
        rounded={'full'}
            onClick={() => handleChange((quantity+1).toString())}
            h={'25px'} w={'25px'}>
        +</Button>
    </Flex>
  )
}
export default QuantityModifier;