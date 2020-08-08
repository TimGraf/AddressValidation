import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const ValidAddressScreen = ({ route, navigation }) => {
    
    const street = useSelector(state => state.street);
    const city = useSelector(state => state.city);
    const state = useSelector(state => state.state);
    const zip = useSelector(state => state.zip);

    return (
        <View style={styles.container}>
            <Text>{street}</Text>
            <Text>{city}</Text>
            <Text>{state}</Text>
            <Text>{zip}</Text>
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
    input: { 
        height: 60, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 20,
        padding: 10
    }
  });

export default ValidAddressScreen
