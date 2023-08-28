import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Text, Flex, Button, Image, Box, Divider, Link, useBreakpointValue, VStack, Spacer} from '@chakra-ui/react'
import { SearchBar } from './search-bar'
import { Category, useCategoriesQuery } from "@src/shared/generated/graphql-schema";
import { useEffect, useState, useContext } from 'react';
import NextLink from 'next/link'
import {BsCart4} from 'react-icons/bs'
import AuthContext from "@src/shared/contexts/auth.context";

export default function MainHeader() {

  const { login, isLoading, user } = useContext(AuthContext);

  const [categories, setCategories] = useState<Category[]>([]);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    // console.log(user);
  }, [user]);
  
  return (
    <>
    <Flex mt={0} height={'50px'} bg={'fishPalette.darkBlue'} padding={0} justifyContent={'space-between'} align={'center'} >
      <HStack minW={'300px'}>
        <Image
          ml={2}
          boxSize="45px"
          objectFit="cover"
          src= '/img/fishStoreLogo.png'
          />
          <Link as={NextLink} href="/">
            <Text fontSize="32" as='b' textColor="fishPalette.white" ml={2} marginTop={'auto'}>
              TheFishStore
            </Text>
          </Link>
      </HStack>
      
      {isMobile ? <></> : <SearchBar />}

      <HStack ml={{base:0, md:4}} mr={4} spacing={8}>
        {isMobile ? <></> : <Link as={NextLink} color={'fishPalette.white'}href="/about">About</Link>}
        <Button as={NextLink} href={"/cart"}  h={'35px'} w={'55px'} pr={'10px'} leftIcon={<BsCart4/>}></Button>
      </HStack>
      
    </Flex>

    <Flex mt={0} height={'30px'} bg={'fishPalette.cyan'} justifyContent={'space-between'} padding={0} >
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

       {user?.firstName ?
          <>
              <Link as={NextLink} color={'fishPalette.white'} href="/profile" justifyItems={'right'} mr={4}>
                <VStack spacing={2} ml={4} mt={0} justifyContent={'right'} justifyItems={'right'} textAlign={'right'}>
                  <Text textAlign={'right'} mb={-4} color={'fishPalette.gray'} fontSize={14} >Hello, {user.firstName}</Text>
                  <Text textAlign={'right'} color={'fishPalette.white'} as={'b'} justifySelf={'right'}  fontSize={12}>Account</Text>
                </VStack>
              </Link>
          </> : <>
            <Link as={NextLink} color={'fishPalette.white'}href="/login" minW={'50px'}>Log In</Link>
          </>
        }
    </Flex>
    </>
  )
}