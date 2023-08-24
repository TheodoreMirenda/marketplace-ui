import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Text, Flex, Button, Image, Box, Divider, Link} from '@chakra-ui/react'
import { SearchBar } from './search-bar'
import { Category, useCategoriesQuery } from "@src/shared/generated/graphql-schema";
import { useEffect, useState, useContext } from 'react';
import NextLink from 'next/link'
import {BsCart4} from 'react-icons/bs'
import AuthContext from "@src/shared/contexts/auth.context";

export default function MainHeader() {

  const { login, isLoading, user } = useContext(AuthContext);

  // const fetchCategory = useCategoriesQuery({})
  const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   setCategories(fetchCategory.data?.categories as Category[]);
  // }, [fetchCategory]);

  useEffect(() => {
    console.log(user);
  }, [user]);
  
  return (
    <>
    <Flex mt={0} height={'50px'} bg={'fishPalette.darkBlue'} padding={0} justifyContent={'space-between'} align={'center'} >
      <HStack minW={'300px'}>
        <Image
          ml={2}
          boxSize="45px"
          objectFit="cover"
          src= '/TheFishStore/img/fishStoreLogo.png'
          />
          <Link as={NextLink} href="/">
            <Text fontSize="32" as='b' textColor="fishPalette.white" ml={2} marginTop={'auto'}>
              TheFishStore
            </Text>
          </Link>
      </HStack>

      <SearchBar />

      <HStack ml={4} mr={4} spacing={8}>
        <Link as={NextLink} color={'fishPalette.white'}href="/about">About</Link>
        {user?.firstName ?
          <>
            <Link as={NextLink} color={'fishPalette.white'}href="/profile" minW={'75px'}>
              <Text mb={-2} color={'fishPalette.gray'} fontSize={14}>Hello, {user.firstName}</Text>
              <Text color={'fishPalette.white'} as={'b'}>Account</Text>
            </Link>
          </> : <>
            <Link as={NextLink} color={'fishPalette.white'}href="/login" minW={'50px'}>Log In</Link>
          </>
        }
        <Button as={NextLink} href={"/cart"}  h={'35px'} w={'55px'} pr={'10px'} leftIcon={<BsCart4/>}></Button>
      </HStack>
      
    </Flex>

    <Flex mt={0} height={'30px'} bg={'fishPalette.cyan'} justifyContent={'left'} padding={0} >
      <Link 
        as={NextLink} w='125px' h='30px' justifyContent='center' href="/marketplace"
        pt={1}
        bg= "fishPalette.cyan"
        color= "white"
        _hover= {{
          bg:"fishPalette.gray",
          color:"black",
          _disabled: { bg: "doenet.mainGrey" }
        }}
        verticalAlign={'center'}
        alignItems={'center'}
        textAlign={'center'}
        fontSize={'md'}
        rounded={'lg'}
        textStyle={'b'}
        >
          <Text fontSize={14} as={'b'}>
            Marketplace
          </Text>
        </Link>

        <Divider orientation="vertical" />

      {categories?.map((category) => (
        <>
        <Link 
          key={category.id}
          as={NextLink} w='75px' h='30px' justifyContent='center' href="/marketplace"
          pt={1}
          bg= "fishPalette.cyan"
          color= "white"
          _hover= {{
            bg:"fishPalette.gray",
            color:"black",
            _disabled: { bg: "doenet.mainGrey" }
          }}
          textAlign={'center'}
          fontSize={'md'}
          rounded={'lg'}
          textStyle={'b'}
          >
          <Text fontSize={14} as={'b'}>
            {category.name?.toUpperCase()}
          </Text>
        </Link>
        <Divider orientation="vertical"/>
        </>
      ))}
    </Flex>
    </>
  )
}