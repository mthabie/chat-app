import React from 'react';
import { StyleSheet} from 'react-native';
import { useFormikContext } from 'formik';

import { AppTextInput} from '..';
import { ErrorMessage } from '.';

export default function AppFormField({name, width, ...otherProps}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput 
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}

const styles = StyleSheet.create({})
