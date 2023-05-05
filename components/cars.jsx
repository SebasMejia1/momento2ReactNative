import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../assets/styles/globals";
import { useState } from "react";
let cars = [];
export default function CreateCar({ navigation, route }) {
  let users = route.params
  const [existente, setExistente] = useState();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      platenumber: "",
      brand: "",
    },
  });

  const onSubmit = (dataForm) => {
    const { platenumber, brand } = dataForm;
    const carroExistente = cars.find((car) => car.platenumber == platenumber);
    if (carroExistente) {
      setExistente(true);
      return;
    } else {
      setExistente(false);
      cars.push({
        platenumber: platenumber,
        brand: brand,
        state: true,
      });
      console.log(cars);
      reset();
    }
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de placa"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name="platenumber"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-z]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Marca del carro"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name="brand"
      />
      {errors.platenumber?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato numero de renta es requerido
        </Text>
      )}
      {errors.platenumber?.type == "pattern" && (
        <Text style={{ color: "red" }}>
          El numero de renta solo puede ser numeros
        </Text>
      )}
      {errors.brand?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato usuario es requerido
        </Text>
      )}
      {errors.brand?.type == "pattern" && (
        <Text style={{ color: "red" }}>El usuario solo puede ser letras</Text>
      )}
      <Text style={{ display: existente ? "block" : "none", color: "red" }}>
        Número de placa en venta, pruebe usar otro
      </Text>
      <Button
        icon="car"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ margin: "25px", width: "200px" }}
      >
        Crear
      </Button>
      <i
        onClick={() => {
          navigation.navigate("listOfCars", {cars,users});
        }}
      >
        Ver todos los autos en venta
      </i>
    </View>
  );
}
