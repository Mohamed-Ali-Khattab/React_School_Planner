import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";


function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
   
 <div className="App">
      <div className="outer">
        <div className="inner">
       
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Créer Compte</h3>

              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="saisir vote nom"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="saisir votre email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="saisir votre password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Numero</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="saisir votre numero"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Choisir votre section</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Informatique</option>
                  <option>Science </option>
                  <option>Mathématique</option>
                  <option>Lettre</option>
                </Form.Control>
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Créer Compte
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Déja inscrit?{" "}se connecter?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  veuillez remplir toutes les champs
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
        </div>
        </div>
    
   
  );
}

export default Registration;
