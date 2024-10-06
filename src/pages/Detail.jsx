import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [resto, setResto] = useState();
  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/detail/" + id
    );
    const data = await response.data;
    setResto(data);
  };
  useEffect(() => {
    ambilResto();
  }, []);

  useEffect(() => {
    ambilResto();
  }, []);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen bg-blue-200 dark:bg-zinc-500 dark:text-white">
        <div className="hero-content text-center space-y-8 flex-col">
          <img
            src={`https://restaurant-api.dicoding.dev/images/large/${resto?.restaurant.pictureId}`}
            className="max-w-sm rounded-lg shadow-xl mt-10"
          />
          <div>
            <h1 className="text-6xl font-bold text-center">{resto?.restaurant?.name}</h1>
            <p className="py-6 max-w-[50rem]">{resto?.restaurant?.description}
            </p>
            <Link to="/" className="btn btn-default-active bg-violet-600 dark:bg-zinc-900 text-white">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
