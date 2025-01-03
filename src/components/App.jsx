import userData from '../userData.json';
import Profile from './Profile/Profile';
import friends from '../friends.json';
import FriendListItem from './FriendList/FriendList';
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
