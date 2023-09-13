import React from 'react'

const Navb = ({ filterItem, foodList }) => {
  return (
    <>
         <nav className="navbar">
        <div className="btn-group">
          {foodList.map((curElem) => {
            return (
              <button
                className="all_navBtn"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navb
