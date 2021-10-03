import {
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  Image,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  InputGroup,
  Input,
  InputRightElement,
  chakra,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Search from "./Search";
import NextImage from "next/image";
import { ChakraNextImage } from "../../../common/components/elements/ChakraNextImage";

const MainContainerTop = () => {
  const imageSource = useBreakpointValue([
    "/images/HeroImagesm.png",
    "/images/HeroImagemd.png",
    "/images/HeroImagelg.png",
  ]);

  const headingSize = useBreakpointValue(["lg", "2xl"]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const HeroImage = chakra(NextImage, {
    baseStyle: { minH: "140px", objectFit: "cover" },
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

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
          <Search display={["none", "block"]} />
          <InputGroup size="sm" display={["block", "none"]} onClick={onOpen}>
            <Input
              bg="white"
              color="black"
              placeholder="Search"
              borderRadius="full"
            />
            <InputRightElement
              fontSize="sm"
              children={<SearchIcon color="gray.300" />}
            />
          </InputGroup>
          <Modal onClose={onClose} size="md" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader></ModalHeader>
              <ModalBody py="4" pb="6">
                <Box>
                  <Search />
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </VStack>
      <Image
        src={imageSource ? imageSource : "/images/HeroImagelg.png"}
        minH="140px"
        objectFit="cover"
      />
    </Flex>
  );
};

export default MainContainerTop;
