import { Formik } from "formik";
import { Pressable, View, StyleSheet } from "react-native";
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";
import { useNavigate } from "react-router-native";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";
import Text from "./Text";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 15,
        backgroundColor: "#fff",
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
        .required('Username is required')
        .min(5, 'Username must be between 5 and 30 characters')
        .max(30, 'Username must be between 5 and 30 characters'),
    password: yup
        .string()
        .required('Password is required')
        .min(5, 'Password must be between 5 and 30 characters')
        .max(50, 'Password must be between 5 and 30 characters'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords do not match")
        .required('Password confirmation is required')
});

const SignUpForm = ({ onSubmit }) => {
    return(
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
            <FormikTextInput name="passwordConfirm" placeholder="Confirm Password" secureTextEntry={true} />
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    )
}

const SignUpContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values)} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({ username, password });
            await signIn({ username, password })
            navigate('/');
          } catch (e) {
            console.log(e);
          }
    };

    return(
        <SignUpContainer onSubmit={onSubmit} />
    )
};

export default SignUp;