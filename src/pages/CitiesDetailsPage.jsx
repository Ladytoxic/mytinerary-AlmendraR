import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosHook from "../Hooks/useAxiosHook";

const CitiesDetailsPage = () => {
  const [city, setCity] = useState({});
  const { _id } = useParams();

  const { data, error } = useAxiosHook({ URL_API: 'http://localhost:3000/cities/' + _id });

  useEffect(() => {
    if (data) {
      setCity(data.city);
    }
  }, [data]);

  if (error) {
    return <p>Hubo un error: {error.message}</p>;
  }

  return (
    <div className="citiesPage" key={city?._id}>
      <h1>{city.name}</h1>
      <span>{city.country}</span>
      <p>{city.description}</p>
    </div>
  )
}

export default CitiesDetailsPage;
