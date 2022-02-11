
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import MapDisplay from './views/MapDisplay';
import Details from './views/Details';
import { Landmark } from './constants';

export type RootStackParamList = {
  MapDisplay: undefined,
  Details: { landmark: Landmark },
};

export type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'MapDisplay'>;
export type DetailsNavigationProp = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapDisplay">
        <Stack.Screen name="MapDisplay" component={MapDisplay} options={{ animation: 'none' }} />
        <Stack.Screen name="Details" component={Details} options={{ animation: 'none' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}