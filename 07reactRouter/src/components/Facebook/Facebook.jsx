import React from 'react'

import { useLoaderData } from "react-router-dom";

function Facebook() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 p-4 bg-blue-500 text-white">
      <h1>Facebook Name: {data.name}</h1>
      <img src={data.picture.data.url} alt="Facebook Profile" width={200} />
    </div>
  );
}

export default Facebook;

// facebookLoader.js
export const facebookinfoLoader = async () => {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/me?fields=id,name,picture,friends&access_token=YOUR_ACCESS_TOKEN`
  );
  return response.json();
};
