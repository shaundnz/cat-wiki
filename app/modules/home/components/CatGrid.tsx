import React from "react";
import { Grid, Image } from "@chakra-ui/react";

const CatGrid = () => {
  return (
    <Grid
      templateColumns={"repeat(5, 1fr)"}
      templateRows={"repeat(5, 1fr)"}
      gap={4}
    >
      <Image
        gridArea={"1 / 1 / 3 / 4;"}
        src="/images/image2.png"
        objectFit="cover"
        borderRadius="3xl"
        w="100%"
        h="100%"
      />
      <Image
        gridArea={"1 / 4 / 5 / 6"}
        src="/images/image3.png"
        objectFit="cover"
        borderRadius="3xl"
        w="100%"
        h="100%"
      />
      <Image
        gridArea={"3 / 2 / 6 / 4"}
        src="/images/image1.png"
        objectFit="cover"
        borderRadius="3xl"
        w="100%"
        h="100%"
      />
    </Grid>
  );
};

export default CatGrid;
