import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CantNotas() {

  const [cantidad, setCantidad] = useState('');
  const [error, setError] = useState('');

  const continuar = () => {

    if (cantidad === '') {
      setError('Debes ingresar una cantidad');
      return;
    }

    const numero = Number(cantidad);

    if (!Number.isInteger(numero)) {
      setError('Debes ingresar un número entero');
      return;
    }

    if (numero < 1) {
      setError('La cantidad debe ser mayor a 0');
      return;
    }

    if (numero > 20) {
      setError('No puedes ingresar más de 20 notas');
      return;
    }

    setError('');

    //Cuando le da click y esta todo bien va a la otra pantalla
    router.push({
      pathname: '/notas/ingresarnotas',
      params: { cantidad: numero }   //se envia la cantidad de notas a la otra pantalla
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Promedio de Notas</Text>

      <Text>¿Cuántas notas quieres ingresar?</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cantidad}
        onChangeText={setCantidad}
      />

      <Text style={styles.error}>
        {error}
      </Text>

      <Button
        title="Continuar"
        color="#9B8EC4"
        onPress={continuar}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E1F5',
    padding: 20,
  },

  titulo: {
    color: '#7669A8',
    fontSize: 32,
    marginBottom: 32,
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
    marginVertical: 15,
  },

  error: {
    color: '#D88C9A',
    marginBottom: 10,
  },
});