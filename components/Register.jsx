import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../assets/styles/globals";
const users = [
  { username: "sebas", name: "Sebastian Mejia Sanchez", password: "12345" },
];
export default function Register({ navigation }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = (dataForm) => {
    const { user, name, password } = dataForm;
    users.push({ username: user, name: name, password: password });
    navigation.navigate("login", users);
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-zÑñáÁ]+$/g,
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
          pattern: /^[A-Za-zÑñáÁ]+$/g,
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
          pattern: /^[A-Za-zÑñáÁ]+$/g,
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
        <Text style={{ color: "red" }}>El usuario solo puede ser letras</Text>
      )}
      {errors.password?.type == "pattern" && (
        <Text style={{ color: "red" }}>La contraseña debe ser solo letras</Text>
      )}
      <Button
        icon="send"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ margin: "25px", width: "200px" }}
      >
        Enviar
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
