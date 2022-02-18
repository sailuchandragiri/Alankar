import { useState, useEffect } from "react";
import axios from "axios";

import { MenuData } from "./MenuData";

export const MenuItems = () => {
  const [token, setToken] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

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

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getCategory();
  }, [token]);

  const getToken = async () => {
    try {
      const { data } = await axios.post(
        "https://demo-api.nasj.io/token/O72Ebw1ro3"
      );
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    const { data } = await axios.get("https://demo-api.nasj.io/categories", {
      headers: {
        "x-auth-token": `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    try {
      console.log(data.data);
      setMenuData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="h-40 mt-20 overflow-x-scroll overflow-y-hidden m-auto flex flex-row  max-w-md">
        {menuData &&
          menuData.map((e) => {
            return (
              <div
                className=" h-20  flex-shrink-0 p-2 mx-4 my-2 w-20  flex flex-col place-items-center text-center "
                onClick={() => {
                  handleClick(e.id);
                }}
                key={e.id}
              >
                <img
                  className="w-16  rounded-xl bg-gray-600 p-2 h-16 "
                  src={e.icon}
                  alt="MenuItem"
                />
                <p className="text-sm">{e.name}</p>
              </div>
            );
          })}
      </div>
      <MenuData categoryData={categoryData}></MenuData>
    </div>
  );
};