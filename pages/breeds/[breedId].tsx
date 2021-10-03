import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import IBreed from "../../app/common/types/breed";
import { ParsedUrlQuery } from "querystring";
import DefaultLayout from "../../app/common/components/layout/DefaultLayout";
import BreedInfo from "../../app/modules/breeds/components/modules/BreedInfo";
import BreedPhotos from "../../app/modules/breeds/components/modules/BreedPhotos";

interface Params extends ParsedUrlQuery {
  breedId: string;
}

interface Props {
  breed: IBreed;
  imageUrls: string[];
}

const Breed: React.FC<Props> = (props) => {
  const router = useRouter();
  const { breedId } = router.query;

  return (
    <DefaultLayout>
      <BreedInfo breed={props.breed} />
      <BreedPhotos imageUrls={props.imageUrls} />
    </DefaultLayout>
  );
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

interface ImageResponse {
  id: string;
  url: string;
  width: string;
  height: string;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { breedId } = context.params as Params;
  const API_KEY = process.env.API_KEY;
  if (API_KEY == null) throw new Error("Error: API Key is null");
  const breedRes = await axios.get<IBreed>(
    `https://api.thecatapi.com/v1/breeds/${breedId}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );

  const imagesRes = await axios.get<ImageResponse[]>(
    `https://api.thecatapi.com/v1/images/search?limit=8&page=1&order=Random&size=thumb&breed_id=${breedId}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );

  const images = imagesRes.data.map((res) => res.url);
  return {
    props: { breed: breedRes.data, imageUrls: images },
  };
};
