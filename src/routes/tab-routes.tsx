import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmployeeList from '../screens/employee-list/employee-list';
import TeamMembers from '../screens/team-members/team-members';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Employee"
        component={EmployeeList}
        options={{
          tabBarLabel: 'Employee',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamMembers}
        options={{
          tabBarLabel: 'Team',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
