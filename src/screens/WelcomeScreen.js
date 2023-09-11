import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
    return (
        <ScrollView >
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require("../../assets/imagewelcome.png")} />
                <Text style={{ color: '#f96163', fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>
                    Love cooking
                </Text>
                <Text
                    style={{
                        fontSize: 42,
                        fontWeight: 'bold',
                        color: '#3c444c',
                        marginTop: 15,
                        marginBottom: 20
                    }}>
                    Cook Like A Chef With 10K+ Premium Recipes
                </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("RecipesListFoodScreen") }}
                    style={styles.btn}>
                    <Text style={styles.textBtn}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#f96163',
        borderRadius: 18,
        paddingVertical: 18,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20
    },
    textBtn: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    }
})