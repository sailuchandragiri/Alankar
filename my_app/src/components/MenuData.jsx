import { NavLink } from "react-router-dom";

export const MenuData = ({ categoryData }) => {
  return (
    <>
      {categoryData.length > 0 ? (
        <div>
          {categoryData.map((e) => {
            return (
              <div key={e._id} className="w-full overflow-x-hidden overflow-y-scroll">
                <div className=" ">
                  <NavLink to={`/breakfast/${e._id}`}>
                    <img
                      className="w-96 rounded-3xl h-40 object-cover mx-auto mt-5"
                      src={e.image}
                      alt="MenuData"
                    />
                    <div className="w-96 mx-auto mt-2 flex  text-lg font-semibold text-gray-600 mb-16">
                      <img className="w-5 h-5 mt-1" src="https://www.indiafilings.com/learn/wp-content/uploads/2016/01/Veg-Symbol.jpg"/>
                      <p className="ml-2 w-56 text-left h-16 ">{e.name}</p>
                      <div className=" w-26 h-16 ml-16">Rs. {e.price}</div>
                    </div>
                    
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <img className="h-66 w-100%" src="https://darling-nammavedu.scube.me/assets/icon/no-item.svg"></img>
        </div>
      )}
    
    </>
  );
};