import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation';
import Profile from './components/profile';
import TweetForm from './components/tweetForm';
import TweetList from './components/tweetList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetForm />
      <TweetList />
    </div>
  );
}

export default App;
