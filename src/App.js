import React, { useEffect } from "react";
import apiService from "./app/apiService";
import { BASE_URL } from "./app/config";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. get data
        const response = await axios.get("https://reqres.in/api/users");

        // 2. send data to server
        // const response = await axios.post("https://reqres.in/api/users", {
        //   email: "eve.holt@reqres.in",
        //   password: "pistol",
        // });

        // 3. get data using
        // const response = await apiService.post("/api/register", {
        //   email: "eve.holt@reqres.in",
        //   password: "pistol",
        // });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    console.log(BASE_URL);
  }, []);

  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
}

export default App;
