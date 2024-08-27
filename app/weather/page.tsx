import axios from "axios";
import React from "react";

async function getWeather() {
  const response = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
  );
  const data = response.data;
  return data;
}

export default async function B3() {
  const weathers = await getWeather();
  console.log(weathers);
  return (
    <div>
      <b>Thông tin thời tiết</b>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Nhiệt độ</th>
          </tr>
        </thead>
        <tbody>
          {weathers.hourly.temperature_2m.map((item: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
