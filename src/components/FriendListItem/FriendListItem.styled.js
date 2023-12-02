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

export const StatusFriend = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;