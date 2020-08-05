import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EnterAddressScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is an Address Screen</Text>
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
      justifyContent: 'space-between',
    },
  });

export default EnterAddressScreen
