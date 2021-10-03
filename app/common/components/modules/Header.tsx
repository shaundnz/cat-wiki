import { Flex, Link } from "@chakra-ui/layout";
import React from "react";
import Logo from "../elements/Logo";

const Header = () => {
  return (
    <Flex py="2">
      <Link href="/">
        <Logo />
      </Link>
    </Flex>
  );
};

export default Header;
