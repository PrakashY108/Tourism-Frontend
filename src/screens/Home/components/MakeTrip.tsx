import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Colors} from '../../../shared/themes/colors';
import CustomButton from '../../../shared/components/CustomButton';
import {widthPixel, heightPixel} from '../../../utils/responsiveDimensions';
import {MAP_KEY} from '../../../apiServices/endpoints';

export default function MakeTrip() {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);

  const handleMakeTrip = () => {
    if (startLocation && endLocation) {
      console.log('Trip Start:', startLocation);
      console.log('Trip End:', endLocation);
      // Add navigation or saving logic here
    } else {
      console.log('Please select both start and end locations.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>Plan Your Trip</Text>

        {/* Start Location Input */}
        <GooglePlacesAutocomplete
          placeholder="Start Location"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setStartLocation(details);
          }}
          query={{
            key: MAP_KEY,
            language: 'en',
          }}
          styles={autocompleteStyles}
          textInputProps={{
            placeholderTextColor: Colors.black,
            style: styles.input,
          }}
          predefinedPlaces={[]}
        />

        {/* End Location Input */}
        <GooglePlacesAutocomplete
          placeholder="End Destination"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setEndLocation(details);
          }}
          query={{
            key: MAP_KEY,
            language: 'en',
          }}
          styles={autocompleteStyles}
          textInputProps={{
            placeholderTextColor: Colors.black,
            style: styles.input,
          }}
          predefinedPlaces={[]}
        />

        {/* Button */}
        <View
          style={{
            marginTop: heightPixel(20),
            alignSelf: 'center',
            width: '100%',
            marginRight: 15,
          }}>
          <CustomButton buttonText="Make Trip" onPress={handleMakeTrip} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const autocompleteStyles = {
  container: {
    flex: 0,
    marginBottom: heightPixel(20),
  },
  listView: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: widthPixel(10),
    zIndex: 10,
  },
  description: {
    color: Colors.black,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e8fa',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 10,
    width: '92%',
    borderRadius: 10,
    marginTop: heightPixel(10),
  },
  innerContainer: {
    padding: widthPixel(20),
    paddingTop: heightPixel(30),
  },
  heading: {
    fontSize: widthPixel(22),
    fontWeight: 'bold',
    marginBottom: heightPixel(20),
    color: Colors.black,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    fontSize: widthPixel(16),
    height: heightPixel(50),
    color: Colors.black,
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: widthPixel(10),
    paddingHorizontal: widthPixel(10),
  },
});
