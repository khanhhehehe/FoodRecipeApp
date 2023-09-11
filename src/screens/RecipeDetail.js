import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'

const RecipeDetail = ({ navigation, route }) => {
    const { item } = route.params
    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>
            <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                    <FontAwesome name='arrow-circle-left' size={30} color={'white'} />
                </Pressable>
                <FontAwesome name='heart-o' size={28} color={'white'} />
            </SafeAreaView>
            <View style={styles.box}>
                <View style={styles.topBoxItem}>
                    <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20 }} />
                </View>
                <Text style={{ marginTop: 120, fontSize: 28, fontWeight: 'bold' }}>{item.name}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 20, marginVertical: 16 }}>
                        {item.description}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: '#FFF9C4', paddingVertical: 26, borderRadius: 8, alignItems: 'center', width: 100 }}>
                            <Text style={{ fontSize: 40 }}>⏰</Text>
                            <Text style={{ fontSize: 20, fontWeight: '400' }}>{item.time}</Text>
                        </View>
                        <View style={{ backgroundColor: '#B3E5FC', paddingVertical: 26, borderRadius: 8, alignItems: 'center', width: 100 }}>
                            <Text style={{ fontSize: 40 }}>🥣</Text>
                            <Text style={{ fontSize: 20, fontWeight: '400' }}>{item.difficulty}</Text>
                        </View>
                        <View style={{ backgroundColor: '#FFCDD2', paddingVertical: 26, borderRadius: 8, alignItems: 'center', width: 100 }}>
                            <Text style={{ fontSize: 40 }}>🔥</Text>
                            <Text style={{ fontSize: 20, fontWeight: '400' }}>{item.calories}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}>Ingredients:</Text>
                        {item.ingredients.map((ingredient, index) => {
                            return (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }} key={index}>
                                    <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 5 }}>
                                    </View>
                                    <Text style={{ fontSize: 18, marginLeft: 6 }}>{ingredient}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}>Step:</Text>
                        {item.steps.map((step, index) => {
                            return (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }} key={index}>
                                    <Text style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}>{`${index + 1}. ${step}`}</Text>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default RecipeDetail

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 200,
        borderTopLeftRadius: 56,
        borderTopRightRadius: 56,
        alignItems: 'center',
        paddingHorizontal: 16
    },
    topBoxItem: {
        height: 250,
        width: 250,
        position: 'absolute',
        top: -150
    }
})