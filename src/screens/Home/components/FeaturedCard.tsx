import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../shared/themes/colors'



const FeaturedCard = ({item}:any) => {
  return (
     <TouchableOpacity style={styles.placeCard}>
          <Image source={item.image} style={styles.placeImage} />
          <Text style={styles.placeTitle}>{item.name}</Text>
        </TouchableOpacity>
  )
}

export default FeaturedCard

const styles = StyleSheet.create({
    placeCard: {
        marginRight: 12,
        width: 150,
        borderRadius: 12,
        backgroundColor: Colors.white,
        elevation: 3,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
      },
      placeImage: {
        width: 130,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
      },
      placeTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
      },
})