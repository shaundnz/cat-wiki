import { NextPage } from "next";
import React from "react";
import DefaultLayout from "../app/common/components/layout/DefaultLayout";
import MainContainer from "../app/modules/home/components/MainContainer";

const Index = () => {
  return (
    <DefaultLayout>
      <MainContainer />
    </DefaultLayout>
  );
};

export default Index;
