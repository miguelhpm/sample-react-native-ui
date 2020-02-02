import React from 'react';
import { View, Text} from 'react-native';

export default class Screen2 extends React.Component {

    render() {
        return (
            <View style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Basic Mask 2
            </Text>
            </View>
        );
    }
}