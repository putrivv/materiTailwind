import React from "react";
import { Link } from "react-router-dom";

const BerandaView = ({ gantiSearch, dataSearch, hasilCari, hasilFilter }) => {
  return (
    <div>
      <div className="flex flex-col">
          <div className="grid justify-items-stretch pt-12 bg-blue-200 dark:bg-zinc-500">
            <label className="input input-bordered flex items-center gap-2 justify-self-center w-[700px] bg-rose-100 dark:bg-zinc-300">
              
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={(input) => gantiSearch(input.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>

      </label>

      
      <div className="grid flex justify-center pt-8 pb-12 bg-blue-200 dark:bg-zinc-500">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 m-15">
        {hasilFilter?.restaurants?.map((data) => (
          <div className="" key={data?.name}>
            <div className="product-card card bg-indigo-300 dark:bg-zinc-700 dark:text-white w-96 shadow-2xl">
              <figure>
                <img
                  src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}  <div className="rating gap-1 ">
  <input type="radio" name="rating-1" className="mask mask-heart bg-red-300 dark:bg-zinc-900" /> 
</div></h2> 
                <p className="line-clamp-3">{data.description}</p>
                <div className="card-actions justify-end">
                  <Link to={"/detail/" + data.id} className="btn btn-default-active bg-violet-600 dark:bg-zinc-900 text-white">
                    Show
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default BerandaView;
