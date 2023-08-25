import { useSignupMutation, useUserLazyQuery } from "@src/shared/generated/graphql-schema";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  HStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import NextLink from 'next/link'
import { FC } from "react";
import { ISignUpFormValues, INITIAL_SIGN_UP_VALUES, SIGN_UP_FORM_SCHEMA, } from "./signup.util";
import { toast } from "react-toastify";

const SignUpComponent: FC = () => {
  const [signup] = useSignupMutation();
  const [user] = useUserLazyQuery({});

  const router = useRouter();

  const onSubmit = async () => {

    if(errors.username){
      toast.error(errors.username);
      return;
    }
    if(errors.email){
      toast.error(errors.email);
      return;
    }
    if(errors.password){
      toast.error(errors.password);
      return;
    }
    if(errors.firstName){
      toast.error(errors.firstName);
      return;
    }
    if(errors.lastName){
      toast.error(errors.lastName);
      return;
    }

    const emailIsTaken = await user({
      variables: {
        where: {
          email: values.email
        }
      }
    })

    if(emailIsTaken.data?.user?.email){
      toast.error("Email is already taken");
      return;
    }
    const usernameIsTaken = await user({
      variables: {
        where: {
          username: values.username
        }
      }
    })

    if(usernameIsTaken.data?.user?.username){
      toast.error("Username is already taken");
      return;
    }

    await signup({
      variables: {
        data: values,
      }, 
    });
    router.push("/login");
  };

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } =
    useFormik<ISignUpFormValues>({
      onSubmit,
      initialValues: INITIAL_SIGN_UP_VALUES,
      validationSchema: SIGN_UP_FORM_SCHEMA,
      enableReinitialize: true,
    });

  return (
    <>
    <form>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Join the largest fish marketplace that I have built
              </Text>
            </Stack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired isInvalid={!!errors.firstName}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    type="text"
                  />
                  {!!errors.firstName ? (
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  id="lastName"
                  isRequired
                  isInvalid={!!errors.lastName}
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  {!!errors.lastName ? (
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {!!errors.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl id="username" isRequired isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
              />
              {!!errors.username ? (
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl id="password" isRequired isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              {!!errors.password ? (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <Stack spacing={6} pt={6}>
              <Button onClick={() => onSubmit()} >
                Sign Up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link as={NextLink} href="/login" color={"fishPalette.red"}>Login</Link>
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
    </form>
    </>
  );
};

export default SignUpComponent;
