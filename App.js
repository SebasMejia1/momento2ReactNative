import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/login";
import Register from "./components/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const car = [{ plateNumber: "1" }, { brand: "mazda" }, { state: true }];
// const rent = [
//   { rentNumber: "1" },
//   { username: user.username },
//   { plateNumber: car.plateNumber },
//   { rentDate: Date.now },
// ];
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "Login" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
