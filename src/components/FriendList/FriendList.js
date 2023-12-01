import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from 'components/FriendList/FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </FriendsList>
  );
};
