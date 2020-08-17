import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const AddressDisplay = () => {
    // Setup navigation
    const navigation = useNavigation();

    const street = useSelector(state => state.street);
    const city = useSelector(state => state.city);
    const state = useSelector(state => state.state);
    const zip = useSelector(state => state.zip);

    return (
        <View style={styles.address_container}>
            <Text style={styles.title}>Validated address</Text>
            <Text style={styles.label}>{street}</Text>
            <Text style={styles.label}>{city}</Text>
            <Text style={styles.label}>{state}</Text>
            <Text style={styles.label}>{zip}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    address_container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    title: {
        marginTop: 20
    },
    label: { 
        height: 60, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 20,
        padding: 10
    }
});

export default AddressDisplay;