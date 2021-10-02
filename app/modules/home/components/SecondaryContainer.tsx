import { Box, Heading, Text, Stack, VStack, Link } from "@chakra-ui/react";
import React from "react";
import CatGrid from "./CatGrid";

const SecondaryContainer = () => {
  return (
    <Stack
      direction={["column", "column", "row"]}
      px={[6, 6, 20]}
      spacing={8}
      my="8"
    >
      <VStack
        color="#291507"
        alignSelf="center"
        spacing={[4, 4, 8]}
        align="flex-start"
        py={[8, 8, 0]}
      >
        <Heading as="h2" size="2xl" fontWeight="black">
          Why should you have a cat?
        </Heading>
        <Text>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels!
        </Text>
        <Link
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#"
          isExternal
        >
          <Heading as="h6" size="sm" opacity="60%">
            READ MORE
          </Heading>
        </Link>
      </VStack>
      <CatGrid />;
    </Stack>
  );
};

export default SecondaryContainer;
