import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 15,
    color: theme.colors.error,
  },
  container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    marginBottom: 15
  },
  errorContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.error,
    marginBottom: 5
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.errorContainer : styles.container}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
};

export default FormikTextInput;
