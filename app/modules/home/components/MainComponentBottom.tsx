import {
  Box,
  Grid,
  Heading,
  VStack,
  useBreakpointValue,
  HStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import React from "react";
import SquareImage from "../../../common/components/elements/SquareImage";
import CatImageWithTitle from "./CatImageWithTitle";
import "@fontsource/montserrat/700.css";

const MainComponentBottom = () => {
  const breedHeadingSize = useBreakpointValue(["sm", "md"]);
  const headingSize = useBreakpointValue(["lg", "2xl"]);

  return (
    <VStack
      bg="#E3E1DC"
      color="#291507"
      align="left"
      p={5}
      px={[5, 10, 20]}
      spacing="5"
    >
      <Heading size={breedHeadingSize} as="h4" fontWeight="medium">
        Most Searched Breeds
      </Heading>
      <Flex>
        <Heading
          as="h3"
          size={headingSize}
          fontWeight="black"
          w={["100%", "70%"]}
        >
          66+ Breeds for you to discover
        </Heading>
        <Spacer />
        <Heading
          as="h6"
          size="sm"
          display={["none", "block"]}
          opacity="60%"
          alignSelf="flex-end"
        >
          SEE MORE
        </Heading>
      </Flex>

      <Grid templateColumns={"1fr 1fr"} display={["grid", "grid", "none"]}>
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"}
          title={"Cat Name 1"}
          m={1.5}
        />
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"}
          title={"Cat Name 2"}
          m={1.5}
        />
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/hBXicehMA.jpg"}
          title={"Cat Name 3"}
          m={1.5}
        />
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"}
          title={"Cat Name 4"}
          m={1.5}
        />
      </Grid>
      <HStack
        justify="space-between"
        align="flex-start"
        spacing="8"
        display={["none", "none", "flex"]}
      >
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"}
          title={"Cat Name 1"}
          w="22%"
        />
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"}
          title={"Cat Name 2"}
          w="22%"
        />
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/hBXicehMA.jpg"}
          title={"Cat Name 3"}
          w="22%"
        />
        <CatImageWithTitle
          src={"https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"}
          title={"Cat Name 4"}
          w="22%"
        />
      </HStack>
    </VStack>
  );
};

export default MainComponentBottom;
