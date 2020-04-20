import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='collection-preview_items'>
                {
                    items.filter((item, index) => index < 4).map((item,index) => (
                        <CollectionItem key={index}{...item}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )

}

export default CollectionPreview;