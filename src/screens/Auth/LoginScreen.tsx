import React, { useRef } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './../../types/NavigationTypes'; 
import * as Yup from 'yup';
import { colors } from '../../config/colors';
import TextInputIcon from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import { useFormik } from 'formik';

type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

interface FormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
});

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const passwordRef = useRef<TextInput>(null);

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.log('nnnn')
      navigation.navigate('Dashboard')
    }
  });

  
  const focusInput = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.title}>Log in with your Roompot account</Text>
      <View style={styles.fieldContainer}>
        <TextInputIcon
          icon='mail'
          placeholder='Enter your email'
          onChangeText={handleChange('email')}
          autoCapitalize='none'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={focusInput}
        />
      </View>
      <View style={styles.fieldContainer}>
        <TextInputIcon
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          error={errors.password}
          touched={touched.password}
        />
      </View>
      <Button title='Login' style={styles.loginBtn} onPress={() => handleSubmit()} />
      <TouchableOpacity style={styles.linkContainer} onPress={() => console.log('Navigate to Sign Up')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.background,
  } as ViewStyle,
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'left',
    color: colors.text,
  } as TextStyle,
  fieldContainer: {
    marginBottom: 16,
    width: '100%'
  } as ViewStyle,
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  } as ViewStyle,
  linkText: {
    color: colors.primary,
  } as TextStyle,
  loginBtn: {
    backgroundColor: '#f16d22', 
    paddingVertical: 5,
    height: 50,
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default LoginScreen;
