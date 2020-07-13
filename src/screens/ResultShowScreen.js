import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");
  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  imageStyle: {
    width: win.width,
    height: 300,
    alignContent: "stretch",
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default ResultShowScreen;
