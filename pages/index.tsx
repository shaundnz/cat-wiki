import { Box, Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import React, { useContext, useEffect } from "react";
import DefaultLayout from "../app/common/components/layout/DefaultLayout";
import { BreedsContext } from "../app/common/context/BreedsContext";
import Breed from "../app/common/types/breed";
import CatGrid from "../app/modules/home/components/CatGrid";
import MainContainer from "../app/modules/home/components/MainContainer";
import SecondaryContainer from "../app/modules/home/components/SecondaryContainer";
import Head from "next/head";

interface LandingPageProps {
  breeds: Breed[];
}
interface GetImageResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
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

const Index: React.FC<LandingPageProps> = (props) => {
  const breedsContext = useContext(BreedsContext);

  useEffect(() => {
    breedsContext.setBreeds(props.breeds);
  }, []);

  return (
    <>
      <Head>
        <title>Cat Wiki</title>
      </Head>
      <DefaultLayout>
        <MainContainer />
        <SecondaryContainer />
      </DefaultLayout>
    </>
  );
};

export default Index;
