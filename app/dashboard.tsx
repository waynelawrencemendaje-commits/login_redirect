import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { email, isLoggedIn } = useLocalSearchParams();

  useEffect(() => {
    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <View style={{ backgroundColor: "#fff", padding: 20, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>
        <Text style={{ fontSize: 14, color: "#666", marginTop: 5 }}>Welcome, {email}</Text>
      </View>

      {/* Content */}
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/profile", params: { email } })}
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#eee",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>View Profile</Text>
          <Text style={{ fontSize: 14, color: "#666", marginTop: 5 }}>Check your personal information</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/login")}
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ff3b30",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#ff3b30" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}