import './Carousel.css';
import { CircleChevronLeftFill, CircleChevronRightFill } from 'akar-icons';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [count, setCount] = useState(0)
  const img = [
    {
      title: 'Tokio',
      url: './image/tokio.jpg'
    },
    {
      title: 'New Your',
      url: './image/newyour.jpg'
    },
    {
      title: 'Buenos Aires',
      url: './image/buenos_aires.jpg'
    },
    {
      title: 'Madrid',
      url: './image/madrid.jpg'
    }
  ]
  return (
    <section className='carousel fade-in'>
      <h2>Cities</h2>
      <div className='carousel-container'>
        {/* <figure className='carousel-background' >
          <img className='carousel-background-img' src="./image/fondo.jpg"/>
        </figure> */}
        {
          img.map((img) => (
            <div className='carousel-card'>
              <img className='carousel-card-img' src={img.url} alt={`image ${img.title}` } />
              <div className='carousel-card-body'>
                <h3 className='carousel-card-title'>{img.title}</h3>
              </div>
            </div>
          ))
        }
        <button className='btn-prev'>
          <CircleChevronLeftFill strokeWidth={1} size={20} />
        </button>
        <button className='btn-next'>
          <CircleChevronRightFill strokeWidth={1} size={20} />
        </button>
      </div>
    </section>
  )
}

export default Carousel
