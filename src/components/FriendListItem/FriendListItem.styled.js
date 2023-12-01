import styled from 'styled-components';

export const FriendsItem = styled.li`
  width: 150px;
  display: flex;
  background-color: white;
  align-items: center;
  padding: 15px;
  gap: 10px;
  box-shadow: 2px 3px 3px #a4a6a8, -2px 3px 3px #a4a6a8;
`;

export const StatusFriendOnline = styled.span`
  width: 15px;
  height: 15px;
  background-color: green;
  border-radius: 50%;
`;

export const StatusFriendOffline = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
`;
