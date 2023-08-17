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
    <div className="details" key={city?._id}>
      <img className="details-img" src={city.image} alt={"image " + city.name} />
      <div className="details-body">
        <h1>{city.name}</h1>
        <span>{city.country}</span>
        <p>{city.description}</p>
        <button className="btn">View Itinerary</button>
      </div>
    </div>
  )
}

export default CitiesDetailsPage;
