import React from 'react';
import {Link} from 'react-router-dom';
//icon
import { LocalHotel,HotTub,TimeToLeave,LocationOn } from '@material-ui/icons';
//css
import './Card.scss';

const card = ({property}) => {
  const {picture,price,city,address,bedrooms,bathrooms,carSpaces} = property;

  return(
    <div className='carousel-card'>
      <Link to={{
        pathname: `/detail/${address}`,
        state:{property}
      }}>
        <img src={picture} alt={address}/>
        <div className='detail-icon'>
          <div>
            <span><LocalHotel/>{bedrooms}</span>
            <span><HotTub/>{bathrooms}</span>
            <span><TimeToLeave/>{carSpaces}</span>
          </div>
          <span className='city'><LocationOn/>{city}</span>
        </div>
        <div className='price'><strong>{price}</strong> $</div>
      </Link>

    </div>
  )
}

export default card;