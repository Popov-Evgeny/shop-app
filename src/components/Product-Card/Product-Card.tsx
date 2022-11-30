import React from 'react';
import {Product} from "../../models/models";
import './Product-Card.css';
import {Link} from "react-router-dom";

interface Props {
    product: Product,
    showCardContent?: boolean
}

const ProductCard: React.FC<Props> = ({product, showCardContent}) => {

    return (
        <div className="card">
            <div className="card-img">
                <img src={product.image} alt={product.title}/>
            </div>
            <h3 className="card-title">{product.title}</h3>
            {showCardContent ?
                (<>
                    <p className="card-description">{product.description}</p>
                    <p>Price: <strong>{product.price} $</strong></p>
                </>) :
                (<Link className="card-link" to="/about">Read more...</Link>)
            }
        </div>
    );
};

export default ProductCard;