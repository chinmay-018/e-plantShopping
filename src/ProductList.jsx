import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, purifying indoor air efficiently.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/05/16/00/spider-plant-3518582_1280.jpg",
          description: "Filters toxins like formaldehyde and carbon monoxide.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and toxins while producing white blooms.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/55/boston-fern-5114414_1280.jpg",
          description: "Acts as a natural humidifier and removes air pollutants.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Broad dark leaves that trap airborne dust particles.",
          cost: "$22"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies air and offers natural soothing gel for minor burns.",
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
          description: "Calming floral fragrance known to help reduce stress.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729961255-cc3a44631b3b?auto=format&fit=crop&w=600&q=80",
          description: "Sweet fragrance with blossoms opening during late evenings.",
          cost: "$16"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating herb aroma frequently used in culinary arts.",
          cost: "$14"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/31/mint-1126282_1280.jpg",
          description: "Refreshing, crisp scent that repels pests naturally.",
          cost: "$11"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2017/07/07/16/01/lemon-balm-2481829_1280.jpg",
          description: "Pleasant citrus scent that relieves anxiety and uplifts mood.",
          cost: "$13"
        },
        {
          name: "Eucalyptus",
          image: "https://cdn.pixabay.com/photo/2017/08/07/22/33/eucalyptus-2608620_1280.jpg",
          description: "Distinct menthol scent that aids easy, clear breathing.",
          cost: "$19"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants:
