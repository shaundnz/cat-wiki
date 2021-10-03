import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import SquareImage from "../../../../common/components/elements/SquareImage";

interface Props {
  imageUrls: string[];
}

const BreedPhotos: React.FC<Props> = ({ imageUrls }) => {
  return (
    <>
      <Heading fontSize="2xl" as="h2" color="#291507">
        Other Photos
      </Heading>
      <Flex flexWrap="wrap">
        {imageUrls.map((url, index) => (
          <SquareImage key={index} src={url} w={"3xs"} maxW="250px" m="4" />
        ))}
      </Flex>
    </>
  );
};

export default BreedPhotos;
