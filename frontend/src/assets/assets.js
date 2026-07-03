import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'

import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'



import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import sweet_corn from './sweet_corn.png';
import green_peas from './green_peas.png';
import soya_chaap from './soya_chaap.png';
import french_fries from './french_fries.png';
import insta_icon from './insta_icon.png';
import x_icon from './x_icon.png';
import facebook_icon from './facebook_icon.png';
import linkedin_icon from './linkedin_icon.png';
import fssai from './fssai.png'


export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    sweet_corn,
    green_peas,
    soya_chaap,
    french_fries,
    insta_icon,
    facebook_icon,
    x_icon,
    linkedin_icon, fssai

}

export const products = [
    {
        _id: "aaaaa",
        name: "Frozen Green Peas",
        description: "Sweet, tender peas harvested at peak season and flash-frozen to lock in natural sweetness.",
        price: 100,
        image: [p_img1],
        category: "Vegetables",
        subCategory: "Topwear",
        weights: ["500g", "1kg", "5kg"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Frozen Sweet Corn",
        description: "Golden kernels bursting with sweetness. Perfect for salads, soups, and stir-fries.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Vegetables",
        subCategory: "Topwear",
        weights: ["500g", "1kg", "5kg"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Frozen Soya Chaap",
        description: "Meaty soya chaap with firm texture — the perfect protein-packed meat alternative.",
        price: 220,
        image: [p_img3],
        category: "Ready to Serve",
        subCategory: "Topwear",
        weights: ["500g", "1kg", "5kg"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Frozen French Fries",
        description: "Crispy, golden shoestring fries — restaurant-quality right from your kitchen fryer.",
        price: 110,
        image: [p_img4],
        category: "Ready to Serve",
        subCategory: "Topwear",
        weights: ["500g", "1kg", "5kg"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Frozen Mixed Vegetables",
        description: "A blend of fresh, seasonal vegetables, flash-frozen to preserve their natural flavors and nutrients.",
        price: 130,
        image: [p_img5],
        category: "Vegetables",
        subCategory: "Topwear",
        weights: ["500g", "1kg", "5kg"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "Frozen Carrots",
        description: "Crunchy, vibrant orange carrots. Pre-washed and pre-cut for effortless cooking.",
        price: 140,
        image: [p_img6],
        category: "Vegetables",
        subCategory: "Topwear",
        weights: ["500g", "1kg", "5kg"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Frozen Cauliflower",
        description: "Crispy, white florets with a mild, sweet flavor. Perfect for roasting, steaming, or adding to stir-fries.",
        price: 190,
        image: [p_img7],
        category: "Fruits",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img8],
        category: "Fruits",
        subCategory: "Fruits",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img46],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img47],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        bestseller: false
    }

]