import './Itineraries.css';
import { Heart, Clock, ChevronDownSmall, ChevronUpSmall, Hashtag, Money } from 'akar-icons';
import Activities from './Activities/Activities';
import Comments from '../Comments/Comments';
import { useState } from 'react';

const Itineraries = ({ title, description, img, duration, likes, name, hashtags, price }) => {
    const [showActivities, setShowActivities] = useState(false);
    const [buttonText, setButtonText] = useState('View more');

    const viewActivities = () => {
        setShowActivities(!showActivities);
        setButtonText(showActivities ? 'View more' : 'Hide activities');
    }

    return (
        <div className='card-itinerary'>
            <div className='card-itinerary-profile'>
                <img className='card-itinerary-img-profile' src={img} alt={name + ' (image profile)'} />
                <div className='box-profile'>
                    <em>Published by:</em>
                    <h4 className='card-itinerary-name-profile'>{name}</h4>
                </div>
            </div>
            <div className='card-itinerary-body'>
                <h3 className='card-itinerary-title'>{title}</h3>
                <em className='card-itinerarary-description'>{description}</em>
                <ul className='card-itinerary-list'>
                    <li className='card-itinerary-hashtags'>
                        {hashtags.map((tag, index) => (
                            <span key={index} className='hashtag'>
                                <Hashtag strokeWidth={2} size={20} />
                                {tag}
                            </span>
                        ))}
                    </li>
                    <li className='card-itinerary-price'>
                        <em>Price range:</em>
                        {Array.from({ length: price }).map((_, index) => (
                            <span key={index} className='price'>
                                <Money strokeWidth={2} size={24} />
                            </span>
                        ))}
                    </li>
                    <li className='card-itinerary-details'>
                        <span className='card-itinerary-duration'>
                            <Clock strokeWidth={2} size={25} />
                            <strong>({duration} hours)</strong>
                        </span>
                        <span className='card-itinerary-likes'>
                            <Heart strokeWidth={2} size={25} />
                            <strong>({likes} Likes)</strong>
                        </span>
                    </li>
                </ul>
            </div>
            {
                showActivities &&
                (<div className='itinerary-activities'>
                    <Activities />
                    <Comments />
                </div>)
            }
            <button className='btn view-activities' onClick={viewActivities}>
                <span>{buttonText}</span>
                {showActivities ? (
                    <ChevronUpSmall strokeWidth={2} size={28} /> 
                ) : (
                    <ChevronDownSmall strokeWidth={2} size={28} />
                )}
            </button>
        </div >
    )
}

export default Itineraries;
