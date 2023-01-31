import React from "react";
// import CollectionItem from '../collection_item/collection_item.component';
import CollectionItem from "../collection_item/collection_item.component";

import './collection_preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;