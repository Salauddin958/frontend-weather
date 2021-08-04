import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Weather from "./weather";
import styles from "./styles.component.css";

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const [location, setLocation] = useState("");
  const handleSelect = (event) => {
    // event.stopPropagation();
    // console.log("event :: "+ typeof event)
    setLocation(event)
  }
  return (
    <div className="container">
      <header className="jumbotron">
        {!isLoggedIn && 
          <div>
          <h1>Welcome to Weather Forecast</h1>
          <h1>Please SignUp/LogIn to check Weather Forecast</h1>
          </div>
        }
        {isLoggedIn && 
          <div className="App container" className="classCenter">
          <DropdownButton className={styles.bigblue}
          alignCenter
          title="Select Location"
          id="dropdown-menu-align-center"
          onSelect={(e) => handleSelect(e)}
            >
                  <Dropdown.Item eventKey="London">London</Dropdown.Item>
                  <Dropdown.Item eventKey="Hyderabad">Hyderabad</Dropdown.Item>
                  <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="Minsk">Minsk</Dropdown.Item>
          </DropdownButton>
          <br />
          {location && 
           <div>
             <Weather location={location} />
           </div>
          }
        </div>
           }
      </header>
    </div>
  );
};

export default Home;