import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { mealDetails } from "../redux/MealDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

export const MealDetails = () => {
  let { data, loading, error } = useSelector((state) => state.mealInfo);
  let dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(mealDetails(id));
  }, [dispatch,id]);

  if (loading) {
    return "Loading";
  }

  if(error){
    return "Error";
  }

  return (
    <>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
    </>
  );
};
