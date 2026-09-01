
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>TALLER DE APPS</Text>

      <Link href="/fibonacci">
        <Button title="Fibonacci" />
      </Link>

      <Link href="/factorial">
        <Button title="Factorial" />
      </Link>

      <Link href="/tablas">
        <Button title="Tablas" />
      </Link>

      <Link href="/notasCantidad">
        <Button title="Notas - Cantidad" />
      </Link>

      <Link href="/notasIngreso">
        <Button title="Notas - Promedio" />
      </Link>

      <Link href="/formulario">
        <Button title="Formulario" />
      </Link>
    </View>
  );
}

