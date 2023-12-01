import {
  Description,
  Name,
  Quantity,
  Stats,
  StatsItem,
  UserAvatar,
  Wrapper,
} from './Profile.styled';

export const Profile = ({ avatar, location, stats, tag, username }) => {
  return (
    <Wrapper className="profile">
      <Description className="description">
        <UserAvatar
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="200"
        />
        <Name class="name">{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};
