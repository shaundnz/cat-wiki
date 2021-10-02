import { Box, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import DefaultLayout from "../app/common/components/layout/DefaultLayout";
import CatGrid from "../app/modules/home/components/CatGrid";
import MainContainer from "../app/modules/home/components/MainContainer";
import SecondaryContainer from "../app/modules/home/components/SecondaryContainer";

const Index = () => {
  return (
    <DefaultLayout>
      <MainContainer />
      <SecondaryContainer />
    </DefaultLayout>
  );
};

export default Index;
