import { HStack, Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'


export default function MainHeader() {
  
  return (
    <>
    <Flex mt={0} height={'100px'} bgColor = "#aaa">

    <HStack>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Sign In</Link>
    </HStack>
    </Flex>
    </>
  )
}