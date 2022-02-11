
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import MapDisplay from './views/MapDisplay';
import Details from './views/Details';
import { Landmark } from './constants';

export type RootStackParamList = {
  MapDisplay: undefined,
  Details: { landmark: Landmark },
};

export type HomeScreenNavigationProp = StackScreenProps<RootStackParamList, 'MapDisplay'>;
export type DetailsNavigationProp = StackScreenProps<RootStackParamList, 'Details'>;

const Stack = createSharedElementStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapDisplay">
        <Stack.Screen name="MapDisplay" component={MapDisplay} />
        <Stack.Screen name="Details" component={Details} sharedElements={(route, otherRoute, showing) => {
          return [{
            id: `item.${route.params.landmark.id}`,
            animation: 'move',
            resize: 'clip'
          }];
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}