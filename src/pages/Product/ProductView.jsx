import "./styleproduct.scss";
import { Link } from "react-router-dom";

export default function ProductView({ data }) {
  try {
    return (
      <div className=".product-container flex flex-col pt-12">
        <div className="flex justify-center text-center pb-6">
          <h2 className="font-bold text-2xl">Product</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            {data?.map((data, index) => (
              <div className="product-card card bg-base-100 w-96 shadow-xl" key={index}> 
                <figure>
                  <img
                    src={data.image}
                    alt="shoes"
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className=".product-card card-title">{data.title}</h2>
                  <p className="line-clamp-3">{data.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={"/detail/" + data.id} className="btn btn-primary-.buy-button">
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
  }
}
