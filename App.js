import { StackNavigator } from 'react-navigation';
import FolderListScreen from './src/screens/FolderListScreen';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import CardListScreen from './src/screens/CardListScreen';
 import FolderRegistrationScreen from './src/screens/FolderRegistrationScreen';
 import CardRegistrationScreen from './src/screens/CardRegistrationScreen';

const App = StackNavigator({
  Home:   { screen: FolderListScreen },
  Main: {screen: MainScreen },
  FolderRegistration: { screen: FolderRegistrationScreen },
  Login:  { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  CardList: { screen: CardListScreen },
  CardRegistration: { screen: CardRegistrationScreen },
}, {
  navigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
