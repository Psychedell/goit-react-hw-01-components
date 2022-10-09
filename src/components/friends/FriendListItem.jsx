import PropTypes from 'prop-types'
import { Item, Status, Name } from './Friends.styled'


export const FriendListItem = ({avatar, name, isOnline}) => {
    return  <Item className="item">
        <Status active={isOnline === true} className="status">{isOnline}</Status>
  <img className="avatar" src={avatar} alt={name} width="48" />
        <Name className="name">{name}</Name>
</Item>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}