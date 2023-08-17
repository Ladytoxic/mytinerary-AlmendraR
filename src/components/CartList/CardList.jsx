import './CardList.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import useAxiosHook from '../../Hooks/useAxiosHook';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CardList = () => {
  const [cities, setCities] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [errorCities, setErrorCities] = useState(null)

  const { data, error } = useAxiosHook({ URL_API: `http://localhost:3000/cities?name=${searchInput}&country=` })
  
  useEffect(() => {
    if (data) {
      setCities(data.cities);
    }
    if (error) {
      setErrorCities(error);
    }
  },
    [data, error]
  );

  const handleSearchChange = async (e) => {
    setSearchInput(e.target.value)
    // try {
    //   const resp = await axios.get(`http://localhost:3000/cities?name=${searchInput}&country=`);
    //   setCities(resp.data.cities)

    // } catch (error) {
    //   setErrorCities(error.response.data.message)
    //   console.log(error.response.data.message)
    // }
  }

  return (
    <>
      <section className='filtter'>
        <div className='search'>
          <input onChange={handleSearchChange} className='input-search' type="text" placeholder='Search City' />
        </div>
        {errorCities && (
          <ErrorMessage message={error.data.message} />
        )}
      </section>
      {errorCities ? null : (
        <section className='card-list'>
          {(cities?.map((img) => (
            <Link className='link' key={img._id} to={'/cities/' + img._id}>
              <Card _id={img._id} name={img.name} country={img.country} image={img.image} />
            </Link>
          )))}
        </section>
      )}
    </>
  )
}

export default CardList;
