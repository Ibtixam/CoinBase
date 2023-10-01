import React, { useState } from "react";
import { TriangleSvg, OnlineSvg, AttachSvg } from "../../assets/svgs";
import Agent from "../../assets/images/Agent.png";
import { data } from "./Data";
import {
  ChatBox,
  ChatDetails,
  ChatWrapper,
  Chats,
  HeadingText,
  HeadingWrapper,
  InputWrapper,
  Message,
  MessageTime,
  MessageWrapper,
  PictureDetails,
  ProfilePicture,
  ProfilePictureWrapper,
  SendButton,
  Title,
  UnreadLine,
  UnreadMsgWrapper,
  UnreadText,
  Wrapper,
} from "./styles";

export default function Trade() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const selectedUser = data.find((user) => user.id === selectedUserId);

  return (
    <div>
      <div>
        <HeadingWrapper>
          <HeadingText>Agent Management   Trade</HeadingText>
          <HeadingText>
            Accounts  |  AGENT ROSE
            <TriangleSvg style={{ margin: "0px 7px" }} />
          </HeadingText>
        </HeadingWrapper>
      </div>
      <Title>Trade</Title>
      <Wrapper>
        <ChatBox>
          <div className="chats">
            <ChatDetails>
              <ProfilePictureWrapper>
                <ProfilePicture src={Agent} alt="Img" />
                <OnlineSvg
                  style={{ position: "absolute", top: "28px", left: "30px" }}
                />
              </ProfilePictureWrapper>
              <PictureDetails>
                <p className="c-name">Agent Rose</p>
                <p className="online-offline">Online</p>
              </PictureDetails>
            </ChatDetails>
          </div>
          {data.map((item, index) => {
            const { id, picture, onlineicon, name, status } = item;
            return (
              <ChatWrapper
                selected={selectedUserId === id}
                key={index}
                onClick={() => setSelectedUserId(id)}
              >
                <Chats>
                  <ProfilePictureWrapper>
                    <ProfilePicture src={picture} alt="Img" />
                    <img
                      src={onlineicon}
                      alt="Online Icon"
                      style={{
                        position: "absolute",
                        top: "30px",
                        left: "30px",
                      }}
                    />
                  </ProfilePictureWrapper>
                  <PictureDetails>
                    <p className="c-name">{name}</p>
                    <p className="online-offline">{status}</p>
                  </PictureDetails>
                </Chats>
              </ChatWrapper>
            );
          })}
        </ChatBox>
        {selectedUser && (
          <MessageWrapper>
            <MessageTime>Me, 10:22</MessageTime>
            <Message>{selectedUser.sender}</Message>
            <MessageTime
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              {selectedUser.name}, 10:24
            </MessageTime>
            <Message
              style={{
                marginLeft: "339px",
                width: "max-content",
                height: "48px",
                borderRadius: "10px",
                background: "#f6f6f6",
              }}
            >
              {selectedUser.reply}
            </Message>
            <MessageTime>Me, 3 minutes ago</MessageTime>
            <Message style={{ width: "max-content", height: "48px" }}>
              {selectedUser.sender2}
            </Message>
            <UnreadMsgWrapper>
              <UnreadText>Unread</UnreadText>
              <UnreadLine className="unread-line"></UnreadLine>
            </UnreadMsgWrapper>
            <MessageTime>{selectedUser.name}, 9 minutes ago</MessageTime>
            <Message>{selectedUser.reply2}</Message>
            <MessageTime
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              Agent Rue, 9 minutes ago
            </MessageTime>
            <Message
              style={{
                marginLeft: "339px",
                width: "max-content",
                height: "48px",
                borderRadius: "10px",
                background: "#f6f6f6",
              }}
            >
              {selectedUser.sender3}
            </Message>
            <MessageTime>{selectedUser.name}, 9 minutes ago</MessageTime>
            <Message>{selectedUser.reply3}.</Message>
            <InputWrapper>
              <input type="text" name="text" placeholder="Start typing here" />
              <AttachSvg
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "110px",
                  cursor: "pointer",
                }}
              />
              <SendButton>Send</SendButton>
            </InputWrapper>
          </MessageWrapper>
        )}
      </Wrapper>
    </div>
  );
}
