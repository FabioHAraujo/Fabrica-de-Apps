import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/connection';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      fetchResults();
    } else {
      setResults([]);
      setDropdownVisible(false);
    }
  }, [search]);

  const fetchResults = async () => {
    setLoading(true);

    const q = query(
      collection(db, 'items'),
      where('keywords', 'array-contains', search.toLowerCase())
    );

    try {
      const querySnapshot = await getDocs(q);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setResults(items.slice(0, 4)); // Limita a 4 resultados
      setDropdownVisible(true);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../../assets/backPesquisa.jpg")}
        style={styles.background}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          style={styles.gradient}
        />
        <LinearGradient
          colors={["#000", "transparent"]}
          style={styles.gradientTop}
        />
        <View style={styles.containerPesquisa}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar..."
            placeholderTextColor="#A4A4A4"
            value={search}
            onChangeText={text => setSearch(text)}
          />
          {loading && <ActivityIndicator size="large" color="#ffffff" />}
          {dropdownVisible && !loading && (
            <FlatList
              data={results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => console.log(item)}>
                  <Image source={{ uri: item.imagem }} style={styles.itemImage} />
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemName}>{item.nome}</Text>
                    <Text style={styles.itemDescription}>{item.descricao}</Text>
                  </View>
                </TouchableOpacity>
              )}
              style={styles.dropdown}
            />
          )}
        </View>
        <Text style={styles.homeText}>Home Screen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "80%",
  },
  gradientTop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "20%",
  },
  containerPesquisa: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: '85%',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  dropdown: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: -10,
    zIndex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemName: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDescription: {
    color: '#000',
    fontSize: 12,
  },
  homeText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;