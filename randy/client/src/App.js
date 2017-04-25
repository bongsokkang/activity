import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import character from "./pages/character";
import yourcharacters from "./pages/yourcharacters";
import login from "./components/login";
import game from "./pages/game";
import FriendCard from "./components/FriendCard";


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () =>
<Router>
  <div>
    <Nav />
    <Books />
  </div>;
  <Switch> 
  <Route exact path="/" component={books} />
  
  <Route path="/books:id" component ={login}/>
  <Route path="/FriendCard" component ={FriendCard}/>
  <Route path="/books" component ={character}/>
  <Route path="/books:id" component ={yourcharacters}/>
  <Route path="/books:id" component ={game}/>
  <Route component={NoMatch} />
  </Switch> 
</Router>

export default App;