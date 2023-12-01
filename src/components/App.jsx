import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container } from './Container';

import userData from '../data/user.json';
import statsData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionData from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </Container>
  );
};
