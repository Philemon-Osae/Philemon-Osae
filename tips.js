import React, {useState, useEffect} from 'react';
import  {Image, View, Text, TextInput, TouchableOpacity} from 'react-native'


import styles from '../styles/signupStyles'

export default function SignUp({navigation}) {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
    
      
      </View> 
      <View style={styles.inputContainer}>
   
   

      
          
        
          <TouchableOpacity
              style={styles.customBotton}
              onPress={() => navigation.navigate('Pregnancy Dos')}
            >
              <Text style={styles.textt}>Pregnancy Dos</Text>
          </TouchableOpacity>

      
    
      </View>
      
       </View>
  );
}

























