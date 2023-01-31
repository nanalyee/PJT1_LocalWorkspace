import React, { Component } from "react";
import ChatComponent from "./chat/ChatComponent";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Sidebar">
        <ChatComponent
          user={this.props.user}
          chatDisplay={this.props.chatDisplay}
          close={this.props.close}
          messageReceived={this.props.messageReceived}
        />
      </div>
    );
  }
}
