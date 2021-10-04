import {
  Stack,
  Heading,
  Text,
  VStack,
  Box,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";
import SquareImage from "../../../../common/components/elements/SquareImage";
import Breed from "../../../../common/types/breed";

interface Props {
  breed: Breed;
}

const BreedBrief: React.FC<Props> = ({ breed }) => {
  if (breed.image == null) console.log(breed);

  return (
    <Stack spacing={8} direction={["column", "column", "row"]}>
      <Box w={["100%", "100%", "25%"]}>
        <LinkBox>
          <SquareImage
            borderRadius="3xl"
            m="0 auto"
            src={breed.image.url}
            w={["60%", "40%", "80%"]}
          />
          <LinkOverlay href={`/breeds/${breed.id}`} />
        </LinkBox>
      </Box>
      <VStack
        w={["100%", "100%", "75%"]}
        alignItems="flex-start"
        justifyItems="flex-start"
        spacing={6}
        pr="6"
      >
        <Heading fontSize="3xl" as="h2" fontWeight="black">
          <Link href={`/breeds/${breed.id}`}>{breed.name}</Link>
        </Heading>
        <Text fontSize="lg">{breed.description}</Text>
      </VStack>
    </Stack>
  );
};

export default BreedBrief;
