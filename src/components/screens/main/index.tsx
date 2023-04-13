import * as React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                This is main
            </Text>
            <Button
                title='Test'
                onPress={() => {
                    navigation.navigate('Test')
                }}
            />
        </View>
    )
}

export default MainScreen