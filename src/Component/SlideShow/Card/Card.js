import React from 'react';
import {Link} from 'react-router-dom';
//css
import './Card.scss';
//icons
import { LocalHotel,HotTub,TimeToLeave,LocationOn } from '@material-ui/icons';

const card = ({property,active}) => {
  const {picture,price,city,address,bedrooms,bathrooms,carSpaces} = property;
  const cardClass = ['card'];
  if(active) cardClass.push('active');
  return (
    <div className={cardClass.join(' ')}>
      <Link
        to={{
          pathname:`/detail/${city}`,
          state:{property}
        }}
      >
        <img src={picture} alt={address}/>
        <span className='price'><strong>{price}</strong> $</span>
        <div className='detail-icon'>
          <span><LocalHotel/>{bedrooms}</span>
          <span><HotTub/>{bathrooms}</span>
          <span><TimeToLeave/>{carSpaces}</span>
        </div>
        <span className='city'><LocationOn/>{city}</span>
      </Link>

    </div>
  )
}

export default card;