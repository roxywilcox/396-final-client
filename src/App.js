import React from "react";
import "./App.css";
import Authorization from "./Authorization";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlaylistMaker from "./PlaylistMaker";
import ExistingPlaylist from "./ExistingPlaylist";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
          <div className="container">
          <Authorization/>
        </div>
          </Route>
          {/* <Route path="/playlistmaker">
            <PlaylistMaker />
          </Route> */}
          <Route path="/existingplaylist">
            <ExistingPlaylist />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
