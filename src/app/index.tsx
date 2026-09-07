import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Menú Principal</Text>

      <View style={styles.boton}>
        <Button
          title="Factorial"
          onPress={() => router.push("/factorial")}
          color="#4F7CAC"
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Fibonacci"
          onPress={() => router.push("/fibonacci")}
          color="#4F7CAC"
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Tablas de multiplicar"
          onPress={() => router.push("/tablas")}
          color="#4F7CAC"
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Notas"
          onPress={() => router.push("/notas/cantnotas")}
          color="#4F7CAC"
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Formulario de Información"
          onPress={() => router.push("/formulario")}
          color="#4F7CAC"
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F1F8",
    padding: 25,
  },

  titulo: {
    color: "#315A7D",
    fontSize: 32,
    marginBottom: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  boton: {
    width: 250,
    marginVertical: 8,
    borderRadius: 14,
    overflow: "hidden",
  },
});

export default Home;