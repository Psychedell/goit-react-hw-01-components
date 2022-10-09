import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem'
import { FriendListUl } from './Friends.styled'


export const FriendList = ({ friends }) => {
  return <FriendListUl className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) =>
        <FriendListItem key={id} avatar={avatar}
          name={name}
          isOnline={isOnline} />)}
    </FriendListUl>
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};