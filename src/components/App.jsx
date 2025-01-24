import React from 'react';
import Profile from "./Profile";
import user from "./user.json";
import Statistics from './Statistics';
import data from "./data.json";
import FriendList from './FriendList'; 
import friendsData from './friends.json' 
import TransactionHistory from './TransactionHistory';
import transactions from './transaction.json';



export const App = () => {
  return (
    <div>
         <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
       <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
       <TransactionHistory items={transactions}/>
    </div>
  
  );
};
