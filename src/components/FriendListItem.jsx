import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';  

// Definim stilurile pentru fiecare prieten
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 4px 6px rgba(4, 4, 4, 0.2);
  width: 220px;
  height: 60px;
  gap: 10px;
  background-color: white;
`;

const Status = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOnline',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-left: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
width: 40px;
height: 40px;
`;

const Name = styled.p`
 font-size: 18px;
 
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
