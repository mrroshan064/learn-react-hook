import React from "react";
import useFetch from "./useFetch";

const User = () => {
  const { data, loading, error } = useFetch("/products");

  if (loading) return <h1>Loading..</h1>;
  if (error) {
    console.log("error");
  }
  return (
    <div>
      {data?.map((item, key) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
};

export default User;
