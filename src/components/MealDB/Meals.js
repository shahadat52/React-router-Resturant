import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const mealDetails = useLoaderData();
  const { meals } = mealDetails;

  return (
    <div className="grid lg:grid-cols-4 gap-10 mt-4 md:grid-cols-3 sm:grid-cols-2">
      {meals.map((meal) => (
        <Meal meal={meal} key={meal.idMeal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
