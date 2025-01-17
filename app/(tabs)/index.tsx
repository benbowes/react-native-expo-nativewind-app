import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/api";

export default function HomeScreen() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isError) {
    return <ThemedText>{error.message}</ThemedText>;
  }

  if (isPending) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <MaterialCommunityIcons
          name="post-outline"
          size={310}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView variant="title">
        <ThemedText type="title">Posts</ThemedText>
      </ThemedView>

      {data.map((v) => (
        <ThemedView variant="section" key={v.id}>
          <ThemedText type="defaultSemiBold">{v.title}</ThemedText>
          <ThemedText>{v.body}</ThemedText>
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
