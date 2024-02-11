import React from "react";

function Topnavbar() {
  return (
    <>
      <div className="container-lg flex justify-between align-items-center pr-5 pl-5 px-2 py-2 content-center bg-black text-white
      ">
        <div className="left flex gap-5 content-center text-xs font-semibold">
          <span>Offers</span>
          <span>facebook</span>
          <span>X (Twitter)</span>
        </div>
        <div className="right flex gap-5 content-center text-xs font-semibold">
            <span>Contact Us</span>
            <span>Track Order</span>
        </div>
      </div>
    </>
  );
}

export default Topnavbar;
