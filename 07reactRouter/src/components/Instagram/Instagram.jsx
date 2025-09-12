import React from 'react'

import { useLoaderData } from "react-router-dom";

function Instagram() {
  const data = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.data.map((post) => (
        <div key={post.id} className="shadow-lg p-2 rounded-xl">
          <img src={post.media_url} alt={post.caption} className="rounded-lg" />
          <p>{post.caption}</p>
          <a href={post.permalink} target="_blank" rel="noreferrer">
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
}

export default Instagram;

export const instagramInfoLoader = async () => {
  const response = await fetch(
    "https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=YOUR_ACCESS_TOKEN"
  );
  return response.json();
};
