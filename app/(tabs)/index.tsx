import { ThemedText } from "@/components/ThemedText";
import TodoItem from "@/components/TodoItem";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.mainView}>
     <ThemedText type='title' style={styles.title}>My Todo List</ThemedText>
     <TodoItem text="Aller dormir" />
     <TodoItem text="Dejeuner" />
     <TodoItem text="Aller à l'école" />
     <TodoItem text="Apprendre react native" />
    </View>

  );
}

const styles = StyleSheet.create({

  mainView: {
    padding: 20
  },

  title : {
      textAlign: "center",
      marginBottom: 20
  }
});
