import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Colors} from '../../../shared/themes/colors';
import CustomButton from '../../../shared/components/CustomButton';
import {widthPixel, heightPixel} from '../../../utils/responsiveDimensions';
import {MAP_KEY} from '../../../apiServices/endpoints';

export default function MakeTrip() {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [stops, setStops] = useState<any>([]); // ✅ Initially no stops


  const handleAddStop = () => {
    setStops([...stops, {location: null, waitTime: '', showWait: false}]);
  };

  const handleStopChange = (index, location = null, waitTime = null) => {
    const newStops = [...stops];
    if (location !== null) newStops[index].location = location;
    if (waitTime !== null) newStops[index].waitTime = waitTime;
    setStops(newStops);
  };

  const handleRemoveStop = index => {
    const newStops = [...stops];
    newStops.splice(index, 1);
    setStops(newStops);
  };

  const toggleWaitInput = index => {
    const newStops = [...stops];
    newStops[index].showWait = !newStops[index].showWait;
    setStops(newStops);
  };

  const handleMakeTrip = () => {
    if (!startLocation || !endLocation) {
      console.log('Please select both start and end locations.');
      return;
    }

    console.log('Trip Start:', startLocation);
    console.log('Stops:', stops);
    console.log('Trip End:', endLocation);
    // TODO: send/store trip plan here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>Plan Your Trip</Text>

       
        <Text style={styles.label}>Start Location</Text>
        <GooglePlacesAutocomplete
          placeholder="Start Location"
          fetchDetails={true}
          onPress={(data, details = null) => setStartLocation(details)}
          query={{key: MAP_KEY, language: 'en'}}
          styles={autocompleteStyles}
          predefinedPlaces={[]}
          textInputProps={{
            placeholderTextColor: Colors.black,
            style: styles.input,
          }}
        />

        
        <Text style={styles.label}>Stops</Text>
        {stops.map((stop, index) => (
          <View key={index} style={styles.stopWrapper}>
            <View style={styles.stopRow}>
              <View style={{flex: 1}}>
                <GooglePlacesAutocomplete
                  placeholder="Stop Location"
                  fetchDetails={true}
                  onPress={(data, details = null) =>
                    handleStopChange(index, details)
                  }
                  query={{key: MAP_KEY, language: 'en'}}
                  styles={autocompleteStyles}
                  predefinedPlaces={[]}
                  textInputProps={{
                    placeholderTextColor: Colors.black,
                    style: styles.input,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.waitTimeButton}
                onPress={() => toggleWaitInput(index)}>
                <Text style={styles.waitTimeText}>⏱</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeStopButton}
                onPress={() => handleRemoveStop(index)}>
                <Text style={styles.removeStopText}>✕</Text>
              </TouchableOpacity>
            </View>
            {stop.showWait && (
              <TextInput
                placeholder="Wait time (e.g., 30 mins)"
                value={stop.waitTime}
                onChangeText={text => handleStopChange(index, null, text)}
                style={[styles.input, {marginTop: 5}]}
                placeholderTextColor={Colors.black}
              />
            )}
          </View>
        ))}

        {/* Add Stop Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddStop}>
          <Text style={styles.addButtonText}>+ Add Stop</Text>
        </TouchableOpacity>

        {/* End Location */}
        <Text style={styles.label}>End Location</Text>
        <GooglePlacesAutocomplete
          placeholder="End Location"
          fetchDetails={true}
          onPress={(data, details = null) => setEndLocation(details)}
          query={{key: MAP_KEY, language: 'en'}}
          styles={autocompleteStyles}
          predefinedPlaces={[]}
          textInputProps={{
            placeholderTextColor: Colors.black,
            style: styles.input,
          }}
        />

        {/* Submit */}
        <View style={styles.buttonWrapper}>
          <CustomButton buttonText="Make Trip" onPress={handleMakeTrip} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const autocompleteStyles = {
  container: {
    flex: 1,
    width: '100%', 
    marginBottom: heightPixel(10),
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
    paddingHorizontal: widthPixel(15),
  },
  innerContainer: {
    margin: heightPixel(10),
  },
  heading: {
    fontSize: widthPixel(24),
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: heightPixel(20),
  },
  label: {
    fontSize: widthPixel(16),
    fontWeight: '600',
    color: Colors.black,
    marginBottom: heightPixel(5),
  },
  input: {
    fontSize: widthPixel(14),
    height: heightPixel(45),
    borderRadius: widthPixel(8),
    backgroundColor: Colors.white,
    paddingHorizontal: widthPixel(10),
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  stopWrapper: {
    marginBottom: heightPixel(15),
  },
  stopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  waitTimeButton: {
    marginLeft: widthPixel(5),
    backgroundColor: Colors.primary,
    padding: widthPixel(10),
    borderRadius: 8,
  },
  waitTimeText: {
    color: 'white',
    fontSize: widthPixel(16),
  },
  removeStopButton: {
    marginLeft: widthPixel(5),
    backgroundColor: '#ff4d4d',
    padding: widthPixel(10),
    borderRadius: 8,
  },
  removeStopText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: Colors.primary,
    padding: heightPixel(10),
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: heightPixel(20),
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(30),
  },
});
