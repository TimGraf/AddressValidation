import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import addressActions from '../redux/actions';

export const AddressForm = () => {
    // Setup navigation
    const navigation = useNavigation();

    // Initializing dispatch
    const dispatch = useDispatch();

    // Setting up local state using the useState hook
    const [addressForm, setAddressForm] = useState({
        street: '',
        city: '',
        state: '',
        zip: ''
    });

    const states = [
        {
            label: "Alabama",
            value: "AL"
        },
        {
            label: "Alaska",
            value: "AK"
        },
        {
            label: "American Samoa",
            value: "AS"
        },
        {
            label: "Arizona",
            value: "AZ"
        },
        {
            label: "Arkansas",
            value: "AR"
        },
        {
            label: "California",
            value: "CA"
        },
        {
            label: "Colorado",
            value: "CO"
        },
        {
            label: "Connecticut",
            value: "CT"
        },
        {
            label: "Delaware",
            value: "DE"
        },
        {
            label: "District Of Columbia",
            value: "DC"
        },
        {
            label: "Federated States Of Micronesia",
            value: "FM"
        },
        {
            label: "Florida",
            value: "FL"
        },
        {
            label: "Georgia",
            value: "GA"
        },
        {
            label: "Guam",
            value: "GU"
        },
        {
            label: "Hawaii",
            value: "HI"
        },
        {
            label: "Idaho",
            value: "ID"
        },
        {
            label: "Illinois",
            value: "IL"
        },
        {
            label: "Indiana",
            value: "IN"
        },
        {
            label: "Iowa",
            value: "IA"
        },
        {
            label: "Kansas",
            value: "KS"
        },
        {
            label: "Kentucky",
            value: "KY"
        },
        {
            label: "Louisiana",
            value: "LA"
        },
        {
            label: "Maine",
            value: "ME"
        },
        {
            label: "Marshall Islands",
            value: "MH"
        },
        {
            label: "Maryland",
            value: "MD"
        },
        {
            label: "Massachusetts",
            value: "MA"
        },
        {
            label: "Michigan",
            value: "MI"
        },
        {
            label: "Minnesota",
            value: "MN"
        },
        {
            label: "Mississippi",
            value: "MS"
        },
        {
            label: "Missouri",
            value: "MO"
        },
        {
            label: "Montana",
            value: "MT"
        },
        {
            label: "Nebraska",
            value: "NE"
        },
        {
            label: "Nevada",
            value: "NV"
        },
        {
            label: "New Hampshire",
            value: "NH"
        },
        {
            label: "New Jersey",
            value: "NJ"
        },
        {
            label: "New Mexico",
            value: "NM"
        },
        {
            label: "New York",
            value: "NY"
        },
        {
            label: "North Carolina",
            value: "NC"
        },
        {
            label: "North Dakota",
            value: "ND"
        },
        {
            label: "Northern Mariana Islands",
            value: "MP"
        },
        {
            label: "Ohio",
            value: "OH"
        },
        {
            label: "Oklahoma",
            value: "OK"
        },
        {
            label: "Oregon",
            value: "OR"
        },
        {
            label: "Palau",
            value: "PW"
        },
        {
            label: "Pennsylvania",
            value: "PA"
        },
        {
            label: "Puerto Rico",
            value: "PR"
        },
        {
            label: "Rhode Island",
            value: "RI"
        },
        {
            label: "South Carolina",
            value: "SC"
        },
        {
            label: "South Dakota",
            value: "SD"
        },
        {
            label: "Tennessee",
            value: "TN"
        },
        {
            label: "Texas",
            value: "TX"
        },
        {
            label: "Utah",
            value: "UT"
        },
        {
            label: "Vermont",
            value: "VT"
        },
        {
            label: "Virgin Islands",
            value: "VI"
        },
        {
            label: "Virginia",
            value: "VA"
        },
        {
            label: "Washington",
            value: "WA"
        },
        {
            label: "West Virginia",
            value: "WV"
        },
        {
            label: "Wisconsin",
            value: "WI"
        },
        {
            label: "Wyoming",
            value: "WY"
        }
    ];

    const getStateObject = (abbreviation) => {
        return states.find(state => state.abbreviation === abbreviation)
    }

    const onChangeText = (name, event) => {
        setAddressForm({ ...addressForm, [name]: event.nativeEvent.text });
    }

    const onStateChangeText = (stateAbbriviation) => {
        setAddressForm({ ...addressForm, state: stateAbbriviation });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addressActions.validateAddress(addressForm));
        navigation.navigate('Valid Address', addressForm);
    };

    const { street, city, state, zip } = addressForm;

    return (
        <View style={styles.address_container}>
            <Text style={styles.title}>Enter an address to be validated</Text>
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
            <DropDownPicker
                containerStyle={styles.dropdown}
                labelStyle={{
                    fontSize: 14,
                    textAlign: 'left',
                    color: '#000'
                }}
                style={{backgroundColor: '#fff'}}
                itemStyle={{justifyContent: 'flex-start'}}
                dropDownStyle={{backgroundColor: '#fff'}}
                items={states}
                defaultValue={getStateObject(state)}
                onChangeItem={item => onStateChangeText(item.value)}
            >
                
            </DropDownPicker>
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
    input: { 
        height: 60, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 20,
        padding: 10
    },
    dropdown: {
        height: 60, 
        width: 300, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});

export default AddressForm;