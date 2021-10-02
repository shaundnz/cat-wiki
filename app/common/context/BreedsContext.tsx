import React, { createContext, useState } from "react";
import Breed from "../types/breed";

interface IBreedsContext {
  breeds: Breed[];
  setBreeds: React.Dispatch<React.SetStateAction<Breed[]>>;
}

export const BreedsContext = createContext<IBreedsContext>({
  breeds: [],
  setBreeds: () => {},
});

const BreedsContextProvider: React.FC = (props) => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  return (
    <BreedsContext.Provider value={{ breeds, setBreeds }}>
      {props.children}
    </BreedsContext.Provider>
  );
};

export default BreedsContextProvider;
