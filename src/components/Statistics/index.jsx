import React from "react";
import StatItem from '../StatItem';

const Statistics = ({ title, stats}) => (
    <section className="statistics">
        {title ? <h2 className="title">{ title }</h2> : null}
        <ul className="stat-list">
            {
                stats.map(({ id, label, percentage }) => (
                    <li key={id} className="item">
                        <StatItem
                            label={label}
                            percentage={percentage}
                        />
                    </li> 
                ))
            }
         </ul>
    </section>
)

export default Statistics;