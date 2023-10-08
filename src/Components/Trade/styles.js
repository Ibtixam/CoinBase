import styled, { css } from "styled-components";

export const HeadingWrapper = styled.div`
  max-width: 100%;
  height: 33px;
  display: flex;
  justify-content: space-between;
`;

export const HeadingText = styled.pre`
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 700;
`;

export const Title = styled.h4`
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  width: 1023px;
  height: 750px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
  margin-top: 24px;
  display: flex;
  overflow: hidden;
`;

export const ChatBox = styled.div`
  width: 28%;
  height: 100%;
  border-right: 2px solid #f0f0f0;
  .chats {
    transition: ease-in 5ms;
    cursor: pointer;
  }
`;

export const ChatDetails = styled.div`
  display: flex;
  padding-left: 35px;
  padding-bottom: 16px;
  padding-top: 22px;
  border-bottom: 2px solid #f0f0f0;
`;

export const ProfilePictureWrapper = styled.div`
  position: relative;
  margin-right: 12px;
  .profile-img {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    object-fit: cover;
  }
  .online {
    position: absolute;
    top: 28px;
    left: 30px;
  }
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  object-fit: cover;
`;

export const PictureDetails = styled.div`
  margin-top: 4px;
  .c-name {
    color: var(--secondary-color);
    font-size: 12px;
    font-weight: 700;
  }
  .online-offline {
    color: var(--secondary-color);
    font-size: 10px;
    font-weight: 400;
  }
`;

export const ChatWrapper = styled.div`
  ${({ selected }) =>
    selected &&
    css`
      background: var(--bgGradient);
      .c-name,
      .online-offline {
        color: white;
      }
    `}
`;

export const Chats = styled.div`
  display: flex;
  padding-left: 35px;
  padding-bottom: 5px;
  padding-top: 22px;
  cursor: pointer;
`;

export const MessageWrapper = styled.div`
  width: 73%;
  padding: 30px 38px;
`;

export const MessageTime = styled.p`
  color: var(--secondary-color);
  font-size: 10px;
  font-weight: 400;
  line-height: 17px;
  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export const Message = styled.div`
  width: max-content;
  height: 48px;
  border-radius: 10px;
  background: #f6f6f6;
  color: #858585;
  font-size: 12px;
  font-weight: 400;
  padding: 15px 18px;
  margin-top: 11px;
`;

export const UnreadMsgWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 20px;
`;

export const UnreadText = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.375px;
  text-transform: uppercase;
  background: var(--bgGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const UnreadLine = styled.div`
  width: 624px;
  height: 2px;
  background: var(--bgGradient);
  margin-top: 9px;
  width: 90%;
  height: 2.4px;
  border-radius: 10px;
  margin-left: 12px;
`;

export const InputWrapper = styled.div`
  width: 686px;
  height: 48px;
  border-radius: 100px;
  border: 2px solid #f0f0f0;
  background: transparent;
  margin-top: 35px;
  position: relative;
  input {
    width: 73%;
    color: var(--secondary-color);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.438px;
    padding-top: 15px;
    margin-left: 30px;
    background: transparent;
    border: 0;
    outline: 0;
  }
`;

export const SendButton = styled.button`
  width: 73px;
  height: 30px;
  border-radius: 100px;
  background: var(--bgGradient);
  border: 0;
  outline: 0;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.375px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-left: 70px;
  cursor: pointer;
`;
