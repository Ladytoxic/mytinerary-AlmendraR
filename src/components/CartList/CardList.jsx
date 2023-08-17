import './CardList.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import useAxiosHook from '../../Hooks/useAxiosHook';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CardList = () => {
  const [cities, setCities] = useState();
  const [searchInput, setSearchInput] = useState('');

  const { data, error } = useAxiosHook({ URL_API: `http://localhost:3000/cities?name=${searchInput}&country=` });

  useEffect(() => {
    if (data) {
      setCities(data.cities);
    }
  },
    [data]
  );

  const SearchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <>
      <section className='filtter'>
        <div className='search'>
          <input onChange={SearchInputChange} className='input-search' type="text" placeholder='Search City' />
        </div>
        {error && (
          <ErrorMessage message={error.data.message} />
        )}
      </section>
      <section className='card-list'>
        {(cities?.map((img) => (
          <Link className='link' key={img._id} to={'/cities/' + img._id}>
            <Card _id={img._id} name={img.name} country={img.country} image={img.image} />
          </Link>
        )))}
      </section>
    </>
  )
}

export default CardList;
