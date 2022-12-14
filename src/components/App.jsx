import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friends/FriendList";
import { TransactionHistory } from "./transactions/TransactionHistory";
import user from './profile/user.json'
import data from './statistics/data.json'
import friends from './friends/friends.json'
import transactions from './transactions/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}