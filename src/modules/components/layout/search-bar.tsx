import React, { ReactElement, ReactNode } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon
} from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="sm" maxW={'600px'} outlineColor={'fishPalette.red'}>
        <Input type="text"placeholder="Search..." outlineColor={'fishPalette.f1faee'} />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #457b9d">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
