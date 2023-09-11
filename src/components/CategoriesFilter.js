import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories, myColors } from '../Options'
import { useDispatch, useSelector } from 'react-redux'
import { setTypeCat } from "../redux/actions/typeCatAction";


const CategoriesFilter = () => {
    const select = useSelector((state) => state.typeReducer.typeCat);
    const dispatch = useDispatch();
    useEffect(() => { }, [select])
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
                    return (
                        <TouchableOpacity onPress={() => { dispatch(setTypeCat(index)) }} key={index}>
                            <View key={category.id} style={[styles.item, { backgroundColor: select === index ? myColors.COLOR_MAIN : myColors.COLOR_WHITE }]}>
                                <Text style={{ color: select === index ? myColors.COLOR_WHITE : myColors.COLOR_DARK, fontSize: 18 }}>{category.category}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                    
                })}
            </ScrollView>
        </View>
    )
}

export default CategoriesFilter

const styles = StyleSheet.create({
    item: {
        marginRight: 36,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        marginVertical: 16
    }
})