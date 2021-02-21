import React from 'react';
import PropTypes from 'prop-types';
import defaultAva from "../../components/default.png";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li key={id} className="item">
        <span className="status">is online: {isOnline ? "true" : "false"}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
);

FriendListItem.defaultProps = {
    avatar: defaultAva,
}

FriendListItem.propTypes = {
    // id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;