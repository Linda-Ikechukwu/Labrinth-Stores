import React from 'react';
import './collection-item.styles.scss';


const CollectionItem =({name,price,imageUrl}) => (
    <div className='collection-item'>
       <div className='collection-item_image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
       >
       </div>
       <div className='collection-item_footer'>
        <span className='collection-item_name'>{name}</span>
        <span className='collection-item_price'>{price}</span>
       </div>
    </div>
)

export default CollectionItem;