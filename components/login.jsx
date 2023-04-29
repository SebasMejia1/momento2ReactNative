import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../assets/styles/globals";
import { useEffect, useState } from "react";

let users;

export default function Login({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
      users = route.params;
    }
  }, [route.params?.post]);

  const [loggin, setLoggin] = useState(true);

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
    const { user, password } = dataForm;
    if (user == user) {
      navigation.navigate("Home");
      setLoggin(true);
    } else {
      setLoggin(false);
    }
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
        name="user"
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
      {errors.user?.type == "required" && (
        <Text style={{ color: "red" }}>
          Error, el dato usuario es requerido
        </Text>
      )}
      {errors.password?.type == "required" && (
        <Text style={{ color: "red" }}>Error, el dato nombre es requerido</Text>
      )}
      {errors.user?.type == "pattern" && (
        <Text style={{ color: "red" }}>El usuario solo puede ser letras</Text>
      )}
      {errors.password?.type == "pattern" && (
        <Text style={{ color: "red" }}>La contraseña debe ser solo letras</Text>
      )}
      <Text style={{ display: loggin ? "none" : "block", color: "red" }}>
        Usuario y/o contraseña incorrecto
      </Text>
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
          navigation.navigate("Register");
        }}
      >
        ¿No tienes cuenta? Regístrate
      </i>
    </View>
  );
}
