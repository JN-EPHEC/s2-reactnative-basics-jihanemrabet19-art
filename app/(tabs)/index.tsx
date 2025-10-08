import ProfileCard from "@/components/ProfileCard";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (

    <ScrollView>
    <ProfileCard
name="Aya"
jobTitle="Product Owner"
imageUrl="https://picsum.photos/200/300"
/>
<ProfileCard
name="Louis"
jobTitle="le toxico"
imageUrl="https://picsum.photos/200/300"
/>
<ProfileCard
name="jiji"
jobTitle="La plus belle"
imageUrl="https://picsum.photos/200/300"
/>
</ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
