import {
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Search from "./Search";

const MainContainerTop = () => {
  const imageSource = useBreakpointValue([
    "/images/Heroimagesm.png",
    "/images/Heroimagemd.png",
    "/images/Heroimagelg.png",
  ]);

  const headingSize = useBreakpointValue(["lg", "2xl"]);

  return (
    <Flex
      bg="#050709"
      color="white"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      w="100%"
      minH="140px"
    >
      <VStack
        w={["50%", "50%", "40%"]}
        align="left"
        paddingLeft={[6, 6, 20]}
        spacing={[1, 2]}
        pos="absolute"
      >
        <Heading
          fontFamily="Mystery Quest"
          size={headingSize}
          as="h5"
          fontWeight="thin"
          display={["block", "block", "none"]}
        >
          CatWiki
        </Heading>
        <Image
          display={["none", "none", "block"]}
          src="/CatwikiLogoWhite.svg"
          w="80%"
        />
        <Text fontSize={["xs", "sm", "md"]}>
          Get to know more about your cat breed
        </Text>
        <Box pt={[0, 0, 6]}>
          <Search />
        </Box>
      </VStack>
      <Box></Box>
      <Image src={imageSource} minH="140px" objectFit="cover" />
    </Flex>
  );
};

export default MainContainerTop;
