import React, {useEffect} from 'react';
import {useLazyGetCategoriesQuery, useGetProductsQuery} from "../../store/shop/shop.api";
import {Product} from "../../models/models";
import ProductCard from "../../components/Product-Card/Product-Card";
import './Home.css';

const Home = () => {
    const {isLoading, isError, data} = useGetProductsQuery('10', {
        refetchOnFocus: false
    });

    const [fetchCategory, {isLoading: s, isError: d, data: c}] = useLazyGetCategoriesQuery();


    useEffect(() => {
        fetchCategory();
    }, []);
    console.log(isLoading, s);
    console.log(c);
    console.log(isError, d);

    return (
        <div>
            {isError &&
                <div>
                    <h4>Something wrong went...</h4>
                </div>
            }
            {isLoading &&
                <p>Loading.....</p>
            }
            <div className="cards-block">
                {data?.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;