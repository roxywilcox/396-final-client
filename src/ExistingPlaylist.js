import React from "react";
import "./ExistingPlaylist.css";
import { Redirect } from "react-router";

class ExistingPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      email: null,
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest(ev) {
    this.setState({
      email: ev.target.value,
    });
  }

  render() {
    console.log("hi");
    let link = "http://spotify-backend-396.herokuapp.com/existingplaylist/" + this.state.email;
    console.log("link", link);

    return (
      <div classname="ep-container">
        <h1 id="instructions">instructions:</h1>
        <form>
          <label id="label">
            enter your spotify-associated email then a comma then a space then your friend's spotify-associated email. make sure your friend has also logged into their spotify through our app. (if this doesn't work, try switching the order of the emails!)
            
            <input onChange={this.sendRequest} type="text" name="name" />
          </label>
          {/* <input onClick={this.sendRequest} type="submit" value="Submit" /> */}
          <a href={link} value="Submit" id="submit">
            submit
          </a>
          <p id="end">after hitting submit, your playlist should be saved to your spotify account!</p>
        </form>
      </div>
    );
  }
}

export default ExistingPlaylist;
