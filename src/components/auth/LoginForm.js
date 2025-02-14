import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { user, userDetails } from "../../utils/userDB.js";
import useAuth from "../../hooks/useAuth.js";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const formik = useFormik({
    validateOnChange: false,
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    onSubmit: (formValue) => {
      const { username, password } = formValue;
      setError("");
      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña son incorrectos");
      } else {
        login(userDetails);
        console.log("Usuario autenticado");
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder="Escriba su nombre de usuario"
        autoCapitalize="none"
        style={styles.input}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Escriba su contraseña"
        autoCapitalize="none"
        secureTextEntry={true}
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
  };
}
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
export default LoginForm;
