import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi aplicación</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Botón 1</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Botón 2</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Botón 3</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Botón 4</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  button: {
    width: "80%",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#333",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});