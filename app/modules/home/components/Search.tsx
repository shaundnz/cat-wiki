import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  InputGroupProps,
  Select,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const Search: React.FC<InputGroupProps> = ({ ...props }) => {
  const inputSize = useBreakpointValue(["sm", "md", "lg"]);

  const breed = ["nigeria", "japan", "india", "united states", "south korea"];

  return (
    <>
      <InputGroup size={inputSize} {...props}>
        <Input
          bg="white"
          color="black"
          placeholder="Search"
          borderRadius="full"
        />
        <InputRightElement children={<SearchIcon color="gray.300" />} />
      </InputGroup>
    </>
  );
};

export default Search;
