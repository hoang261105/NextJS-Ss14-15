"use client";
import React, { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface Works {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getWork() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

async function getPromise() {
  const [listUsers, listWorks] = await Promise.all([getUser(), getWork()]);
  return { listUsers, listWorks };
}

export default async function B8() {
  const { listUsers, listWorks } = await getPromise();
  return (
    <div>
      <b>Danh sách người dùng</b>
      {listUsers.map((user: Users, index: number) => (
        <div key={user.id}>
          <p>STT: {index + 1}</p>
          <p>Tên: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Điện thoại: {user.phone}</p>
          <b>Danh sách công việc</b>
          {listWorks
            .filter((filterWork: Works) => filterWork.userId === user.id)
            .map((work: Works, num: number) => (
              <div key={work.id}>
                <p>
                  Công việc thứ {num + 1}: {work.title}
                </p>
              </div>
            ))}
          <p>_____________________________________</p>
        </div>
      ))}
    </div>
  );
}
