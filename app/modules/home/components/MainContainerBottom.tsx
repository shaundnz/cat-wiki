import {
  Box,
  Grid,
  Heading,
  VStack,
  useBreakpointValue,
  HStack,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import SquareImage from "../../../common/components/elements/SquareImage";
import CatImageWithTitle from "./CatImageWithTitle";
import "@fontsource/montserrat/700.css";
import { BreedsContext } from "../../../common/context/BreedsContext";

const MainContainerBottom = () => {
  const breedHeadingSize = useBreakpointValue(["sm", "md"]);
  const headingSize = useBreakpointValue(["lg", "2xl"]);
  const [breedsIndex, setBreedsIndex] = useState([0, 1, 2, 3]);

  const breedsContext = useContext(BreedsContext);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const generateRandomIndexArray = (n: number, max: number) => {
    const numbers: number[] = [];
    let i = 0;
    while (numbers.length < n) {
      const rand = getRandomInt(max);
      if (!numbers.includes(rand)) {
        numbers.push(rand);
        i++;
      }
    }
    return numbers;
  };

  useEffect(() => {
    if (breedsContext.breeds.length > 4) {
      setBreedsIndex(generateRandomIndexArray(4, breedsContext.breeds.length));
    }
  }, [breedsContext.breeds]);

  if (breedsContext.breeds.length === 0) {
    return <Heading>Loading...</Heading>;
  }

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
        <Link href="/breeds">Browse All Breeds</Link>
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
          <Link href="/breeds">SEE MORE</Link>
        </Heading>
      </Flex>

      <Grid templateColumns={"1fr 1fr"} display={["grid", "grid", "none"]}>
        {breedsIndex.map((index) => (
          <Link href={`/breeds/${breedsContext.breeds[index].id}`}>
            <CatImageWithTitle
              src={breedsContext.breeds[index].image.url}
              title={breedsContext.breeds[index].name}
              m={1.5}
            />
          </Link>
        ))}
      </Grid>
      <HStack
        justify="space-between"
        align="flex-start"
        spacing="8"
        display={["none", "none", "flex"]}
      >
        {breedsIndex.map((index) => (
          <Link href={`/breeds/${breedsContext.breeds[index].id}`} w="22%">
            <CatImageWithTitle
              src={breedsContext.breeds[index].image.url}
              title={breedsContext.breeds[index].name}
            />
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default MainContainerBottom;
