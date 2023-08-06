import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const IndexPage = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "gray.900");

    return (
        <Flex height="100vh" alignItems='center' justifyContent={"center"}>
            <Flex direction={"column"} background={bgColor} p={12} rounded={6}>
                <Heading mb={6}>Login</Heading>
                <Input placeholder="tjm@gmail.com" variant="filled" mb={3} type="email" />
                <Input placeholder="********" variant="filled" mb={6} type="password" />
                <Button colorScheme="teal" mb={6}>Login</Button>
                <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"}</Button>
            </Flex>
        </Flex>
    );
}

export default IndexPage