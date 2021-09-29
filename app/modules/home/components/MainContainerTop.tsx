import { Heading, VStack, Text, Box } from "@chakra-ui/layout";
import React from "react";
import Search from "./Search";

const MainContainerTop = () => {
  return (
    <Box
      bg="#050709"
      color="white"
      bgImage={[
        "/images/HeroImagesm.png",
        "/images/HeroImagemd.png",
        "/images/HeroImagelg.png",
      ]}
      backgroundSize="auto 100%"
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
    >
      <VStack w="60%" align="left" p="6" spacing={3}>
        <Heading fontFamily="Mystery Quest" size="sm" as="h5" fontWeight="thin">
          CatWiki
        </Heading>
        <Text fontSize="xs">Get to know more about your cat breed</Text>
        <Search />
      </VStack>
    </Box>
  );
};

export default MainContainerTop;
