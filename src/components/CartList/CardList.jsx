import './CardList.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFecth';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Search, XSmall } from 'akar-icons';

const CardList = () => {
  const [cities, setCities] = useState([]);
  const [errorCities, setErrorCities] = useState(null);

  const [searchInput, setSearchInput] = useState('');
  const [showResetButton, setShowResetButton] = useState(false);
  const inputSearch = useRef('');


  const { data, error } = useFetch({ URL_API: `http://localhost:3000/cities?name=${searchInput}&country=` });

  useEffect(() => {
    if (data) {
      setCities(data.cities);
      setErrorCities(null);
    }

    if (error) {
      setErrorCities(error);
      setCities([]);
    }
  },
    [data, error]
  );

  const handleSearchChange = (e) => {
    const inputValue = e.target.value.trim();
    setShowResetButton(inputValue !== '');
    setSearchInput(inputValue);
  }

  const handleSearch = () => {
    const name = inputSearch.current.value;
    console.log(name)
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
          </span>
          <input ref={inputSearch} onChange={handleSearchChange} value={searchInput} className='input-search' type="text" placeholder='Search City' />
          {showResetButton && (
            <button className='reset-input' onClick={handleReset}>
              <XSmall strokeWidth={2} size={35} />
            </button>
          )}
          <button onClick={handleSearch} className='search-icon'>
            <Search strokeWidth={2} size={25} />
          </button>
        </div>
      </section>
      <section className='card-list'>
        {cities.length > 0 ?
          cities?.map((img) => (
            <Link className='link' key={img._id} to={'/cities/' + img._id}>
              <Card _id={img._id} name={img.name} country={img.country} image={img.image} currency={img.currency} />
            </Link>
          )) :
          (<ErrorMessage message={errorCities?.data?.message} />)
        }
      </section>
    </>
  )
}

export default CardList;
