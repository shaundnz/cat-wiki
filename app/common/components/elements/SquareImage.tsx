import { ImageProps, Image } from "@chakra-ui/image";
import { Box, Square } from "@chakra-ui/layout";
import { BoxProps, AspectRatio } from "@chakra-ui/react";
import React from "react";

const SquareImage: React.FC<BoxProps & ImageProps> = ({ src, ...props }) => {
  return (
    <AspectRatio ratio={1 / 1} borderRadius="8" overflow="hidden" {...props}>
      <Image w="100%" h="100%" objectFit="cover" src={src} />
    </AspectRatio>
  );
};

export default SquareImage;
