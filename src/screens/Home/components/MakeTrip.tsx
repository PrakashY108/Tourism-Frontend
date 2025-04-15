import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from '../../../shared/themes/colors';
import CustomButton from '../../../shared/components/CustomButton';
import { widthPixel, heightPixel } from '../../../utils/responsiveDimensions';
import { MAP_KEY } from '../../../apiServices/endpoints';
import { Images } from '../../../assets/images';

export default function MakeTrip() {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [stops, setStops] = useState<any>([]); // ✅ Initially no stops
  const [showForm, setShowForm] = useState(false);

  const handleAddStop = () => {
    setStops([...stops, { location: null, waitTime: '', showWait: false }]);
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
        <TouchableOpacity onPress={() => setShowForm(!showForm)} style={styles.toggleHeader}>
          <Text style={styles.heading}>Plan Your Trip</Text>
          <Image source={showForm? Images.icons.upArrow : Images.icons.downArrow } style={{width:widthPixel(30),height: heightPixel(29),tintColor: Colors.black}} />
        </TouchableOpacity>

        {
          showForm && (
            <View>
              <Text style={styles.label}>Start Location</Text>
              <GooglePlacesAutocomplete
                placeholder="Start Location"
                fetchDetails={true}
                onPress={(data, details = null) => setStartLocation(details)}
                query={{ key: MAP_KEY, language: 'en' }}
                styles={autocompleteStyles}
                predefinedPlaces={[]}
                textInputProps={{
                  placeholderTextColor: Colors.black,
                  style: styles.input,
                }}
              />


              {
                stops?.length !== 0 && <Text style={styles.label}>Stops</Text>
              }
              {stops.map((stop, index) => (
                <View key={index} style={styles.stopWrapper}>
                  <View style={styles.stopRow}>
                    <View style={{ flex: 1 }}>
                      <GooglePlacesAutocomplete
                        placeholder="Stop Location"
                        fetchDetails={true}
                        onPress={(data, details = null) =>
                          handleStopChange(index, details)
                        }
                        query={{ key: MAP_KEY, language: 'en' }}
                        styles={autocompleteStyles}
                        predefinedPlaces={[]}
                        textInputProps={{
                          placeholderTextColor: Colors.black,
                          style: styles.input,
                        }}
                      />
                    </View>
                    <View style={{ flexDirection: 'row', position: 'absolute', right: 5, top: 5 }}>
                      <TouchableOpacity
                        style={styles.waitTimeButton}
                        onPress={() => toggleWaitInput(index)}>
                        <Image source={Images.icons.timer} style={styles.waitTimeText} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.removeStopButton}
                        onPress={() => handleRemoveStop(index)}>
                        <Image source={Images.icons.cross} style={styles.removeStopText} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {stop.showWait && (
                    <TextInput
                      placeholder="Wait time (e.g., 30 mins)"
                      value={stop.waitTime}
                      onChangeText={text => handleStopChange(index, null, text)}
                      style={[styles.input, { marginTop: 5 }]}
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
                query={{ key: MAP_KEY, language: 'en' }}
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
            </View>
          )
        }

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
    borderRadius:10,
    margin: widthPixel(15)
  },
  toggleHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: widthPixel(20),
  },
  innerContainer: {
    margin: heightPixel(10),
  },
  heading: {
    fontSize: widthPixel(24),
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
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
    width: '100%'
  },
  stopWrapper: {
    marginBottom: heightPixel(15),
    justifyContent: 'center'
  },
  stopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  waitTimeButton: {
    marginLeft: widthPixel(5),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
  },
  waitTimeText: {
    width: 20,
    height: 20,
    tintColor: Colors.white
  },
  removeStopButton: {
    marginLeft: widthPixel(5),
    backgroundColor: '#ff4d4d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 8,
  },
  removeStopText: {
    width: widthPixel(15),
    height: heightPixel(15),
    tintColor: 'white',
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
    alignSelf: 'center',
    width: '100%'
  },
});
