import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/components/dashboard/dashboard";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Dashboard />
    </PaperProvider>
  );
}
