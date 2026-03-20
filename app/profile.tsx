import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={{ 
        flexDirection: "row", 
        alignItems: "center", 
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>←</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile</Text>
      </View>

      {/* Content */}
      <View style={{ padding: 20 }}>
        <View style={{ 
          alignItems: "center", 
          marginBottom: 30,
        }}>
          <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: "#007AFF",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}>
            <Text style={{ fontSize: 32, color: "#fff" }}>
              {email?.toString().charAt(0).toUpperCase() || "U"}
            </Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{email}</Text>
          <Text style={{ fontSize: 14, color: "#4CAF50", marginTop: 5 }}>Active</Text>
        </View>

        <View style={{
          backgroundColor: "#f8f8f8",
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}>
          <Text style={{ fontSize: 14, color: "#666" }}>Email</Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>{email || "Not provided"}</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: "#007AFF",
            padding: 15,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}