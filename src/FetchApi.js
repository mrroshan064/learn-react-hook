import React from "react";
import useData from "./useData";

const FetchApi = () => {
  const { data, isLoading, isError } = useData("/products");

  if (isLoading) return <h1>Loading..</h1>;
  if (isError) {
    console.log("error");
  }

  return (
    <div>
      {data?.map((item) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
};

export default FetchApi;
