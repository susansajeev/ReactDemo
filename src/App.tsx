import React, { useState } from "react";
import logo from "./logo.svg";
//import './App.css';
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import SaveButton from "./components/SaveButton";

function App() {
  const [titleSub, setTitle] = useState("Save");
  const [isButtonClick, setButtonClik] = useState(-1);
  const [alertContent, setAlertContent] = useState("");
  let countries = [
    "Canada",
    "Germany",
    "India",
    "Australia",
    "Brazil",
    "Japan",
    "South Africa",
  ];
  const handleSelectItem = (country: string) => {
    console.log("Clicked item in App", country);
    setTitle(country);
  };

  const onSaveButtonClikc = (country: string) => {
    setAlertContent(country + " is clicked");
    setButtonClik(1);
  };

  const onCloseClcik = () => {
    setButtonClik(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Message></Message>
      </header>
      {isButtonClick === 1 && (
        <Alert onCloseClick={() => onCloseClcik()}>{alertContent}</Alert>
      )}

      <ListGroup
        countries={countries}
        heading="Country List"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <br></br>
      <SaveButton
        title={titleSub}
        onButtonClick={onSaveButtonClikc}
      ></SaveButton>
    </div>
  );
}

export default App;
