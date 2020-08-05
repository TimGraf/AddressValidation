import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const EnterAddressScreen = () => {
    const [street, setStreet] = React.useState('Street');
    const [city, setCity] = React.useState('City');

    return (
        <View style={styles.container}>
            <Text>This is an Address Screen</Text>
            <TextInput 
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setStreet(text)}
                value={street}
            />
            <TextInput 
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setCity(text)}
                value={city}
            />
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
    },
  });

export default EnterAddressScreen
