import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function IngresarNotas() {
  const { cantidad } = useLocalSearchParams();
  const numeroNotas = Number(cantidad);
  const [notas, setNotas] = useState(
    Array(numeroNotas).fill('')
  );

  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  const calcular = () => {
    let suma = 0;
    for (let i = 0; i < numeroNotas; i++) {
      
      if (notas[i] === '') {
        setError('Debes ingresar todas las notas');
        return;
      }

      // Convertimos la nota de texto a número
      let nota = Number(notas[i]);

      if (nota < 0 || nota > 5) {
        setError('La nota debe estar entre 0 y 5');
        return;
      }

      suma = suma + nota;
    }

    let promedio = suma / numeroNotas;

    setError('');
    setResultado('El promedio es: ' + promedio.toFixed(2));
  };

 const cambiarNota = (texto: string, index: number) => {

  
  if (texto === '') {
    notas[index] = '';
    setNotas([...notas]);
    return;
  }

  // Solo permite números y decimales
  if (!/^[0-9]+(\.[0-9]*)?$/.test(texto)) {
    return;
  }

  // Actualiza la nota
  notas[index] = texto;
  setNotas([...notas]);
};

  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>Ingresar Notas</Text>

      <Text>Ingresa las {numeroNotas} notas:</Text>

      {notas.map((nota, index) => (

        <TextInput
          key={index}
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder={'Nota ' + (index + 1)}
          value={nota}
          onChangeText={(texto) => cambiarNota(texto, index)}
        />

      ))}

      <Text style={styles.error}>
        {error}
      </Text>

      <Button
        title="CALCULAR PROMEDIO"
        color="#9B8EC4"
        onPress={calcular}
      />

      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E1F5',
    padding: 20,
  },

  titulo: {
    color: '#7669A8',
    fontSize: 32,
    marginBottom: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#D5CCE8',
    width: 200,
    height: 50,
    borderRadius: 12,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
  },

  error: {
    color: '#D88C9A',
    marginTop: 10,
    marginBottom: 10,
  },

  resultado: {
    color: '#7669A8',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
  },

});