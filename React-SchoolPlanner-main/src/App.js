import './App.css';
import React from 'react';
import {withRouter} from 'react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Activity from './Components/ActivityDetailComponent';
import Layout from './Components/Layout'
import EditDictionary from './Components/EditDictionaryComponent';
import EditEntry from './Components/EditEntryComponent';
import TimeTable from './Components/TimeTableComponent'


import Emplois from "./Components/Emplois";
import Agenda from "./Components/Agenda";
import Enseignant from "./Components/pages/Enseignant";
import Salle from "./Components/pages/Salle";
import Classe from "./Components/pages/Classe";
import Admin from "./Components/Admin";
import Registration from './Components/Registeration';


function App(props) {
  console.log(props.location)
  return (
    <BrowserRouter>
   
        <Switch>
          {props.children}
          <Route exact path='/' component={Registration} />
          <Route path='/admin' component={Admin} />
          <Route path='/emploi' component={withRouter(TimeTable)} />
          <Route path='/classe' component={Classe} />
          <Route path='/salle' component={Salle} />
          <Route path='/prof' component={Enseignant} />
          <Route path='/activityDetail' component={withRouter(Activity)} />
          <Route path='/editDictionary' component={EditDictionary} />
          <Route path='/editEntry' component={EditEntry} />
        </Switch>
    
    </BrowserRouter>
  );
}

export default App
