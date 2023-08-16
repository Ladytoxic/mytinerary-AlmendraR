import './Banner.css';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <header className='headerPage citiesPage'>
      <img className='banner-img' src={bannerImg} alt="" />
      <div className='hero'>
        <h1 className='title'>Cities</h1>
        <p className='subtitle'>Collection of the most beautiful<br />
          place and experience.</p>
      </div>
    </header>
  )
}

export default Banner;
