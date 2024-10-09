import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../../../constants/Colors';
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
    const router=useRouter();
  return (
    <View style=
    {{
        padding:25,
        paddingTop:30,
        backgroundColor:Colors.WHITE,
        height: '100%',
        
    }}>
        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:28,
        marginTop:20,
      }}>Create New Account</Text>

<View style={{
        marginTop:30,
      }}>
        <Text style={{
            fontFamily: 'outfit',

        }}>CTU ID</Text>
        <TextInput
        style={styles.input} 
        placeholder='Enter  CTU ID'/>

      </View>

      <View style={{
        marginTop:10,
      }}>
        <Text style={{
            fontFamily: 'outfit',

        }}>Email</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        placeholder='Enter Email'/>

      </View>

      <View style={{
        marginTop:10,
      }}>
        <Text style={{
            fontFamily: 'outfit',

        }}>Full Name</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        placeholder='Enter Full Name'/>

      </View>

      

      <View style={{
        marginTop:10,
      }}>
        <Text style={{
            fontFamily: 'outfit',

        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        placeholder='Enter Password'/>

      </View>

      <View style={{
        marginTop:10,
      }}>
        <Text style={{
            fontFamily: 'outfit',

        }}>Confirm Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        placeholder='Enter  Password again'/>

      </View>

      

      <View style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:30,
      }}>
        <Text style={{
            color:Colors.WHITE,
            textAlign: 'center',
        }}>Create Account</Text>
      </View>

      <TouchableOpacity
        onPress={()=>router.replace('auth/sign-in')}
      style={{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        borderWidth:1,
      }}>
        <Text style={{
            color:Colors.PRIMARY,
            textAlign: 'center',
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor: 'black',
        fontFamily: 'outfit',
    }
})