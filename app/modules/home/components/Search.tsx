import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const Search = () => {
  return (
    <InputGroup size="sm">
      <Input
        bg="white"
        color="black"
        placeholder="Search"
        borderRadius="full"
      />
      <InputRightElement children={<SearchIcon color="gray.300" />} />
    </InputGroup>
  );
};

export default Search;
