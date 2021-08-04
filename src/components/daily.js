import React, { useState, useEffect } from "react";

import weatherService from "../services/weather.service";

const Daily = ({location}) => {
  const [content, setContent] = useState("");
  console.log("daily location : "+location);
  useEffect(() => {
    weatherService.getDailyWeatherInfo({location}).then(
      (response) => {
        // debugger;
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
    <div className="container" > 
      <header className="jumbotron">
        <h4>{content}</h4>
      </header>
    </div>
  );
};

export default Daily;