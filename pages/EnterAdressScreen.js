import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddressForm from '../components/AddressForm';

const EnterAddressScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AddressForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }
  });

export default EnterAddressScreen
