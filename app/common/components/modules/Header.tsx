import { Flex } from "@chakra-ui/layout";
import React from "react";
import Logo from "../elements/Logo";

const Header = () => {
  return (
    <Flex py="2">
      <Logo />
    </Flex>
  );
};

export default Header;
