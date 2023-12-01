import {
  FriendsItem,
  StatusFriendOffline,
  StatusFriendOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      {isOnline ? (
        <StatusFriendOnline></StatusFriendOnline>
      ) : (
        <StatusFriendOffline></StatusFriendOffline>
      )}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};
