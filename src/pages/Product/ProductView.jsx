import product from "./Product";
import "./styleproduct.scss";
import { Link } from "react-router-dom";

export default function ProductView({ data }) {
  try {
    return (
      <div className=".product-container flex flex-col pt-12 bg-red-100 dark:bg-neutral-700">
        <div className="flex justify-center text-center pb-6">
          <h2 className="text-3xl font-bold dark:text-white">Product</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-12 m-9">
            {data?.map((data, index) => (
              <div className="product-card card bg-rose-200 dark:bg-neutral-400 w-96 shadow-2xl" key={index}> 
                <figure>
                  <img
                    src={data.image}
                    alt="products"
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className=".product-card card-title">{data.title}</h2>
                  <p className="line-clamp-3">{data.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={"/detailp/" + data.id} className="btn btn-primary-.buy-button bg-rose-300 dark:bg-neutral-600 dark:text-white">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  };
};

