import * as React from 'react';
import { View, Text, Button } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

const MainScreen = ({navigation}) => {

    const [ showText, setShowText ] = React.useState("")

    const KEY = "test_key"
    const VALUE = "test_value"

    const storeData = async () => {
        try {
          await EncryptedStorage.setItem(KEY, VALUE);
          console.log('Data stored successfully');
        } catch (error) {
          console.log('Error storing data: ', error);
        }
    };
      
    const getData = async () => {
        try {
          const data = await EncryptedStorage.getItem(KEY);
          console.log('Data retrieved successfully: ', data);
          setShowText(JSON.stringify(data))
        } catch (error) {
          console.log('Error retrieving data: ', error);
        }
    };
      
    React.useEffect(() => {
        storeData();
        getData();
    })

    return (
        <View>
            <Text>
                This is main
            </Text>
            <Text>
                {showText}
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