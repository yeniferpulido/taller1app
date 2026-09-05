import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    let num = Number(numero);
    let tabla = '';

    for (let i = 1; i <= 10; i++) {
      tabla = tabla + i + ' x ' + num + ' = ' + (i * num) + '\n';
    }

    setResultado(tabla);
  };

  return (
    <View style={styles.container}>
      <Text>Ingresa el número de la tabla:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <Button title="Generar Tabla" onPress={calcular} />

      <Text style={styles.resultado}>{resultado}</Text>
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
    padding: 8,
  },
  resultado: {
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
  },
});