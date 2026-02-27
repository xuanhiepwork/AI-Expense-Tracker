import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LucideLayoutDashboard, LucideHistory, LucidePieChart } from 'lucide-react-native';

// Import các màn hình bạn đã làm
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: { height: 70, paddingBottom: 10 },
        }}
      >
        <Tab.Screen
          name="Budget"
          component={HomeScreen}
          options={{ tabBarIcon: ({ color }) => <LucideLayoutDashboard color={color} size={24} /> }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{ tabBarIcon: ({ color }) => <LucideHistory color={color} size={24} /> }}
        />
        <Tab.Screen
          name="Reports"
          component={HistoryScreen} // Tạm thời dùng History, chúng ta sẽ code màn này ở bước 3
          options={{ tabBarIcon: ({ color }) => <LucidePieChart color={color} size={24} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}