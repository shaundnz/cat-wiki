import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import IBreed from "../../app/common/types/breed";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  breedId: string;
}

const Breed: React.FC<IBreed> = (props) => {
  const router = useRouter();
  const { breedId } = router.query;

  return <div>{breedId}</div>;
};

export default Breed;

export const getStaticPaths: GetStaticPaths = async () => {
  const API_KEY = process.env.API_KEY;
  if (API_KEY == null) throw new Error("Error: API Key is null");
  const res = await axios.get<IBreed[]>("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  const breeds = res.data;

  const paths = breeds.map((breed) => {
    return {
      params: {
        breedId: breed.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBreed> = async (context) => {
  const { breedId } = context.params as Params;
  const API_KEY = process.env.API_KEY;
  if (API_KEY == null) throw new Error("Error: API Key is null");
  const res = await axios.get<IBreed>(
    `https://api.thecatapi.com/v1/breeds/${context.params.breedId}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );

  const props = res.data;

  return {
    props,
  };
};
