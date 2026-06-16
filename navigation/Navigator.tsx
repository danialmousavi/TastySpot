import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllTastes from "../screens/AllTastes";
import AddTastes from "../screens/AddTastes";
import HeaderButton from "../components/HeaderButton";
import { Colors } from "../constants/colors";

const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.text,
            cardStyle:{
                backgroundColor:Colors.backGround
            }
          }}
        >
          <Stack.Screen
            name="AllTastes"
            component={AllTastes}
            options={({ navigation }) => ({
              title: "Greate tastes here",
              headerRight: () => (
                <HeaderButton
                  color="white"
                  size={24}
                  icon="add"
                  onPress={() => navigation.navigate("AddTastes")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddTastes"
            component={AddTastes}
            options={{
              title: "Add a new Taste",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
