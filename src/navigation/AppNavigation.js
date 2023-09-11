import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import RecipesListFoodScreen from '../screens/RecipesListFoodScreen'
import RecipeDetail from '../screens/RecipeDetail'
import AddNewRecipeScreen from '../screens/AddNewRecipeScreen'

const Stack = createNativeStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="RecipesListFoodScreen" component={RecipesListFoodScreen}/>
            <Stack.Screen name="RecipeDetail" component={RecipeDetail}/>
            <Stack.Screen name="AddNewRecipeScreen" component={AddNewRecipeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})