import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { backendUrl } from '../../../admin/src/App';

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '₹';

    const backendUrl = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '');
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();
    // const delivery_charge = 10;
    const delivery_charge = () => {
    const cartAmount = getCartAmount();
    return cartAmount >= 500 ? 0 : 25;
};

    const addToCart = async (itemId, weights) => {
        // console.log("Frontend weights:", weights);
        if (!weights) {
            toast.error('Select Product Weight');
            return;
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][weights]) {
                cartData[itemId][weights] += 1;
            } else {
                cartData[itemId][weights] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][weights] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/add`, { itemId, weights }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.response?.data?.message || error.message)
            }
        }
    }
    // const delivery_charge = () => {
    //     const cartAmount = getCartAmount();

    //     return cartAmount >= 500 ? 0 : 25;
    // };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;

    }

    const updateQuantity = async (itemId, weights, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][weights] = quantity;
        setCartItems(cartData);
        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/update`, { itemId, weights, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.response?.data?.message || error.message)

            }
        }

    }
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`)
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message)

        }
    }

    useEffect(() => {
        getProductsData()


    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])



    const value = {
        products,
        currency,
        delivery_charge,
        search, setSearch, showSearch, setShowSearch, cartItems, setCartItems, addToCart, getCartCount,
        updateQuantity, getCartAmount, navigate, backendUrl, setToken, token

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;