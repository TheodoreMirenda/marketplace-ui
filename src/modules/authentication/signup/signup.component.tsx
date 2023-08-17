import { useSignupMutation } from "/src/shared/generated/graphql-schema";
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

import { FC } from "react";
import {
  ISignUpFormValues,
  INITIAL_SIGN_UP_VALUES,
  SIGN_UP_FORM_SCHEMA,
} from "./signup.util";

const SignUpComponent: FC = () => {
  const [signup] = useSignupMutation();

  const router = useRouter();

  const onSubmit = async () => {
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
                create an account to place an order
              </Text>
            </Stack>
            <HStack>
              <Box>
                <FormControl id="name" isRequired isInvalid={!!errors.name}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    type="text"
                  />
                  {!!errors.name ? (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
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
                  {!!errors.name ? (
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
              {!!errors.name ? (
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
              {!!errors.name ? (
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
              {!!errors.name ? (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <Stack spacing={6} pt={6}>
              <Button
                colorScheme={"red"}
                variant={"solid"}
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"red.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/movies-background.jpg"}
          />
        </Flex>
      </Stack>
    </form>
    </>
  );
};

export default SignUpComponent;
