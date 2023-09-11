import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { defaultImage, myColors } from '../Options'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker'
import { useEffect } from 'react'
import { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { API_RECIPE } from '../api/api'
import { FontAwesome } from '@expo/vector-icons'

const AddNewRecipeScreen = ({ navigation }) => {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [nameFood, setNameFood] = useState('')
    const [ingredientsFood, setIngreFood] = useState([''])
    const [cookingTime, setCookingTime] = useState('')
    const [caloriesFood, setCaloriesFood] = useState('')
    const [descripFood, setDescriptFood] = useState('')
    const [stepsFood, setStepsFood] = useState([''])
    const [difficult, setDifficult] = useState('Easy');
    const [typeTime, setTypeTime] = useState('1');
    const [imgFood, setImg] = useState(defaultImage)
    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);
    const chooseImg = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImg(result.assets[0].uri);
        }
    }
    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>
    }
    const checkForm = () => {
        if (!nameFood || !ingredientsFood[0] || !cookingTime || !caloriesFood || !descripFood || !stepsFood[0]) {
            Alert.alert('', 'Do not leave data blank', [
                {
                    text: 'OK', onPress: () => { }
                },
            ]);
            return false;
        }
        return true;

    }
    const addRecipe = () => {
        if (checkForm()) {
            let newRecipe = {
                name: nameFood, image: imgFood, rating: 5, ingredients: ingredientsFood, time: cookingTime, difficulty: difficult,
                calories: caloriesFood + ' cal', color: myColors.COLOR_MAIN, description: descripFood, steps: stepsFood, type: typeTime
            }
            fetch(API_RECIPE, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(newRecipe)
            }).catch((error) => { console.error(); }).then((res) => navigation.goBack())
        }
    }
    const cancelBackScreen = () => {
        if (nameFood || ingredientsFood[0] || cookingTime || caloriesFood || descripFood || stepsFood[0]) {
            Alert.alert('', 'Do you want to cancel?', [
                {
                    text: 'OK', onPress: () => { navigation.goBack() }
                }, {
                    text: 'Cancel', onPress: () => { }
                },
            ]);
            return
        }
        navigation.goBack()
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 10 }}>
                    <View style={{ backgroundColor: myColors.COLOR_MAIN, marginBottom: 15, paddingVertical: 10, paddingHorizontal: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <Pressable style={{ flex: 1 }} onPress={cancelBackScreen}>
                            <FontAwesome name='arrow-circle-left' size={30} color={'white'} />
                        </Pressable>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNameFood}
                            value={nameFood}
                            placeholder='Name food (Chicken)'
                        />
                        <View style={{ height: 15 }}></View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => {
                                let myIngre = [text]
                                setIngreFood(myIngre)
                            }}
                            value={ingredientsFood}
                            placeholder='Ingredients (Chicken, Salt, Sugar)'
                        />
                        <View style={{ height: 15 }}></View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setCookingTime}
                            value={cookingTime}
                            placeholder='Cooking time (45 mins)'
                        />
                        <View style={{ height: 15 }}></View>
                        <View style={{ width: '90%' }}>
                            <RadioButton.Group onValueChange={value => setDifficult(value)} value={difficult}>
                                <View style={{ backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, justifyContent: 'center' }}>
                                    <RadioButton.Item label="Easy" value="Easy" />
                                    <RadioButton.Item label="Medium" value="Medium" />
                                    <RadioButton.Item label="Hard" value="Hard" />
                                </View>
                            </RadioButton.Group>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => {
                                setCaloriesFood(text)
                            }}
                            value={caloriesFood}
                            keyboardType='numeric'
                            placeholder='Calories (110 cal)'
                        />
                        <View style={{ height: 15 }}></View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setDescriptFood}
                            value={descripFood}
                            placeholder='Description (a dish with chicken is very good)'
                        />
                        <View style={{ height: 15 }}></View>
                        <TextInput
                            multiline={true}
                            numberOfLines={8}
                            style={[styles.input, { height: 100 }]}
                            onChangeText={(text) => {
                                let mySteps = [text]
                                setStepsFood(mySteps)
                            }}
                            value={stepsFood}
                            placeholder='Steps (Wash, Boiling water, put chicken in hot water)'
                        />
                        <View style={{ height: 15 }}></View>
                        <View style={{ width: '90%' }}>
                            <RadioButton.Group onValueChange={value => setTypeTime(value)} value={typeTime}>
                                <View style={{ backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, justifyContent: 'center' }}>
                                    <RadioButton.Item label="Breakfast" value="1" />
                                    <RadioButton.Item label="Lunch" value="2" />
                                    <RadioButton.Item label="Dinner" value="3" />
                                </View>
                            </RadioButton.Group>
                        </View>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <TouchableOpacity style={styles.btnSelectImage} onPress={chooseImg}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Your food image</Text>
                    </TouchableOpacity>
                    <View style={{ height: 15 }}></View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btnAdd} onPress={addRecipe}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddNewRecipeScreen

const styles = StyleSheet.create({
    btnSelectImage: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: myColors.COLOR_MAIN,
        width: '40%',
        borderRadius: 10,
        marginLeft: '5%',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16
    },
    btnAdd: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: myColors.COLOR_MAIN,
        borderRadius: 10,
        alignItems: 'center',
        width: '90%',
    }
})