// this is for OUR PRODUCTS section on home page, not the products page itself

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'


const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,5));

    },[products])
    



    return (
        <div className='my-10' >
            <div className='text-center py-8 text-3xl'>
                <Title text1={'OUR '} text2={' PRODUCTS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our latest collection of fresh and delicious products, carefully crafted to satisfy your cravings and elevate your meals. From farm-fresh vegetables to mouthwatering snacks, our offerings are designed to bring joy to your table.
                </p>
            </div>
            {/*rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>

        </div>
    )
}
export default LatestCollection