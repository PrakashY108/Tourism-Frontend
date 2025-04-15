import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import AuthContainer from '../../../../shared/components/AuthContainer';
import CustomHeader from '../../../../shared/components/CustomHeader';
import { styles } from './styles';
import CustomTextInput from '../../../../shared/components/CustomTextInput';
import CustomDropdown from '../../../../shared/components/CustomDropdown';
import CustomButton from '../../../../shared/components/CustomButton';
import { Images } from '../../../../assets/images';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('9876543210');
  const [gender, setGender] = useState('Male');
  const [selected, setSelected] = useState('');

  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets && response.assets[0]) {
        setProfileImage(response.assets[0].uri || null);
      }
    });
  };

  const handleSave = () => {
    const profileData = {
      profileImage,
      firstName,
      lastName,
      email,
      phone,
      gender,
    };
    console.log('Saved Profile:', profileData);
  };

  return (
    <AuthContainer>
      <CustomHeader headerTitle="Edit Profile" />

      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.imagePicker}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />

          <TouchableOpacity onPress={handleChoosePhoto} style={styles.imagePickerbtn}>
            <Image source={Images.icons.edit} style={styles.imagePickerlogo} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={handleChoosePhoto} style={styles.imagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>Add Photo</Text>
            </View>
          )}
        </TouchableOpacity> */}

        <CustomTextInput
          placeholder="Enter first name"
          onChangeText={setFirstName}
          value={firstName}
          label="First Name"
        />

        <CustomTextInput
          placeholder="Enter last name"
          onChangeText={setLastName}
          value={lastName}
          label="Last Name"
        />

        <CustomTextInput
          placeholder="Enter email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          label="Email"
        />

        <CustomTextInput
          placeholder="Enter phone number"
          onChangeText={setPhone}
          value={phone}
          keyboardType="phone-pad"
          label="Phone Number"
        />


        <CustomDropdown
          options={options}
          selectedValue={selected}
          onValueChange={setSelected}
          placeholder="Choose an option"
          label='Gender'
          containerStyle={{ width: '94%', alignSelf: 'center' }}
        />

        <CustomButton
          onPress={handleSave}
          buttonText='Save'
          mainButtonstyle={{ marginTop: 20, alignSelf: 'center', width: '90%' }}
        />
      </ScrollView>
    </AuthContainer>
  );
};

export default Profile;
