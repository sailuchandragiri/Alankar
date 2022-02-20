import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";




const ItemDetails = () => {
    const {id} = useParams();
    

    const [food, setFood] = useState([]);


    useEffect(()=>{
        getFood();
    },[]);

    const getFood = async (el) => {

        const data = await axios.get(
            `https://demo-api.nasj.io/menus/${el}`,
            {
                headers: {
                    "x-auth-token": `${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        try {
            console.log(data.data.data.items);
            setFood(data.data.data.items);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div>

    </div>
  )
}

export default ItemDetails;

