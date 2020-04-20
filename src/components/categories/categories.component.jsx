import React from 'react';
import CategoryItems from '../category-item/category-item.component';

import './categories.styles.scss';

class Categories extends React.Component {
    render(){

        const categories = [
              {
                title: 'dresses',
                imageUrl: 'https://res.cloudinary.com/lindadxk/image/upload/v1586785821/Labrinth-Stores/dresses.jpg',
                linkUrl: 'dresses' , 
            },
            {
                title: 'Pants',
                imageUrl: 'https://res.cloudinary.com/lindadxk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1586786540/Labrinth-Stores/pants.jpg',
                linkUrl: 'pants' , 
            },
              {
                title: 'Tops',
                imageUrl: 'https://res.cloudinary.com/lindadxk/image/upload/c_fill,h_500,w_500/v1586787396/Labrinth-Stores/tops.jpg',
                linkUrl: 'tops' , 
            },
              {
                title: 'Lingerie',
                imageUrl: 'https://res.cloudinary.com/lindadxk/image/upload/c_fill,h_550,w_500/v1586787839/Labrinth-Stores/lingerie.jpg',
                size: 'large',
                linkUrl: 'lingerie' , 
              },
              {
                title: 'Shoes',
                imageUrl: 'https://res.cloudinary.com/lindadxk/image/upload/v1586787926/Labrinth-Stores/shoes.jpg',
                size: 'large',
                linkUrl: 'shoes' , 
              }
        ]
        return (
            <div className="categories">
              <CategoryItems categories = {categories} />
            </div>
        )
    }
}

export default Categories;