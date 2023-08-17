import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 15,
    backgroundColor: theme.colors.secondaryBackground,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText
        }>Sign In</Text>
      </Pressable>
    </View>
  )
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;
