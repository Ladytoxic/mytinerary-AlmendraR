import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Money } from "akar-icons";
import { useDispatch, useSelector } from 'react-redux';
import { get_city } from "../store/acitions/citiesActions";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Itineraries from "../components/Itineraries/Itineraries";


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

  const viewItineraries = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {(city ? (
        <header className="details" key={city?._id}>
          <img className="details-img" src={city?.image} alt={"image " + city.name} />
          <div className="details-body">
            <h1>{city?.name}</h1>
            <span>{city?.country}</span>
            <p>{city?.description}</p>
            <span className="details-currency" ><Money strokeWidth={2} size={25} />  {city?.currency}</span>
            <button className="btn" onClick={viewItineraries}>View Itinerary</button>
          </div>
        </header>
      ) : <ErrorMessage message={'No city found'} />
      )}
      {city &&
        (<main>
          <section className="itineraries" key={city.itineraries}>
            <h2 className='section-title'>{city.name + ' itineraries'}</h2>
            {city.itineraries?.length > 0 ?
              city.itineraries?.map((itinerary) => (
                <Itineraries
                  key={itinerary._id}
                  city={city?.name}
                  title={itinerary.name}
                  description={itinerary.description}
                  name={itinerary.user.name}
                  img={itinerary.user.image}
                  duration={itinerary.duration}
                  likes={itinerary.likes}
                  price={itinerary.price}
                  hashtags={itinerary.hashtags}
                />
              )) :
              <ErrorMessage message={'No itineraries found'} />
            }
          </section>
        </main>)}
    </>
  )
}

export default CitiesDetailsPage;
