import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export const FriendList = ({ friends}) => {
    return <List >
        {friends.map(({id, avatar,name,isOnline}) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
       ))}
</List>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            avatar:PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
}