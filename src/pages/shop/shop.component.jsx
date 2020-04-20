import React from 'react';
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss'

class Shoppage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shopItems: SHOP_DATA
        }
    }

    render(){
        const collections = this.state.shopItems;
        return(
            <div className='shoppage'>
               {
                   collections.map((collection,index) => {
                       return <CollectionPreview key={index} {...collection}/>
                   })
               }
            </div>
        )
    }
}

export default Shoppage;