import React from 'react';
import PropTypes from 'prop-types';
import defaultAva from "../../components/default.png";
import '../FriendListItem/FriendListItem.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li key={id} className="item">
        <span className="status">{isOnline ? <div className="is-online"></div> : <div className="is-offline"></div>}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
);

FriendListItem.defaultProps = {
    avatar: defaultAva,
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;