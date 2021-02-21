import React from "react";
import PropTypes from 'prop-types';

const StatItem = ({ label, percentage }) => (
    <>
        <span className="label">{label}</span>
        <span className="percentage"> {percentage}</span>
    </>    
)

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatItem;