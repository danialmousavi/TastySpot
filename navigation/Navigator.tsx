import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AllTastes from "../screens/AllTastes"
import AddTastes from "../screens/AddTastes"

const Stack=createStackNavigator()
export const Navigator=()=>{
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="AllTastes" component={AllTastes}/>
                    <Stack.Screen name="AddTastes" component={AddTastes}/>

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}