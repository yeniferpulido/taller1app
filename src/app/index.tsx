
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
        <Button
          title="Factorial"
          onPress={() => router.push("/factorial")}
        />
        <Button
          title="Fibonacci"
          onPress={() => router.push("/fibonacci")}
        />
        <Button
          title="Tablas de multiplicar"
          onPress={() => router.push("/tablas")}
        />
        <Button
          title="Notas"
          onPress={() => router.push("/notas")}
        />
        <Button
          title="Formulario de Información"
          onPress={() => router.push("/formulario")}
        />
    </View>
  )}
export default Home;