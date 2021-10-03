import { Box, Heading, HStack, StackProps } from "@chakra-ui/react";
import React from "react";

interface Props {
  heading: string;
  rating: number;
}

const BreedStat: React.FC<StackProps & Props> = ({
  heading,
  rating,
  ...props
}) => {
  const createStatBar = (rating: number) => {
    const boxList = [];

    for (let i = 1; i < 6; i++) {
      if (i <= rating) {
        boxList.push(
          <Box minW="15%" h="9px" bg="#544439" borderRadius="full" />
        );
      } else {
        boxList.push(
          <Box minW="15%" h="9px" bg="#E0E0E0" borderRadius="full"></Box>
        );
      }
    }
    return boxList;
  };

  return (
    <HStack>
      <Heading fontSize="md" as="h5" fontWeight="black" minW="10rem">
        {heading}
      </Heading>
      <HStack w="sm" h="100%">
        {createStatBar(rating)}
      </HStack>
    </HStack>
  );
};

export default BreedStat;
