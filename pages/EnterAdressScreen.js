import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import addressActions from '../redux/actions';

const EnterAddressScreen = ({ navigation }) => {
    // Initializing dispatch
    const dispatch = useDispatch();

    // Setting up local state using the useState hook
    const [addressForm, setAddressForm] = useState({
        street: '',
        city: '',
        state: '',
        zip: ''
    });

    const onChangeText = (name, event) => {
        setAddressForm({ ...addressForm, [name]: event.nativeEvent.text });
        console.log(addressForm);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addressActions.validateAddress(addressForm));
        navigation.navigate('Valid Address', addressForm);
    };

    const { street, city, state, zip } = addressForm;

    return (
        <View style={styles.container}>
            <Text>Enter an address to be validated</Text>
            <TextInput 
                style={styles.input}
                onChange={text => onChangeText("street", text)}
                value={street}
                placeholder="Street"
                name="street"
            />
            <TextInput 
                style={styles.input}
                onChange={text => onChangeText("city", text)}
                value={city}
                placeholder="City"
            />
            <TextInput 
                style={styles.input}
                onChange={text => onChangeText("state", text)}
                value={state}
                placeholder="State"
            />
            <TextInput 
                style={styles.input}
                onChange={text => onChangeText("zip", text)}
                value={zip}
                placeholder="ZIP Code"
            />
            <TouchableOpacity onPress={handleSubmit}>
                <Entypo name="publish" size={48} color="black" />
            </TouchableOpacity>
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

export default EnterAddressScreen
