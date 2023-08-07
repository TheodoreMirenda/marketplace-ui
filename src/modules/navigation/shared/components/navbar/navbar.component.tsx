import { useContext } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AuthContext from '../../../../../shared/contexts/auth.context'

export default function Nav() {
  const { user } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const colorModeValue = useColorModeValue("gray.100", "gray.900");


  return user ? (
    <Box bg={colorModeValue} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Image height={"20"} src="/logo.png" alt="Dan Abramov" />
        </Box>

        <Stack direction={"row"} spacing={7}>
          <Menu>
            <MenuButton
              as={Button}
              backgroundColor={"transparent"}
              rightIcon={<ChevronDownIcon />}
            >
              Genres
            </MenuButton>
            <MenuList>
              <MenuItem>Action</MenuItem>
              <MenuItem>Adventure</MenuItem>
              <MenuItem>Terror</MenuItem>
              <MenuItem>Romance</MenuItem>
              <MenuItem>Comedy</MenuItem>
            </MenuList>
          </Menu>
          <Button backgroundColor={"transparent"}>Movies</Button>

          <Button backgroundColor={"transparent"}>Series</Button>
        </Stack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button backgroundColor={"transparent"} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  ) : (
    <></>
  );
}
