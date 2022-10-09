import PropTypes from 'prop-types'
import { Wrapper, Stats, ProfileList, Label, Quantity, Name, Tag, Location } from './Profile.styled';

export const Profile = ({name, tag, location, avatar, stats}) => {
  return <Wrapper>
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={name}
      className="avatar"
    />
    <Name className="name">{name}</Name>
    <Tag className="tag">@{tag}</Tag>
    <Location className="location">{location}</Location>
      </div>
       <Stats className="stats">
    <ProfileList>
      <Label className="label">Followers</Label>
      <Quantity className="quantity">{stats.followers}</Quantity>
    </ProfileList>
    <ProfileList>
      <Label className="label">Views</Label>
      <Quantity className="quantity">{stats.views}</Quantity>
    </ProfileList>
    <ProfileList>
      <Label className="label">Likes</Label>
      <Quantity className="quantity">{stats.likes}</Quantity>
    </ProfileList>
  </Stats>
    </div>
    </Wrapper>
}

Profile.propTypes = {
  stats: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};



