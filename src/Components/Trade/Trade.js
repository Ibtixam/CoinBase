import React, { useState } from "react";
import { TriangleSvg, OnlineSvg, AttachSvg } from "../../assets/svgs";
import "./Trade.css";
import Agent from "../../Images/Agent.png";
import { data } from "./Data";

export default function Trade() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const selectedUser = data.find((user) => user.id === selectedUserId);

  return (
    <div className="trade">
      <div className="o-heading">
        <pre className="o-text">Agent Management   Trade</pre>
        <pre className="o-text2">
          Accounts   |
          <pre className="o-text3">
            AGENT ROSE
            <TriangleSvg style={{ margin: "0px 7px" }} />
          </pre>
        </pre>
      </div>
      <h4 className="o-title">Trade</h4>
      <div className="chat-box">
        <div className="chat-div">
          <div className="chats">
            <div className="chat-details">
              <div className="picture">
                <img src={Agent} alt="Img" className="n-img" />
                <OnlineSvg className="online" />
              </div>
              <div className="details">
                <p className="c-name">Agent Rose</p>
                <p className="online-offline">Online</p>
              </div>
            </div>
          </div>
          {data.map((item, index) => (
            <div
              className={`chats ${
                selectedUserId === item.id ? "selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedUserId(item.id)}
            >
              <div className="chat-details2">
                <div className="picture">
                  <img src={item.picture} alt="Img" className="n-img" />
                  <img
                    src={item.onlineicon}
                    alt="Online Icon"
                    className="online"
                  />
                </div>
                <div className="details">
                  <p className="c-name">{item.name}</p>
                  <p className="online-offline">{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedUser && (
          <div className="messages">
                <p className="massage-time">Me, 10:22</p>
                <div className="msg">
                  {selectedUser.sender}
                </div>
                <p className="massage-time massage-time-reverse">
                {selectedUser.name}, 10:24
                </p>
                <div className="msg msg-reverse">
                  {selectedUser.reply}
                </div>
                <p className="massage-time">Me, 3 minutes ago</p>
                <div className="msg msg-width">
                  {selectedUser.sender2}
                </div>
                <div className="unread-msg">
                  <span className="unread-text">Unread</span>
                  <div className="unread-line"></div>
                </div>
                <p className="massage-time">{selectedUser.name}, 9 minutes ago</p>
                <div className="msg">
                  {selectedUser.reply2}
                </div>
                <p className="massage-time massage-time-reverse">
                  Agent Rue, 9 minutes ago
                </p>
                <div className="msg msg-reverse">
                {selectedUser.sender3} 
                </div>
                <p className="massage-time">{selectedUser.name}, 9 minutes ago</p>
                <div className="msg">
                  {selectedUser.reply3}.
                </div>
                <div className="inputDiv">
                  <input
                    type="text"
                    name="text"
                    id="Input"
                    placeholder="Start typing here"
                  />
                  <AttachSvg className="attach" />
                  <button className="send">Send</button>
                </div>
          </div>
        )}
      </div>
    </div>
  );
}
