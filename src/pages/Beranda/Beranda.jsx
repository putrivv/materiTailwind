import axios, { Axios } from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";



const nilaideafult ={
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) =>{
  switch (action.type){
    case "FETCH_BERHASIL":
      return{
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER" :
      return{
        filterData:action.payload
      };
      default :
        throw new Error("error dicase")
  }
};
const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaideafult);

  // const [resto, setResto] = useState();
  // const [hasilCari, setHasilCari] = useState();

  const [cari, setCari] = useSearchParams();
  const dataSearch = cari.get("dataSearch");

  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({type:"FETCH_BERHASIL", payload:data})
  };
  useEffect(() => {
    if (!dataSearch) {
      ambilResto();
    } else {
      gantiSearch(dataSearch);
    }
  }, [dataSearch]);

  const gantiSearch = useCallback(async (input) => {
    setCari({ dataSearch: input });
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/search?q=" + dataSearch
    );
    const data = await response.data;
    // setHasilCari(data);

    dispatch({type:"SET_FILTER", payload: data});

  },
  [dataSearch]
);
   
 const hasilFilter = dataSearch ? state.filterData : state.data;

  console.log(state);
  return (
    <BerandaView
      dataSearch={dataSearch}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      gantiSearch={gantiSearch}
    />
  );
};

export default Beranda;
