import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api";

export default function TabTwoScreen() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["users", 21],
    queryFn: fetchUsers,
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="finger-print" style={styles.headerImage} />
      }
    >
      <ThemedView variant="title">
        <ThemedText type="title">Users</ThemedText>
      </ThemedView>

      {isError && <ThemedText>{error.message}</ThemedText>}

      {isPending && <ThemedText>Loading...</ThemedText>}

      {data?.map((v) => (
        <ThemedView variant="section" key={v.id}>
          <ThemedText type="defaultSemiBold">{v.name}</ThemedText>
          <ThemedText>Username: {v.username}</ThemedText>
          <ThemedText>Email: {v.email}</ThemedText>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    top: "10%",
    left: -80,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});
