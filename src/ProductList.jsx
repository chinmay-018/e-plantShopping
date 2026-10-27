import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/05/16/00/spider-plant-3518582_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/55/boston-fern-5114414_1280.jpg",
                    description: "Acts as a natural air humidifier and purifier.",
                    cost: "$14"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Broad leaves trap dust and airborne pollutants.",
                    cost: "$22"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies air and offers medicinal soothing gel.",
                    cost: "$10"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
                    description: "Calming aroma known to reduce stress and anxiety.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729961255-cc3a44631b3b?auto=format&fit=crop&w=600&q=80",
                    description: "Sweet fragrance, blooms during warm evenings.",
                    cost: "$16"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent frequently used in cooking.",
                    cost: "$14"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/31/mint-1126282_1280.jpg",
                    description: "Refreshing, crisp scent that naturally deters pests.",
                    cost: "$11"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2017/07/07/16/01/lemon-balm-2481829_1280.jpg",
                    description: "Citrus aroma that calms the senses and uplifts mood.",
                    cost: "$13"
                },
                {
                    name: "Eucalyptus",
                    image: "https://cdn.pixabay.com/photo/2017/08/07/22/33/eucalyptus-2608620_1280.jpg",
                    description: "Fresh menthol aroma that aids clear breathing.",
                    cost: "$19"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://cdn.pixabay.com/photo/2020/05/29/18/39/zz-plant-5236166_1280.jpg",
                    description: "Thrives in low light conditions with minimal water.",
                    cost: "$24"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2020/07/07/14/08/pothos-5380695_1280.jpg",
                    description: "Hardy trailing vine that tolerates low light easily.",
                    cost: "$12"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2019/04/17/17/48/foliage-4134914_1280.jpg",
                    description: "Highly durable foliage surviving wide temperature ranges.",
                    cost: "$26"
                },
                {
                    name: "Jade Plant",
                    image: "https://cdn.pixabay.com/photo/2019/02/14/09/26/succulent-3996238_1280.jpg",
                    description: "Long-lived succulent that needs very little water.",
                    cost: "$15"
                },
                {
                    name: "Chinese Evergreen",
                    image: "https://cdn.pixabay.com/photo/2021/01/29/08/10/foliage-5960098_1280.jpg",
                    description: "Patterned leaves that withstand low lighting and dry air.",
                    cost: "$21"
                },
                {
                    name: "Succulent Assortment",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/06/cactus-1846152_1280.jpg",
                    description: "Durable desert varieties needing negligible watering.",
                    cost: "$17"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className="cart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                                <span className="cart_quantity_count">{totalQuantity}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <div className="plant_heading">
                                <h1>{category.category}</h1>
                            </div>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <div className="product-title">{plant.name}</div>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-price">{plant.cost}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <button
                                            className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
