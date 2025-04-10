import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../shared/themes/colors'



const SuggestedCard = ({item}:any) => {
  return (
     <View style={styles.suggestedCard}>
           <Text style={styles.suggestedTitle}>{item.name}</Text>
           <Text style={styles.suggestedDesc}>{item.desc}</Text>
         </View>
  )
}

export default SuggestedCard

const styles = StyleSheet.create({
  suggestedCard: {
    backgroundColor: Colors.white,
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  suggestedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  suggestedDesc: {
    fontSize: 13,
    marginTop: 4,
    color: Colors.gray,
  },
})