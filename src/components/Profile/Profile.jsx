import PropTypes from 'prop-types';
import {ProfileBox,DescriptionBox,Avatar,UserName,ExtentionPropUser,StatsBox,Quantity,Label} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return <ProfileBox>
  <DescriptionBox>
    <Avatar
      src={avatar}
      alt={username}      
    />
    <UserName>{username}</UserName>
    <ExtentionPropUser>@{tag}</ExtentionPropUser>
    <ExtentionPropUser>{location}</ExtentionPropUser>
  </DescriptionBox>

  <StatsBox>
    <li>
      <Label >Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </li>
    <li>
      <Label >Views</Label>
      <Quantity>{stats.views}</Quantity>
    </li>
    <li>
      <Label >Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </li>
  </StatsBox>
</ProfileBox>
}

Profile.propTypes={
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes:PropTypes.number.isRequired,
    }),  
}