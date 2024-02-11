import React from "react";
import {clothingData} from "../assets/products/Product";

function ProductCard({
  title = "Plain T-Shirt",
  category = "Topwear",
  subCatagory = "T-Shirt",
  currency = "₹",
  price = "399",
  color = "Red",
  size = [],
  image="https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images_2_5_2022/dream_blue_plain_t-shirt_neck_and_sleeve_29_07_2023_700x933.jpg"
}) {
  return (
    <div className="rounded-lg w-72 shadow-md hover:shadow-xl border-2 border-gray-300">
        <img src={image} alt="" className=""/>
        <div className="p-2">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-gray-700 text-sm">{category} | {subCatagory}</span>
        <p className="font-semibold">{currency}{price} {size.map((s) => <span className="p-1" key={s}>{s}</span>)}</p>
        </div>
    </div>
  );
}

export default ProductCard;
