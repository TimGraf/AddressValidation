import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AddressForm from '../components/AddressForm';

const EnterAddressScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AddressForm />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}>
              <Entypo name="home" size={48} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      marginBottom: 80
    }
  });

export default EnterAddressScreen
