import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Money } from "akar-icons";
import { useDispatch, useSelector } from 'react-redux';
import { get_city } from "../store/acitions/citiesActions";


const CitiesDetailsPage = () => {
  const { _id } = useParams();
  const city = useSelector((store) => store.citiesReducer.city);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(get_city({
      id: _id
    }));
  },
    [dispatch]
  );
  // const [city, setCity] = useState({});

  // const { data, error } = useFetch({ URL_API: 'http://localhost:3000/cities/' + _id });

  // useEffect(() => {
  //   if (data) {
  //     setCity(data.city);
  //   }

  //   if (error) {
  //     setErrorCities(error);
  //   }
  // },
  //   [data, error]
  // );

  return (
    <div className="details" key={city?._id}>
      <img className="details-img" src={city?.image} alt={"image " + city.name} />
      <div className="details-body">
        <h1>{city?.name}</h1>
        <span>{city?.country}</span>
        <p>{city?.description}</p>
        <span className="details-currency" ><Money strokeWidth={2} size={25} />  {city?.currency}</span>
        <button className="btn">View Itinerary</button>
      </div>
    </div>
  )
}

export default CitiesDetailsPage;
