import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import estilosLogin from "../Login/LoginStyles";
import { auth } from "../firebase/connection";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ route }) => {
  const navigation = useNavigation();
  const { email: preFilledEmail } = route.params;
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
  });

  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState(preFilledEmail);
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (nome && cep && email && senha) {
      try {
        await createUserWithEmailAndPassword(auth, email, senha);
        // Após o cadastro, você pode salvar informações adicionais do usuário no Firestore.
        alert('Usuário cadastrado com sucesso!');
        navigation.navigate('Login');
      } catch (error) {
        alert('Erro ao cadastrar. Por favor, tente novamente.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={estilosLogin.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../../assets/background.png")}
        style={estilosLogin.background}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          style={estilosLogin.gradient}
        />
        <LinearGradient
          colors={["#000", "transparent"]}
          style={estilosLogin.gradientTop}
        />
        <View style={estilosLogin.logoContainer}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="recycle" size={24} color="#229954" />
            <Text style={[estilosLogin.logoTitle, estilosLogin.logoText]}>EcoReturn</Text>
          </View>
          <Text style={[estilosLogin.logoSubtitle, estilosLogin.logoText]}>RECICLANDO</Text>
          <Text style={[estilosLogin.logoSubtitle, estilosLogin.logoText]}>O FUTURO</Text>
        </View>
        <View style={estilosLogin.loginContainer}>
          <View style={{width: '100%'}}>
            <Text style={[estilosLogin.acessText, estilosLogin.logoText]}>Cadastre-se</Text>
          </View>
          <Text style={estilosLogin.textLogin}>Preencha os dados para criar sua conta</Text>
          <View style={estilosLogin.inputContainer}>
            <FontAwesome name="font" size={20} color="#ccc" style={estilosLogin.inputIcon} />
            <TextInput
              style={estilosLogin.input}
              placeholder="Insira seu Nome"
              placeholderTextColor="#A4A4A4"
              onChangeText={text => setNome(text)}
              value={nome}
              keyboardType="email-address"
            />
          </View>
          <TextInput
            style={estilosLogin.input}
            placeholder="CEP"
            placeholderTextColor="#A4A4A4"
            onChangeText={text => setCep(text)}
            value={cep}
          />
          <TextInput
            style={estilosLogin.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#A4A4A4"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={estilosLogin.input}
            placeholder="Senha"
            placeholderTextColor="#A4A4A4"
            secureTextEntry
            onChangeText={text => setSenha(text)}
            value={senha}
          />
          <TextInput
            style={estilosLogin.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#A4A4A4"
            secureTextEntry
            onChangeText={text => setConfirmarSenha(text)}
            value={confirmarSenha}
          />
          <TouchableOpacity style={estilosLogin.button} onPress={handleRegister}>
            <LinearGradient
              colors={["#501794", "#3E70A1"]}
              style={estilosLogin.gradientBotao}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={estilosLogin.buttonText}>Cadastrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
