import { createStackNavigator } from '@react-navigation/stack';
import Albums from '../components/Albums';
import SharedAlbum from '../components/SharedAlbum';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: 'center', animationEnabled: true }}
    >
      <Stack.Screen name="Albums" component={Albums} />
      <Stack.Screen name="SharedAlbum" component={SharedAlbum} />
    </Stack.Navigator>
  );
};

export default Navigator;
