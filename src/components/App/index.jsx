import React from 'react';

import user from '../Profile/user.json';
import statisticalData from '../Statistics/statistical-data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

import Profile from '../Profile';
import Statistics from "../Statistics";
import FriendList from '../FriendList';
import TransactionHistory from "../TransactionHistory";



const App = () => (
   <>
    <h2>ЗАДАЧА №1</h2>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <h2>ЗАДАЧА №2</h2>
    <Statistics
        title="Upload stats"
        stats={statisticalData}
    />
     <h2>ЗАДАЧА №3</h2>   
    <FriendList friends={friends} />
        
    <h2>ЗАДАЧА №4</h2>
    <TransactionHistory items={transactions} />;
    </>
)

export default App;
