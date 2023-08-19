import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Text, Flex, Input, InputRightElement, 
  InputGroup,
  InputLeftElement

} from '@chakra-ui/react'
import Link from 'next/link'
import { SearchBar } from './SearchBar'


export default function MainHeader() {
  
  return (
    <>
    <Flex mt={0} height={'50px'} bgColor={'gray.800'} justifyContent={'space-between'} padding={0} >
    <Link href="/">
      <Text fontSize="32"  fontWeight="bold" color="white" ml={10} marginTop={'auto'}>
        The Fish Store
      </Text>
    </Link>
    <HStack>
    <SearchBar />
      <Link href="/about">About</Link>
      <Link href="/login">Sign In</Link>
    </HStack>
    </Flex>
    </>
  )
}