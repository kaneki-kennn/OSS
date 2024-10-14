import { View, Text, StyleSheet,Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors'

export default function prtracer() {
  return (
    <View>
      <View style={styles.main}>
              <Image 
              source={require('./../../assets/images/CTU.png')}
              style={styles.logo} 
              resizeMode="contain"/>
              <View style={styles.content}>
                
              </View>
              
              <Ionicons name="notifications" size={24} color="white" />
              <Ionicons name="person-circle-outline" size={27} color="white" />
        </View>
        <View style={styles.catalogue}>
    <View style={styles.row}>
        <Text style={styles.header}>Requested</Text>
        <Text style={styles.header}>PR No.</Text>  
        <Text style={styles.header}>Status</Text>
        <Text style={styles.header}>Comment</Text>
        <Text style={styles.header}>Last Updated</Text>
    </View>
</View>
<View style={styles.row2}>
        <Text style={styles.cell}>08 - 10 -2024</Text>
        <Text style={styles.cell}>324234245</Text>
        <Text style={styles.cell}><Ionicons name="reload-circle-outline" size={24} color="black" /></Text>
        <Text style={styles.cell}>....</Text>
        <Text style={styles.cell}>12-13-2024</Text>
        

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#003566', 
    alignItems: 'center',
    padding: 10,
    marginTop:25, 
},
logo: {
    width: 40, 
    height: 40, 
    marginRight: 10, 
},
content: {
  flex: 1, 
},
icons: {
    flexDirection: 'row',
    alignItems: 'center', 
},
  row: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space out items in the row
    paddingVertical: 5, 
    
    },
    row2:{
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space out items in the row
    paddingVertical: 5, 
    backgroundColor:Colors.WHITE,
    padding: 5,
    textAlign: 'center',
    },
    
    
    catalogue: {
    marginTop: 10,
    backgroundColor: '#003566', // Background color for the table
    padding: 5,
    },
    header:{
    color:Colors.WHITE,
    padding: 3,
    },
    
})