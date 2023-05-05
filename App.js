import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login";
import Register from "./components/Register";
import CreateCar from "./components/cars";
import ListOfCars from "./components/listOfCars";
import RentCar from "./components/rentCar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
          name="RentCar"
          component={RentCar}
          options={{ title: "Renta un carro" }}
        ></Stack.Screen>
        <Stack.Screen
          name="CreateCar"
          component={CreateCar}
          options={{ title: "Crear un carro en venta" }}
        ></Stack.Screen>
        <Stack.Screen
          name="listOfCars"
          component={ListOfCars}
          options={{ title: "Lista de carros en venta" }}
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
