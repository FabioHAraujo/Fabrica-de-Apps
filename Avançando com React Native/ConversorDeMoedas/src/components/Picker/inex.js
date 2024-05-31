import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

export default function Picker(){
  const placeholder ={
    label: 'Selecione uma moeda...'
  }

  return(
    <RNPickerSelect 
      items={[
        {key: '1', label: 'USD', value: 'USD'},
        {key: '2', label: 'EUR', value: 'EUR'},
      ]}
      onValueChange={(valor) => console.log(valor)}
      placeholder={placeholder}
      style={{
        inputAndroid:{
          fontSize: 20,
          color: '#000'
        },
        inputIOS:{
          fontSize: 20,
          color: '#000'
        }
      }}
    />
  )
}