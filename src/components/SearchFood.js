import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from "../redux/actions/typeCatAction";

const SearchFood = ({ icon, placeholder }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.search}>
            <FontAwesome name={icon} size={20} color={"#f96163"} />
            <TextInput style={{ paddingLeft: 8, fontSize: 16 }} placeholder={placeholder} onChangeText={(text) => { dispatch(setFilter(text)) }} />
        </View>
    )
}

export default SearchFood

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        alignItems: 'center'
    }
})