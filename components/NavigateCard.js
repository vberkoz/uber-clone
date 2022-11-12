import tw from 'twrnc'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'

import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Navigate Card</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            returnKeyType={'search'}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en'
            }}
            placeholder='Where to?'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              )
              navigation.navigate('RideOptionsCard')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#dddddd',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})