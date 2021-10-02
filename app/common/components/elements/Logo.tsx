import { Image, ImageProps } from "@chakra-ui/image";
import React from "react";

const Logo: React.FC<ImageProps> = ({ ...props }) => {
  return <Image src={"/CatwikiLogo.svg"} {...props}></Image>;
};

export default Logo;
