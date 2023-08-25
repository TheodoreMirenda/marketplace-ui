import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { FC, useContext } from "react";
import AuthContext from '../../../shared/contexts/auth.context'
import { ILoginFormValues, INITIAL_LOGIN_VALUES, LOGIN_FORM_SCHEMA } from "./login.util";
import NextLink from 'next/link'

const LoginComponent: FC = () => {

    const { login, isLoading } = useContext(AuthContext);

    const onSubmit = async () => {
        const loginResp = await login(values.email, values.password);
        // const loginResp = await login("tjmirenda3@gmail.com", "12345678910");
    }

    const { handleSubmit, handleChange, setFieldValue, values, errors, touched } =
    useFormik<ILoginFormValues>({
      onSubmit,
      initialValues: INITIAL_LOGIN_VALUES,
      validationSchema: LOGIN_FORM_SCHEMA,
      enableReinitialize: true,
    });

  return (
    <>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
 
            
      <Flex p={8} flex={1} align={"center"} justify={"center"}>

        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email" isRequired isInvalid={!!errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email"
                onChange={handleChange}
                value={values.email}/>
                  {!!errors.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : (
                ""
              )}
          </FormControl>
          <FormControl id="password" isRequired isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password"
                onChange={handleChange}
                value={values.password} />
                  {!!errors.password ? (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              ) : (
                ""
              )}
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"fishPalette.red"}>Forgot password?</Link>
            </Stack>
            <Button onClick={()=>onSubmit()} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Does not have a user? <Link as={NextLink} href="/signup" color={"fishPalette.red"}>Sign Up</Link>
            </Text>
          </Stack>
        </Stack>

      </Flex>
      <Flex flex={1}>
        <Image
            opacity={0.25}
            alt={"Login Image"}
          objectFit={"cover"}
          src={"img/fishTank.jpg"}
        />
      </Flex>
    </Stack>
    
    </>
  );
};

export default LoginComponent;
// import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

// const IndexPage = () => {

//     const { colorMode, toggleColorMode } = useColorMode();
//     const bgColor = useColorModeValue("gray.50", "gray.900");

//     return (
//         <Flex height="100vh" alignItems='center' justifyContent={"center"}>
//             <Flex direction={"column"} background={bgColor} p={12} rounded={6}>
//                 <Heading mb={6}>Login</Heading>
//                 <Input placeholder="tjm@gmail.com" variant="filled" mb={3} type="email" />
//                 <Input placeholder="********" variant="filled" mb={6} type="password" />
//                 <Button colorScheme="teal" mb={6}>Login</Button>
//                 <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"}</Button>
//             </Flex>
//         </Flex>
//     );
// }

// export default IndexPage