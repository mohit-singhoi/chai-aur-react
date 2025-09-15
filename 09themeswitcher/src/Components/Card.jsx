import React from "react";

export default function Card() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-5 transition-colors duration-300">
      <a href="/">
        <img
          className="rounded-t-lg mb-4"
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/7/c/83em009yin-thin-and-light-laptop-lenovo-original-imah27tzzzs9bqhx.jpeg?q=70"
          alt="product_image1"
        />
      </a>
      <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      Lenovo IdeaPad Slim 3 Intel Intel Core i7 13th Gen Core™ i7-13620H, 10C (6P + 4E) / 16T, P-core 2.4 / 4.9GHz, E-core 1.8 / 3.6GHz - (16 GB/512 GB SSD/Windows 11 Home) 15IRH8 Thin and Light Laptop  (15.6 Inch, Arctic Grey, 1.7 Kg, With MS Office)
      </h5>
      <div className="flex items-center mb-5">
        <span className="text-yellow-400 font-bold">★ ★ ★ ★ ☆</span>
        <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          4.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          65,080
        </span>
        <a
          href="/"
          className="px-5 py-2.5 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}
