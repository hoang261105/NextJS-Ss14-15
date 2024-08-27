"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function B6() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      console.log(data);
      const listUser = setUser(data);
      return listUser;
    };
    fetchData();
  }, []);
  return (
    <div>
      <b>Danh sách người dùng</b>
      {users.map((user: any) => (
        <div key={user.id}>
          <p>Tên: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Địa chỉ: {user.address.street}</p>
          <p>___________________________________</p>
        </div>
      ))}
    </div>
  );
}
