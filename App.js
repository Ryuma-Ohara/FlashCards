import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import FolderListScreen from './src/screens/FolderListScreen';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import CardListScreen from './src/screens/CardListScreen';
import FolderRegistrationScreen from './src/screens/FolderRegistrationScreen';
import CardRegistrationScreen from './src/screens/CardRegistrationScreen';

import ENV from './env.json';

const config = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBASE_DB_URL,
  projectId:         ENV.FIREBASE_PRJ_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
  Login:  { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home:   { screen: FolderListScreen },
  Main: { screen: MainScreen },
  FolderRegistration: { screen: FolderRegistrationScreen },
  CardList: { screen: CardListScreen },
  CardRegistration: { screen: CardRegistrationScreen },
}, {
  navigationOptions: {
    headerTitle: 'FlashCards',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
