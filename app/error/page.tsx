"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function B4() {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getError() {
      try {
        const response = await axios.get(
          "https://example.com/invalid-endpoint"
        );
        const data = response.data;
        // Xử lý data ở đây nếu cần
      } catch (error: any) {
        if (error.response) {
          // Server đã phản hồi với một trạng thái khác 2xx
          if (error.response.status === 404) {
            setErrorMessage("Error 404: Page not found.");
          } else if (error.response.status === 500) {
            setErrorMessage("Error 500: Internal Server Error.");
          } else {
            setErrorMessage(
              `Error ${error.response.status}: ${error.response.statusText}`
            );
          }
        } else if (error.request) {
          // Yêu cầu đã được gửi nhưng không có phản hồi
          setErrorMessage("No response received from server.");
        } else {
          // Một lỗi khác đã xảy ra trong quá trình thiết lập yêu cầu
          setErrorMessage("An unexpected error occurred.");
        }
      }
    }

    getError();
  }, []);

  return (
    <div>
      {errorMessage ? <p>{errorMessage}</p> : <p>No errors encountered.</p>}
    </div>
  );
}
