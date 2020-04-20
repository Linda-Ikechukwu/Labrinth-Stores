import React from 'react';
import {withRouter} from 'react-router';

import './category-item.styles.scss';

const CategoryItems = props => {
    const categories = props.categories.map((category,index) => {
     return(
        <div 
           key ={index}
           className={`${category.size} category-item`}
           onClick = {() => props.history.push(`${props.match.path}${category.linkUrl}`)}
        >
        <div 
           className="background-image"
           style= {{
               backgroundImage: `url(${category.imageUrl})`
           }}
        >
        </div>
        <div className="content">
            <h1 className="title">{category.title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    )
  })

  return (
     <div>{categories}</div>
  )
  
}

export default withRouter(CategoryItems);