import { Box, BoxProps, chakra } from "@chakra-ui/react";
import * as React from "react";
import NextImage, { ImageProps, ImageLoaderProps } from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export const ChakraNextImage: React.FC<ImageProps & BoxProps> = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <NextImage objectFit="cover" layout="fill" src={src} alt={alt} />
    </Box>
  );
};
