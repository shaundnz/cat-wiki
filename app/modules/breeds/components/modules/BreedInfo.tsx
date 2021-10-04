import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import React from "react";
import SquareImage from "../../../../common/components/elements/SquareImage";
import Breed from "../../../../common/types/breed";
import BreedDetail from "../elements/BreedDetail";
import BreedStat from "../elements/BreedStat";

interface Props {
  breed: Breed;
}

const BreedInfo: React.FC<Props> = ({ breed }) => {
  return (
    <Flex py="4" color="#291507" direction={["column", "row"]}>
      <Box w={["100%", "40%"]} pb="4">
        <SquareImage
          borderRadius="3xl"
          m="0 auto"
          w={["90%", "80%"]}
          src={breed.image.url}
        />
      </Box>
      <Stack w={["100%", "60%"]} spacing={6}>
        <Heading fontSize="3xl" as="h1">
          {breed.name}
        </Heading>
        <Text fontSize="sm">{breed.description}</Text>
        <BreedDetail heading={"Temperament:"} details={breed.temperament} />
        <BreedDetail heading={"Origin:"} details={breed.origin} />
        <BreedDetail
          heading={"Life Span:"}
          details={`${breed.life_span} years`}
        />
        <BreedStat heading={"Adaptability:"} rating={breed.adaptability} />
        <BreedStat
          heading={"Affection Level:"}
          rating={breed.affection_level}
        />
        <BreedStat heading={"Child Friendly:"} rating={breed.child_friendly} />
        <BreedStat heading={"Grooming:"} rating={breed.grooming} />
        <BreedStat heading={"Intelligence:"} rating={breed.intelligence} />
        <BreedStat heading={"Health Issues:"} rating={breed.health_issues} />
        <BreedStat heading={"Social Needs:"} rating={breed.social_needs} />
        <BreedStat
          heading={"Stranger Friendly:"}
          rating={breed.stranger_friendly}
        />
      </Stack>
    </Flex>
  );
};

export default BreedInfo;
