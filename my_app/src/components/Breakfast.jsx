import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MenuData } from "./MenuData";
import {Link} from "react-router-dom";


const Breakfast = () => {

    const [token, setToken] = useState("");
    const [data, setData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);


    useEffect(() => {
        getToken();
    }, [])

    useEffect(() => {
        getCategory();
    }, [token])




    const handleClick = async (el) => {

        const data = await axios.get(
            `https://demo-api.nasj.io/menus?category_id=${el}`,
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
            setCategoryData(data.data.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    const getToken = async () => {
        axios.post("https://demo-api.nasj.io/token/O72Ebw1ro3")
            .then(res => {
                setToken(res.data.token);
            })
            .catch(err => {
                console.log("error:")
            })

    }

    const getCategory = async () => {
        axios.get('https://demo-api.nasj.io/categories', {
            headers: {
                'x-auth-token': `${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="box-content  h-48 w-100% p-4  ... bg-red-900 rounded-b-3xl">
                <div className=" mt-12 mb-8 flex ...">

                    <Link to="/">
                        <div className="h-10 w-10 p-3 bg-cover bg-center rounded bg-gray-800 flex-none ...">
                            <img src="https://alankar.scube.me/assets/icon/back.png" w-20 h-20></img>
                        </div>
                    </Link>

                    <div className=" ml-40 text-sm  text-right pt-3 text-gray-300 bg-red-900 flex-1 ...">BREAKFAST</div>
                </div>
                <div className="box-content h-4 mt-4 w-80%  pb-5  rounded-lg border-solid border flex border-gray-300 ... ">
                    <div className="w-10 h-4 p-2 mb-2">
                        <img src="https://vectorified.com/images/white-search-icon-transparent-background-33.png" w="100%" h="100%"></img>
                    </div>
                    <div className="p-1 pt-2" >
                        <input
                            className="placeholder:normal placeholder:text-left placeholder:text-gray-300 bg-red-900 w-full border-slate-900 rounded-md text-m   shadow-sm   focus:outline-none  sm:text-lg"
                            placeholder="Search for the food item."
                            type="text"
                            name="sear"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="h-40  overflow-x-scroll overflow-y-hidden m-auto flex flex-row  max-w-md">
                    {data &&
                        data.map((e) => {
                            return (
                                <div
                                    className=" h-20  flex-shrink-0 p-2 mx-4 my-2 w-20  flex flex-col place-items-center text-center "
                                    onClick={() => {
                                        handleClick(e.id);
                                    }}
                                    key={e.id}
                                >
                                    <img
                                        className="w-16  rounded-xl bg-gray-400 p-2 h-16 hover:bg-red-900 hover:border-r-4 hover:border-b-4 hover:border-gray-700"
                                        src={e.icon}
                                        alt="MenuItem"
                                    />
                                    <p className="text-sm">{e.name}</p>
                                </div>
                            );
                        })}
                </div>
                {/* <MenuData categoryData={categoryData}></MenuData> */}
            </div>
            <hr className="ml-4 w-96" />
            <div className="text-lg ml-6 text-bold decoration-8 mt-2 text-left text-gray-900">Our Simply south Variations</div>
            <hr className="ml-4 w-96 mt-2 mb-2" />
            {/* {data[0]._id} 
             */}

            <MenuData categoryData={categoryData}></MenuData>
        </div>
    );
}

export default Breakfast;