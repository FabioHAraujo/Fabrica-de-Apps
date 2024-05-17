import React, { useState } from 'react';
import { View, StatusBar, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function Index(){
  const [frase, setFrase] = useState('')
  const [img, setImg] = useState(require('./images/biscoito.png'));
  const [estado, setEstado] = useState(false)

  let frases = [
    '"É hora de parar de pensar nos erros do passado e pensar nos erros do futuro."',
    '"A vida é como mosquito da dengue... É preciso ter foco."',
    '"Não deixe para amanhã o que você pode nem fazer."',
    '"Em caminho de paca... Tatu caminha dentro."',
    '"Em briga de saci, qualquer chute é voadora."',
    '"Se ferradura desse sorte, burro não puxava carroça."',
    '"Quem cedo madruga, passa o dia com sono."',
    '"O sucesso é como um jogo de videogame: exige habilidade, paciência e, às vezes, até cheat codes."',
    '"Assim como um controle remoto, o destino está sempre nas mãos, mas às vezes é preciso trocar as pilhas para mudar o canal da vida."',
    '"Ser adulto é como jogar Mario Kart: você nunca está realmente preparado para as cascas de banana que a vida joga no seu caminho."',
    '"A dieta é como um jogo de esconde-esconde: você tenta se esconder dos doces, mas eles sempre acabam te encontrando."',
    '"Ser preguiçoso é como ter superpoderes: você pode mover montanhas, desde que elas não exijam muito esforço."',
    '"Relacionamentos são como uma padaria, precisa da fórmula certa, paciência, e estar preparado para queimar a rosca."',
    '"O verdadeiro caminho do sábio, é o mais curto."',
    '"Muito custa aquilo que é muito caro."',
    '"Lembre-se, mesmo no seu pior dia, tudo ainda pode piorar."',
    '"Rico é aquele que tem dinheiro."',
    '"Toda criança deseja ser adulto para poder comprar o jogo que quiser, e todo adulto quer ser criança para poder jogá-los."',
    '"Toda pessoa de bem, deve odiar vídeos com parte dois, pois são esses que"',
    '"Gente teimosa é como biscoito da sorte, não tem sabor, não tem cheiro, é difícil, mas se você tiver um martelo..."'
  ]
  
  function quebrarBiscoito(){
    let aleatorio = Math.floor(Math.random() * frases.length)
  
    setFrase(frases[aleatorio])
    setImg(require('./images/biscoitoAberto.png'))
    setEstado(true)
  }

  function resetBiscoito(){
    setFrase('')
    setImg(require('./images/biscoito.png'))
  }
  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <View style={styles.biscoitoContainer}><Image style={styles.biscoito} source={img}/></View>
      <View style={styles.textoContainer}>
        <Text style={styles.textoFrase}>{frase}</Text>
      </View>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botaoAbre} onPress={()=>quebrarBiscoito()}>
          <Text style={styles.textoBotaoAbre}>Quebrar Biscoito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoReset} onPress={()=>resetBiscoito()}>
          <Text style={styles.textoBotaoReset}>Reset Biscoito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'column'
  },
  biscoitoContainer:{
    flex: 4,
    justifyContent: 'flex-end'
  },
  textoContainer:{
    flex: 2,
    justifyContent: 'center'
  },
  botoesContainer:{
    flex: 2
  },
  botaoAbre:{
    borderColor: '#dd7b22',
    width: 230,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5
  },
  botaoReset:{
    borderColor: '#000',
    width: 230,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5
  },
  textoBotaoAbre:{
    fontSize: 22,
    color: '#dd7b22'
  },
  textoBotaoReset:{
    fontSize: 22,
    color: '#000'
  },
  biscoito:{
    width:300,
    height:300
  },
  textoFrase:{
    fontSize: 22,
    color: '#dd7b22',
    margin: 3
  }
  
})

export default Index;
