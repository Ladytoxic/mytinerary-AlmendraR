import './Card.css';
import { Location } from 'akar-icons';

const Card = ({ _id, name, country, image }) => {

  return (
    <div className='card' key={_id}>
      <img className='card-img' src={image} alt={'imagen ' + name} />
      <div className='card-header'>
        <h4 className='card-title'>{name}</h4>
        <span className='card-coutry'><Location strokeWidth={2} size={16} /> {country}</span>
      </div>
      <button className='card-btn'>View more</button>
    </div>
  )
}

export default Card;
