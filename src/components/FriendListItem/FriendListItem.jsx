import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import {Item,Status, Avatar,UserName} from './FriendListItem.styled';
export const FriendListItem = ({avatar,name,isOnline}) => {
    return <Item >
        <Status isOnline = {isOnline}>
            <BsFillCircleFill size="24"/>
        </Status>
        <Avatar src={avatar} alt={name}  />
        <UserName >{name}</UserName>
    </Item>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,/* 
    id: PropTypes.number.isRequired, */
}