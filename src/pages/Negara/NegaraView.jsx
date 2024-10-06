import React from "react";
import { Link } from "react-router-dom";
const NegaraView = ({ ubahCari, cariNegara, hasilCari, hasilFilter }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="min-h-screen bg-amber-100 dark:bg-slate-500">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 justify-center w-full max-w-md ">
            <label className="input input-bordered flex items-center gap-2 bg-rose-100 dark:bg-slate-200">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={(input) => ubahCari(input.target.value)}
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

            <div className="text-lg text-white">
              <p>
                Hasil dari: {cariNegara}, ditemukan: {hasilCari?.founded}
              </p>
            </div>
          </div>
          {/* </div> */}

          <div className="grid flex justify-center pt-12 bg-white-800 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12">
              {hasilFilter?.map((data) => (
                <div
                  className="product-card card bg-green-300 dark:bg-slate-700 text-white card-compact bg-base-100 w-96 shadow-xl"
                  key={data?.name}
                >
                  <figure>
                    <img src={data.flag} alt="data" />                   
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.name} <div className="rating">
</div></h2>
                    <p className="line-clamp-3">{data.currency}</p>
                    <div className="card-actions justify-end">
                      <Link
                        to={"/detailnegara/" + data.id}
                        className="btn bg-rose-300 dark:bg-slate-400 text-black"
                      >
                        Show
                      </Link>
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

export default NegaraView;
