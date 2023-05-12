import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../assets/styles/globals";
import { useState } from "react";
const users = [
  { username: "sebas", name: "Sebastian Mejia Sanchez", password: "12345" },
];
export default function Register({ navigation }) {
  const [existente, setExistente] = useState();
  const [texto, setTexto] = useState();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = (dataForm) => {
    const { username, name, password } = dataForm;
    const usuarioExistente = users.find((u) => u.username == username);
    if (usuarioExistente) {
      console.log("usuario ya existe, pruebe registrarse");
      setTexto("usuario ya existe, pruebe registrarse, redirigiendo al login");
      setTimeout(() => {
        navigation.navigate("login", users);
      }, 3000);
      setExistente(true);
    } else {
      setExistente(false);
      setTexto("Usuario registrado con exito");
      reset();
      users.push({ username: username, name: name, password: password });
      console.log(username, name, password, users);
      navigation.navigate("login", users);
    }
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-z]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Usuario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name="username"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-z-0-9]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-z-0-9]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name="password"
      />
      {errors.username?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato usuario es requerido
        </Text>
      )}
      {errors.name?.type == "required" && (
        <Text style={{ color: "red" }}>Error, el dato nombre es requerido</Text>
      )}
      {errors.password?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato contraseña es requerido
        </Text>
      )}
      {errors.username?.type == "pattern" && (
        <Text style={{ color: "red" }}>El usuario solo puede ser letras</Text>
      )}
      {errors.name?.type == "pattern" && (
        <Text style={{ color: "red" }}>El nombre solo puede ser letras</Text>
      )}
      {errors.password?.type == "pattern" && (
        <Text style={{ color: "red" }}>La contraseña debe ser solo letras</Text>
      )}
      <Text style={{ display: existente ? "block" : "none" }}>{texto}</Text>
      <Button
        icon="account"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ margin: "25px", width: "200px" }}
      >
        Registrar
      </Button>
      <i
        onClick={() => {
          navigation.navigate("login");
        }}
      >
        ¿Ya tienes cuenta? Ingresa
      </i>
    </View>
  );
}
