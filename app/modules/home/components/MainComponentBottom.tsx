import {
  Box,
  Grid,
  Heading,
  VStack,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import React from "react";
import SquareImage from "../../../common/components/elements/SquareImage";

const MainComponentBottom = () => {
  return (
    <VStack bg="#E3E1DC" color="#291507" align="left" p="6" spacing={5}>
      <Heading size="sm" as="h5">
        Browse All Breeds
      </Heading>
      <Grid templateColumns={"1fr 1fr"}>
        <SquareImage
          src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
          m={1.5}
        />
        <SquareImage
          src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
          m={1.5}
        />
        <SquareImage
          src="https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
          m={1.5}
        />
        <SquareImage
          src="https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"
          m={1.5}
        />
      </Grid>
    </VStack>
  );
};

export default MainComponentBottom;
