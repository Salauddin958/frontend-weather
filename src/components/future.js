import React, { useState, useEffect } from "react";

import weatherService from "../services/weather.service";

const Future = ({location}) => {
  const [content, setContent] = useState("");
//   const location = {location}.location;
  console.log("future location : "+location);
  useEffect(() => {
    weatherService.getFutureWeatherInfo({location}).then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, [location]);

  return (
    <div className="container">
      <header className="jumbotron">
        <h4>{content}</h4>
      </header>
    </div>
  );
};

export default Future;