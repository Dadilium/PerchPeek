/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import MapDisplay from '../src/views/MapDisplay';
import { render, fireEvent } from '@testing-library/react-native'
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const mockState = {
  landmarks: require('../src/store/data/londonLandmarks.json')
};
const store = mockStore(mockState)

it('all landmarks are on the map', () => {
  const state = store.getState();
  const { getByTestId } = render(
    <Provider store={store}>
      <MapDisplay />
    </Provider>
  );

  state.landmarks.map((landmark) => {
    const marker = getByTestId(`marker-item-${landmark.id}`);
    expect(marker.props.coordinate.latitude).toBe(landmark.latlng.latitude);
    expect(marker.props.coordinate.longitude).toBe(landmark.latlng.longitude);
  });
});

it('the list contains all the landmarks', () => {
  const state = store.getState();
  const { getByTestId, toJSON } = render(
    <Provider store={store}>
      <MapDisplay />
    </Provider>
  );

  expect(toJSON()).toMatchSnapshot();
  state.landmarks.map((landmark) => {
    const item = getByTestId(`landmark-item-label-${landmark.id}`);
    expect(item.children[0]).toBe(landmark.name);
  });
});

it('test marker color change', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MapDisplay />
    </Provider>
  );

  const marker1 = getByTestId(`marker-item-1`);
  const marker2 = getByTestId(`marker-item-2`);

  expect(marker1.props.children[0].props.color).toEqual('grey');
  expect(marker2.props.children[0].props.color).toEqual('grey');
  fireEvent.press(marker1); // change marker1 color to blue
  expect(marker1.props.children[0].props.color).toEqual('#2080c9');
  expect(marker2.props.children[0].props.color).toEqual('grey');
  fireEvent.press(marker2); // change marker1 color back to grey and marker2 to blue
  expect(marker1.props.children[0].props.color).toEqual('grey');
  expect(marker2.props.children[0].props.color).toEqual('#2080c9');
});

it('test hearting landmark on press - mocked store', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MapDisplay />
    </Provider>
  );

  expect(store.getActions().length).toBe(0);
  const item = getByTestId('heartbutton-1');
  fireEvent.press(item); // selecting landmark
  expect(store.getActions().length).toBe(1);
  fireEvent.press(item); // unselecting landmark
  expect(store.getActions().length).toBe(2);
});

// it('test scrollview when marker was pressed', () => {
//   const { getByTestId } = render(
//     <Provider store={store}>
//       <MapDisplay />
//     </Provider>
//   );

//   const scrollview = getByTestId(`landmarks-list`);
//   scrollview.scrollTo = jest.fn();
//   console.log(scrollview)
//   const marker5 = getByTestId(`marker-item-5`);
//   jest.spyOn(ScrollView, 'scrollTo');
//   expect(marker5.props.children[0].props.color).toEqual('grey');
//   fireEvent.press(marker5); // change marker5 color to blue and trigger scrollTo
//   expect(marker5.props.children[0].props.color).toEqual('#2080c9');
//   expect(scrollview.scrollTo).toHaveBeenCalled();

// });

// it('test navigation called', () => {
//   const { getByTestId } = render(
//     <Provider store={store}>
//       <MapDisplay />
//     </Provider>
//   );

//   const item = getByTestId(`landmark-item-1`);
//   item.props.onPress = jest.fn();
//   const spy = jest.spyOn(React, 'onPress')
//   expect(spy).toHaveBeenCalledTimes(0);
//   fireEvent.press(item);
//   // expect(item.props.onPress).toHaveBeenCalledTimes(1);
// })