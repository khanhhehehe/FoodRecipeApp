import { FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { myColors, recipeList } from '../Options'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { API_RECIPE } from '../api/api'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RecipeCard = () => {
    const navigation = useNavigation()
    const [mydata, setMydata] = useState([])
    const [loading, setLoading] = useState(true)
    const select = useSelector((state) => state.typeReducer.typeCat);
    const getData = () => {
        fetch(API_RECIPE)
            .then(res => res.json())
            .then(data => {
                const myIndex = select + 1
                const filteredData = data.filter(item => item.type == myIndex);
                setMydata(filteredData)
                setLoading(false)
            }).catch((error) => console.log(error))
    }
    const animLoading = () => {
        return <ActivityIndicator style={styles.boxAll} size={'large'} />
    }
    useEffect(() => {
        setLoading(true)
        getData()
    }, [select])
    return (
        <View style={{ flex: 1 }}>
            {loading ? animLoading() :
                <FlatList
                    data={mydata}
                    renderItem={({ item }) =>
                        <Pressable
                            key={item.id}
                            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
                            style={styles.item}>
                            {/* <Image source={item.image} style={{ width: 150, height: 150, resizeMode: 'center', borderRadius: 20 }} /> */}
                            <Image source={{ uri: item.image }} style={{ width: 150, height: 150, resizeMode: 'center', borderRadius: 20 }} />
                            <Text>{item.name}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                <Text>{item.time}</Text>
                                <Text> | </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                                    <FontAwesome name='star' size={16} color={myColors.COLOR_MAIN} />
                                </View>
                            </View>
                        </Pressable>
                    }
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                    }}
                    showsVerticalScrollIndicator={false}
                />}
        </View>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    item: {
        backgroundColor: myColors.COLOR_WHITE,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 26,
        width: '48%'
    },
    boxAll: {
        flex: 1
    },
})