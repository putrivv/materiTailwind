import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product/Product";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();
  const ambilData = async () => {
    const response = await axios.get(
      "hhttps://fakestoreapi.com/products/" + id
    );
    const data = await response.data;
    setData(data);
  };

  useEffect(() => {
    // ambilData()
    ambilData();
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen  bg-slate-800">
      <div className="hero-content text-center space-y-8 flex-col">
        <img src={data?.image} className="max-w-sm rounded-lg shadow-inner" />
        <div className="rating gap-1">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-red-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-green-400"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{data.title}</h1>
          <p className="py-6 max-w-[50rem] text-center">{data.description}</p>
          <Link to="/product" className="btn bg-red-400 text-white">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
