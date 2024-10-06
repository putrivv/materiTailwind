import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import ProductView from "./ProductView";

export default function Data() {
  const [data, setData] = useState();
  
  const ambilData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  useEffect(() => {
    ambilData();
  }, []);

  return <ProductView data={data} />;
}
