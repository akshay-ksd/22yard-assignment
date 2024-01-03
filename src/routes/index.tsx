import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabRouter from './tab-routes';
import AddEditEmployee from '../screens/add-edit-employee/add-edit-employee';
import AddEditTemMembers from '../screens/add-edit-team-members';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabRouter" component={TabRouter} />
        <Stack.Screen name="AddEditEmployee" component={AddEditEmployee}
          options={{ presentation: 'modal', animationTypeForReplace: 'push' }}
        />
        <Stack.Screen
          name="AddEditTemMembers"
          component={AddEditTemMembers}
          options={{ presentation: 'modal', animationTypeForReplace: 'push' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
