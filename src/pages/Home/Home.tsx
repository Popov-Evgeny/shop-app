import React from 'react';
import {useSearchProductsQuery} from "../../store/shop/shop.api";

const Home = () => {
    const {isLoading, isError, data} = useSearchProductsQuery('9');

    console.log(isLoading);
    console.log(data);
    console.log(isError);

    return (
        <div>

        </div>
    );
};

export default Home;