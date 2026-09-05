import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {

  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {

    let cantidad = Number(numero);

    let a = 0;
    let b = 1;
    let serie = '';

    for (let i = 0; i < cantidad; i++) {

      serie = serie + a + ', ';

      let siguiente = a + b;
      a = b;
      b = siguiente;
    }

    setResultado(serie);
  };

  return (
    <View style={styles.container}>

      <Text>¿Cuántos números quieres?</Text>

      <TextInput
  style={styles.input}
  keyboardType="numeric"
  value={numero}
  onChangeText={setNumero}
  selectionColor="#000000" // Cambia esto al color que quieras para el cursor (ej. negro)

      />

      <Button
        title="Generar Fibonacci"
        onPress={calcular}
      />

      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    width: 200,
    margin: 10,
  },

  resultado: {
    fontSize: 20,
    margin: 20,
  },

});

