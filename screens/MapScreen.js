import tw from 'twrnc'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from '../components/Map'

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map></Map>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator></Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})