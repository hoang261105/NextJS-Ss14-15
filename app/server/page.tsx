import React from "react";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export default async function B1() {
  const posts = await getData();
  return (
    <div>
      <b>List of post</b>
      {posts.map((post: any) => (
        <div key={post.id}>{post.body}</div>
      ))}
    </div>
  );
}
