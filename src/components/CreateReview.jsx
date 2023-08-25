import { Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from 'yup';
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import useCreateReview from "../hooks/useCreateReview";

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 15,
    backgroundColor: "#ffffff",
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
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Rating must be greater or equal to 0')
    .max(100, 'Rating must be less than or equal to 100')
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText
        }>Create a review</Text>
      </Pressable>
    </View>
  )
};

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await createReview({ ownerName, repositoryName, rating: Number(rating), text });
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer onSubmit={onSubmit} />
  )
};


export default CreateReview;
