/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
} from 'react-native';

import AppNavigator from './routes';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const App: () => Node = () => {

  return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
