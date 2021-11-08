/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'

import {

  StyleSheet,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import RootStackNavigator from './src/navigation/RootNavigator';



export default () => {




  return (
    <NavigationContainer>

      <RootStackNavigator></RootStackNavigator>

    </NavigationContainer>
  )
}


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

