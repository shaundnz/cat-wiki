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

interface LandingPageProps {
  breeds: Breed[];
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

  return {
    props: {
      breeds,
    },
  };
};

const Index: React.FC<LandingPageProps> = (props) => {
  const breedsContext = useContext(BreedsContext);

  useEffect(() => {
    breedsContext.setBreeds(props.breeds);
  }, []);

  return (
    <DefaultLayout>
      <MainContainer />
      <SecondaryContainer />
    </DefaultLayout>
  );
};

export default Index;
