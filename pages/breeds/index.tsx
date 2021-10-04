import { Heading, Stack, VStack, StackDivider } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import DefaultLayout from "../../app/common/components/layout/DefaultLayout";
import Breed from "../../app/common/types/breed";
import BreedBrief from "../../app/modules/breeds/components/modules/BreedBrief";

interface Props {
  breeds: Breed[];
}

interface GetImageResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const API_KEY = process.env.API_KEY;
  if (API_KEY == null) throw new Error("Error: API Key is null");
  const res = await axios.get<Breed[]>("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  const breeds = res.data;

  const updatedBreeds = await Promise.all(
    breeds.map(async (breed, index) => {
      if (breed.image == null) {
        const imageRes = await axios.get<GetImageResponse[]>(
          `https://api.thecatapi.com/v1/images/search?limit=1&breed_id=${breed.id}`
        );

        breed.image = {
          height: imageRes.data[0].height,
          width: imageRes.data[0].width,
          url: imageRes.data[0].url,
          id: imageRes.data[0].id,
        };
      }
      return breed;
    })
  );

  return {
    props: {
      breeds: updatedBreeds,
    },
  };
};

const BreedsIndex: React.FC<Props> = ({ breeds }) => {
  return (
    <>
      <Head>
        <title>Breeds</title>
      </Head>
      <DefaultLayout>
        <Stack color="#291507" py="6">
          <Heading fontSize="5xl" as="h1" pb="6">
            Browse All Breeds:
          </Heading>
          <VStack
            align="stretch"
            spacing={12}
            divider={<StackDivider borderColor="gray.200" />}
          >
            {breeds.map((breed, index) => (
              <BreedBrief key={index} breed={breed} />
            ))}
          </VStack>
        </Stack>
      </DefaultLayout>
    </>
  );
};

export default BreedsIndex;
