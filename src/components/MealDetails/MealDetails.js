import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const singleDetails = useLoaderData();
  const details = singleDetails.meals[0];
  console.log(details);
  const {
    strTags,
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
  } = details;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl md:hidden lg:hidden sm:block mx-auto">
        <figure>
          <img src={strMealThumb} alt="Movie" className="rounded-l-2xl" />
        </figure>
        <div className="card-body">
          <p className="card-title">
            Name: <small>{strMeal}</small>
          </p>
          <p className="card-title">
            Tag: <small>{strTags ? strTags : "No Tag Info"}</small>
          </p>
          <p className="card-title">
            Category: <small>{strCategory}</small>
          </p>
          <p className="card-title">
            Area: <small>{strArea}</small>
          </p>

          <small className="text-justify">
            {strInstructions.slice(0, 400)}
          </small>
        </div>
      </div>

      <div className="grid bg-teal-200 h-screen  text-center md:block lg:block sm:hidden  ">
        <div className="card card-side h-1/2 bg-base-100 shadow-xl ">
          <figure>
            <img src={strMealThumb} alt="Movie" className="rounded-l-2xl" />
          </figure>
          <div className="card-body">
            <p className="card-title">
              Name: <small>{strMeal}</small>
            </p>
            <p className="card-title">
              Tag: <small>{strTags ? strTags : "No Tag Info"}</small>
            </p>
            <p className="card-title">
              Category: <small>{strCategory}</small>
            </p>
            <p className="card-title">
              Area: <small>{strArea}</small>
            </p>

            <small className="text-justify">
              {strInstructions.slice(0, 400)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
