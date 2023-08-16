import './CardList.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Location } from 'akar-icons';

const CardList = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch('/dataApi.json')
      .then(resp => resp.json())
      .then(data => {
        setCities(data);
      })
      .catch(error => {
        console.log(error);
      });
  },
    []
  );

  return (
    <section className='card-list'>
      {(cities.map((img) => (
        <Link className='link' key={img._id} to={'/cities/' + img._id}>
          <div className='card'>
            <img className='card-img' src={img.image} alt={'imagen' + img.title} />
            <div className='card-header'>
              <h4 className='card-title'>{img.name}</h4>
              <span className='card-coutry'><Location strokeWidth={2} size={16} /> {img.country}</span>
            </div>
            <button className='card-btn'>View more</button>
          </div>
        </Link>
      )))}
    </section>
  )
}

export default CardList
