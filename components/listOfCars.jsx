import { styles } from "../assets/styles/globals";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
function ListOfCars({ cars, users, navigation }) {
  const rentCarInfo = {};
  const handlePress = (item) => {
    console.log(`El elemento con placa ${item.platenumber} fue presionado!`);
    rentCarInfo.platenumber = item.platenumber;
    rentCarInfo.brand = item.brand;
    rentCarInfo.state = item.state;
    console.log(cars, users);
    navigation.navigate("RentCar", { rentCarInfo, users });
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Placa: {" " + item.platenumber}</Text>
          <Text style={styles.itemTitle}>Marca:{" " + item.brand}</Text>
          <Text style={styles.itemTitle}>
            {item.state ? " Disponible ✅" : " No disponible ❌"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  console.log(cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.platenumber}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  );
}

function HasNoCars() {
  return (
    <View style={styles.container}>
      <Text>Sin autos en venta</Text>
    </View>
  );
}

export default function Cars({ route, navigation }) {
  const cars = route.params.cars;
  const users = route.params.users;
  return cars != 0 ? (
    <ListOfCars cars={cars} users={users} navigation={navigation}></ListOfCars>
  ) : (
    <HasNoCars></HasNoCars>
  );
}
