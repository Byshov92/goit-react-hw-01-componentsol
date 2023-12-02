import { FriendsItem, StatusFriend } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <StatusFriend isOnline={isOnline}>{isOnline}</StatusFriend>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};
