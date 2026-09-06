import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';

export default function Home() {

  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {

    if (numero.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa una cantidad.');
      return;
    }
    
    let cantidad = Number(numero);

    if (cantidad <= 0) {
      Alert.alert('Error', 'Ingresa una cantidad mayor que 0.');
      return;
    }

    if (isNaN(cantidad)) {
    Alert.alert('Error', 'Debes ingresar un número válido.');
    return;
    }

    let a = 0;
    let b = 1;
    let serie = '';

    for (let i = 0; i < cantidad; i++) {

      if (i < cantidad - 1) {
      serie = serie + a + ', ';
      } else {
      serie = serie + a;
}

      let siguiente = a + b;
      a = b;
      b = siguiente;
    }

    setResultado(serie);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Fibonacci</Text>
      <Text>¿Cuántos números quieres?</Text>

      <TextInput
  style={styles.input}
  keyboardType="numeric"
  value={numero}
  onChangeText={setNumero}
  selectionColor="#000000" // Cambia esto al color que quieras para el cursor (ej. negro)

      />

      <Button
        color={"#108b8f"}
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
        backgroundColor: '#d8f8ef',
        padding: 20,
        height: '100%',
    },

    titulo:{
        color: "#108f8f",
        fontSize: 32,
        marginBottom: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#abdbcd',
        width: 200,
        height: 50,
        borderRadius: 12,
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
    },

    resultado: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },

});

