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
  FormControl,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect } from "react";
import { BreedsContext } from "../../../common/context/BreedsContext";

const Search: React.FC<InputGroupProps> = ({ ...props }) => {
  const inputSize = useBreakpointValue(["md", "lg"]);

  const breedsContext = useContext(BreedsContext);

  return (
    <AutoComplete openOnFocus listAllValuesOnFocus>
      <InputGroup size={inputSize} {...props}>
        <Box w="100%">
          <AutoCompleteInput
            bg="white"
            color="black"
            placeholder="Search"
            borderRadius="full"
          />
        </Box>
        <InputRightElement
          fontSize={inputSize}
          children={<SearchIcon color="gray.300" />}
        />
      </InputGroup>
      <AutoCompleteList>
        {breedsContext.breeds.map((breed, cid) => {
          return (
            <AutoCompleteItem
              key={`option-${cid}`}
              value={breed.name}
              textTransform="capitalize"
              color="black"
            >
              {breed.name}
            </AutoCompleteItem>
          );
        })}
      </AutoCompleteList>
    </AutoComplete>
  );
};

export default Search;
