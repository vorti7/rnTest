import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import BackgroundTimer from 'react-native-background-timer';

const TestScreen = () => {

    const [ showText, setShowText ] = useState("")

    const backgroundTimerFunction = () => {
        console.log("Background timer")
        BackgroundTimer.setTimeout(() => { 
            console.log("wow")
        },3000);
    }

    async function storeTestData() {
        try {
            await EncryptedStorage.setItem(
                "test",
                JSON.stringify({
                    age : 21,
                    token : "ACCESS_TOKEN",
                    username : "emeraldsanto",
                    languages : ["fr", "en", "de"]
                })
            ).then((res) => {
                console.log(res)
                setShowText(JSON.stringify(res))
            });
        } catch (error) {
        }
    }

    async function storeTestDataWithTimeout() {
        try {
            BackgroundTimer.setTimeout(() => { 
                EncryptedStorage.setItem(
                    "test",
                    JSON.stringify({
                        age : 21,
                        token : "ACCESS_TOKEN",
                        username : "emeraldsanto",
                        languages : ["fr", "en", "de"]
                    })
                ).then((res) => {
                    console.log(res)
                    setShowText(JSON.stringify(res))
                });
            },5000);
        } catch (error) {
        }
    }


    async function retrieveTestData() {
        try {   
            const session = await EncryptedStorage.getItem("test");
        
            if (session !== undefined) {
                // Congrats! You've just retrieved your first value!
                console.log(session)
            }
        } catch (error) {
            // There was an error on the native side
        }
    }

    const clearData = () => {
        setShowText("")
    }

    return (
        <View>
            <Text>
                {showText}
            </Text>
            <Button
                title="Timer test"
                onPress={() => {
                    backgroundTimerFunction()
                }}
            />
            <Button
                title="Test encrytedStorage store"
                onPress={() => {
                    storeTestData()
                }}
            />
            <Button
                title="Test encrytedStorage retrieve"
                onPress={() => {
                    retrieveTestData()
                }}
            />
            <Button
                title="Test error"
                onPress={() => {
                    storeTestDataWithTimeout()
                }}
            />
            <Button
                title="Clear Data"
                onPress={() => {
                    clearData()
                }}
            />
        </View>
    )
}

export default TestScreen