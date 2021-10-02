import { Box, BoxProps, Heading } from "@chakra-ui/react";
import React from "react";
import SquareImage from "../../../common/components/elements/SquareImage";

interface Props {
  src: string;
  title: string;
}

const CatImageWithTitle: React.FC<BoxProps & Props> = ({
  src,
  title,
  ...props
}) => {
  return (
    <Box {...props}>
      <SquareImage src={src} w="100%" />
      <Heading as="h5" size="md">
        {title}
      </Heading>
    </Box>
  );
};

export default CatImageWithTitle;
