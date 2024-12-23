'use client';

import React from "react";
import axios from "axios";

// Define the type for each object in the array
type DataItem = {
  id: number;
  name: string;
  image: string;
};

const Home: React.FC = () => {
  const getQuote = (): void => {
    axios.get("/apifolder/exercises/Myapi.json")
      .then((response) => {
        const Data: DataItem[] = response.data; 
        console.log(Data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <button onClick={getQuote}>click me</button>
      </div>
    </div>
  );
};

export default Home;
