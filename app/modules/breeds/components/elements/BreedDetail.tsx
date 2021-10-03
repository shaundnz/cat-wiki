import { Box, Heading, HStack, StackProps, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  heading: string;
  details: string;
}

const BreedDetail: React.FC<StackProps & Props> = ({
  heading,
  details,
  ...props
}) => {
  return (
    <HStack alignItems="baseline">
      <Heading fontSize="md" as="h5" fontWeight="black">
        {heading}
      </Heading>
      <Text fontSize="md">{details}</Text>
    </HStack>
  );
};

export default BreedDetail;
