import './CardList.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFecth';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Search, XSmall } from 'akar-icons';

const CardList = () => {
  const [cities, setCities] = useState();
  const [errorCities, setErrorCities] = useState(null);

  const [searchInput, setSearchInput] = useState('');
  const [showResetButton, setShowResetButton] = useState(false);


  const { data, error } = useFetch({ URL_API: `http://localhost:3000/cities?name=${searchInput}&country=` });

  useEffect(() => {
    if (data) {
      setCities(data.cities);
      setErrorCities(null);
    }

    if (error) {
      setErrorCities(error);
    }
  },
    [data, error]
  );

  const handleSearchChange = (e) => {
    const inputValue = e.target.value.trim();
    setShowResetButton(inputValue !== '');
    setSearchInput(inputValue);
  }

  const handleReset = () => {
    setSearchInput('');
    setErrorCities(null);
    setShowResetButton(false);
  };


  return (
    <>
      <section className='filtter'>
        <div className='search'>
          <span className='search-icon'>
            <Search strokeWidth={2} size={25} />
          </span>
          <input onChange={handleSearchChange} className='input-search' type="text" placeholder='Search City' />
          {showResetButton && (
            <button className='reset-input' onClick={handleReset}>
              <XSmall strokeWidth={2} size={35} />
            </button>
          )}
        </div>
        {errorCities && (
          <ErrorMessage message={error.data.message} />
        )}
      </section>
      <section className='card-list'>
        {(cities?.map((img) => (
          <Link className='link' key={img._id} to={'/cities/' + img._id}>
            <Card _id={img._id} name={img.name} country={img.country} image={img.image} currency={img.currency} />
          </Link>
        )))}
      </section>
    </>
  )
}

export default CardList;
