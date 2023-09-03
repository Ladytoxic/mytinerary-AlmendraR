import { useEffect } from "react";
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
            <button className="btn">View Itinerary</button>
          </div>
        </header>
      ) : <ErrorMessage message={'No city found'} />
      )}
      <main>
        <Itineraries
        
          _id={'123'}
          city={city?.name}
          title={'Paseo por calles de tierra'}
          description={'Caminata por un barrio picante, calles de primer mundo (Cuidad tus pertenecias) fisuras en todas las esquinas'}
          name={'Almendra Limón🍋'}
          img={'https://almendraromina.firebaseapp.com/assets/img/Default_stunningly_beautiful_woman_posing_like_a_professional_model_3_5a02cfef-2199-46b9-919c-7b13dac32d3c_1.jpg'}
          duration={4}
          likes={5}
          price={3}
        />
      </main>
    </>
  )
}

export default CitiesDetailsPage;
