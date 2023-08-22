import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFecth";
import { Money } from "akar-icons";

const CitiesDetailsPage = () => {
  const [city, setCity] = useState({});
  const { _id } = useParams();

  const { data, error } = useFetch({ URL_API: 'http://localhost:3000/cities/' + _id });

  useEffect(() => {
    if (data) {
      setCity(data.city);
    }

    if (error) {
      setErrorCities(error);
    }
  },
    [data, error]
  );

  return (
    <div className="details" key={city?._id}>
      <img className="details-img" src={city?.image} alt={"image " + city.name} />
      <div className="details-body">
        <h1>{city?.name}</h1>
        <span>{city?.country}</span>
        <p>{city?.description}</p>
        <span className="details-currency" ><Money strokeWidth={2} size={25} />  {city?.currency}</span>
        <button className="btn">View Itinerary</button>
        <h2 className="page-contriction">Page under construction🏗️</h2>
      </div>
    </div>
  )
}

export default CitiesDetailsPage;
