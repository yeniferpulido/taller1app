import {StyleSheet, View} from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <View style={[style.content]}>
      <Stack>
        <Stack.Screen name="perfil" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
};

const style = StyleSheet.create({
  titulo: {
    color: "#106b8f",
    fontSize: 32,
    marginBottom: 32,
    backgroundColor: "#bce3ee",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#b5cddb",
  },
});
export default RootLayout;


