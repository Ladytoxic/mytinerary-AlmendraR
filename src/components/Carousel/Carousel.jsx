import './Carousel.css';
import { CircleChevronLeftFill, CircleChevronRightFill } from 'akar-icons';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('./data_cities.json')
      .then(resp => resp.json())
      .then(data => setCities(data));
  },
    []
  );

  const nextImage = () => {
    if (index + 4 < cities.length) {
      setIndex(index + 4);
    }
  }

  const prevImage = () => {
    if (index - 4 >= 0) {
      setIndex(index - 4);
    }
  }

  return (
    <section className='carousel fade-in'>
      <h2>Popular Mytineraries</h2>
      <div className='carousel-container'>
        {cities.slice(index, index + 4).map((img) => (
          <div key={img.id} className='carousel-card'>
            <img className='carousel-card-img' src={img.image} alt={`image ${img.name}`} />
            <div className='carousel-card-body'>
              <h3 className='carousel-card-title'>{img.name}</h3>
              <span className='carousel-card-country'>{img.country}</span>
            </div>
          </div>
        ))}

        {
          (index > 0 &&
            <button onClick={prevImage} className='btn-prev'>
              <CircleChevronLeftFill strokeWidth={2} size={35} />
            </button>
          )
        }
        {
          (index + 4 < cities.length &&
            <button onClick={nextImage} className='btn-next'>
              <CircleChevronRightFill strokeWidth={2} size={35} />
            </button>
          )
        }
      </div>
    </section>
  );
}

export default Carousel;

