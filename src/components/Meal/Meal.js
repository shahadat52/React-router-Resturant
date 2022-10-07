import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, strCategory, idMeal } = meal;
  return (
    <div
      className="rounded-lg border border-teal-400 bg-emerald-500 shadow-lg shadow-gray-600 mx-auto "
      data-aos="flip-up"
    >
      <img src={strMealThumb} alt="" className="w-80 rounded-t-lg mb-5 " />
      <div className="my-4 pl-2">
        <p>Name: {strMeal}</p>
        <p>Category: {strCategory}</p>
      </div>

      <Link to={`/meal/${idMeal}`}>
        <button className="bg-blue-500 w-full py-2 rounded-b-lg focus:bg-green-900 focus:text-white hover:bg-slate-500 hover:text-green-300">
          Details(•_•)
        </button>
      </Link>
    </div>
  );
};

export default Meal;
