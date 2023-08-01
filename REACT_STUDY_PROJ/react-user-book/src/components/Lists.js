import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Lists() {
  const [users, setUsers] = useState([]);

  const request = async () => {
    const response = await axios.get("https://koreanjson.com/users");
    console.log(response);
    setUsers(response.data);
    console.log(users);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className='list'>
      <table>
        <th>id</th>
        <th>이름</th>
        <th>아이디</th>
        <th>이메일</th>
        <th>핸드폰 번호</th>
        <th>사이트</th>
        <th>주소</th>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.province} {user.city} {user.district} {user.street} ({user.zipcode})</td>
          </tr>
        ))}
      </table>
    </div>
  );
}