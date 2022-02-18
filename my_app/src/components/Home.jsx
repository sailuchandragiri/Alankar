import React from "react";
import { Redirect, Route, Link } from "react-router-dom";
import Breakfast from "./Breakfast";

const Home = () => {

    

    return (
        <div>
            <div className="box-content  h-66 w-100% p-4 pb-8  ... bg-red-900 rounded-b-3xl">
                <p className="text-gray-200 text-sm font-sans,gilmar leading-loose pt-7 text-left   font-medium">Welcome to</p>
                <p className="text-left font-bold not-italic font-sans  text-2xl  text-gray-50">Alankar</p>
                <div className="box-content h-4 mt-4 w-80%  pb-5 rounded-lg border-solid border flex border-gray-200 ... ">
                    <div className="w-10 h-4 p-2 mb-2">
                        <img src="https://vectorified.com/images/white-search-icon-transparent-background-33.png" w="100%" h="100%"></img>
                    </div>
                    <div className="p-1 pt-2 " >
                        <input
                            className="placeholder:normal placeholder:text-left placeholder:text-gray-200 bg-red-900 w-full border-slate-900 rounded-md text-m   shadow-sm   focus:outline-none  sm:text-lg"
                            placeholder="Search for the food item."
                            type="text"
                            name="sear"
                        />
                    </div>
                </div>
            </div>
            <div className="box-content h-16 w-100% pt-4 pl-3 text-left">
                <p className="text-2sm font-bold">Select your order type</p>
                <p className="text-xs text-gray-500 mt-1">Please select your order type and proceed to order</p>
            </div>
            <hr className="ml-4  mr-4" />

            <div className="box-content h-96 mt-3 w-100% overflow-y-scroll overflow-x-hidden pb-16 flex-col">

                <Link to="/breakfast">
                    <div className="h-40 w-96 ml-3  bg-cover bg-center rounded-3xl mt-6  mb-3 ..." style={{
                        backgroundImage: `url("https://tse3.mm.bing.net/th?id=OIP.qI-MWD8eRofBdP27b73HcwHaHa&pid=Api&P=0&w=190&h=190")`
                    }}
                    >
                        <div className="text-4xl font-bold text-white pt-14">Breakfast</div>
                    </div>
                </Link>
                <Link to="/lunch">
                    <div className="h-40 w-96 ml-3  bg-cover bg-center rounded-3xl mt-8  mb-3 ..." style={{
                        backgroundImage: `url("https://tse4.mm.bing.net/th?id=OIP.wZ2EAr_akOkKSjNbW2MR3gHaEK&pid=Api&P=0&w=311&h=175")`
                    }}

                    >
                        <div className="text-4xl font-bold text-white pt-14">Lunch</div>
                    </div>
                </Link>
                <Link to="/dinner">
                    <div className="h-40 w-96 ml-3  bg-cover bg-center rounded-3xl mt-8  mb-3 ..." style={{
                        backgroundImage: `url("https://tse4.mm.bing.net/th?id=OIP.2K4VtPA7ircEuUWLsDyLnwHaFj&pid=Api&P=0&w=232&h=174")`
                    }}>
                        <div className="text-4xl font-bold text-white pt-14">Dinner</div>
                    </div>

                </Link>


            </div>

        </div>
    );
}

export default Home