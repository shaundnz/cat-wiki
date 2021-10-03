import React from "react";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import Logo from "../elements/Logo";

const Footer = () => {
  return (
    <Flex
      mt="auto"
      bg="black"
      borderTopRadius="xl"
      alignItems={["normal", "center"]}
      justifyContent="space-between"
      flexDirection={["column", "row"]}
      px="6"
      pt="2"
    >
      <Link href="/">
        <Image src="/CatwikiLogoWhite.svg" w="128px" />
      </Link>
      <Heading color="white" fontWeight="thin" as="h6" size="xs" py="2">
        Created by <span style={{ fontWeight: 700 }}>Shaun Price</span>
      </Heading>
    </Flex>
  );
};

export default Footer;
