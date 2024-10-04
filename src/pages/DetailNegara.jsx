import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [negara, setNegara] = useState();
  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries/" + id
    );
    const data = await response.data;
    setNegara(data);
  };

  useEffect(() => {
    // ambilData()
    ambilNegara();
  }, []);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name }</h1>
    // </div>
    <div className="hero bg-base-200 min-h-screen  bg-slate-800">
      <div className="hero-content text-center space-y-8 flex-col">
        <img src={negara?.flag} className="max-w-sm rounded-lg shadow-inner" />
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
          <h1 className="text-5xl font-bold">{negara?.name}</h1>
          <p className="py-6 max-w-[50rem] text-center">{negara?.currency}</p>
          <Link to="/negara" className="btn bg-red-400 text-white">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
