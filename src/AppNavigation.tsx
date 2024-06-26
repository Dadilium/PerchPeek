import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createSharedElementStackNavigator,
  SharedElementCompatRoute,
} from 'react-navigation-shared-element';
import MapDisplay from './views/MapDisplay';
import Details from './views/Details';
import { Landmark } from './types';

const Stack = createSharedElementStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MapDisplay"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MapDisplay" component={MapDisplay} />
        <Stack.Screen
          name="Details"
          component={Details}
          sharedElements={(route: SharedElementCompatRoute) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const landmark: Landmark = route.params.landmark;

            return [
              {
                id: `item.${landmark.id}`,
                animation: 'move',
                resize: 'clip',
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
