import React from "react";

const DishCard = ({ foodData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-cointainer">
        {foodData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <img src={image} alt="images" className="card-media" />
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtitle ">
                      {description}
                    </span>
  
                  </div>
                 <span className="order_btn subtitle ">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default DishCard;