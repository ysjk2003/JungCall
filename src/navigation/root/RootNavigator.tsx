import AuthStackNavigator from '../stack/AuthStackNavigator';
import Main from '../main/Main';

function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <Main /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
