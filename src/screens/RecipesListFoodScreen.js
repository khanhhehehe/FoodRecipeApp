import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFood from '../components/SearchFood'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'
import { useSelector } from 'react-redux'
import RecipeFilter from '../components/RecipeFilter'
import { myColors } from '../Options'

const RecipesListFoodScreen = ({navigation}) => {
    const valueSearch = useSelector((state) => state.filterReducer.value);
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            <Header headerText={"Hi, Let's cook now!"} headerIcon={"bell-o"} />
            <SearchFood icon={"search"} placeholder={"Search your favourite recipe"} />
            {!valueSearch ?
                <>
                    {/* categories filter */}
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categories</Text>
                        <CategoriesFilter />
                    </View>
                    {/* list food */}
                    <View style={{ marginVertical: 10, flex: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recipes</Text>
                        <RecipeCard />
                    </View>
                </>
                : <RecipeFilter />}
            <TouchableOpacity style={styles.btnAdd} onPress={()=>{navigation.navigate('AddNewRecipeScreen')}}>
                <Text style={{fontSize: 30, color: 'white'}}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default RecipesListFoodScreen

const styles = StyleSheet.create({
    btnAdd:{
        position: 'absolute',
        bottom: 10,
        right: 0,
        backgroundColor: myColors.COLOR_MAIN,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
})