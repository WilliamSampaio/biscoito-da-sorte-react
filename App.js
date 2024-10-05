import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quebrado: false,
      img: require('./assets/biscoito.png'),
      frase: ''
    }

    this.frases = [
      'Comece onde você está, use o que você tem e faça o que você pode.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.',
      'Não importa que você vá devagar, contanto que você não pare.',
      'A inspiração existe, porém temos que encontrá-la trabalhando.',
      'Coragem é saber o que não temer.',
      'Conhecer a si mesmo é o começo de toda sabedoria.',
      'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.',
      'Acredite em milagres, mas não dependa deles.',
      'Não é a carga que o derruba, mas a maneira como você a carrega.'
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.frase}>{this.state.frase}</Text>
        <TouchableOpacity onPress={() => {
          if (!this.state.quebrado) {
            this.setState({
              frase: ' "' + this.frases[Math.floor(Math.random() * this.frases.length)] + '" ',
              img: require('./assets/biscoitoAberto.png'),
              quebrado: !this.state.quebrado
            })
          }
        }}>
          <Image
            source={this.state.img}
            style={styles.img}
          />
        </TouchableOpacity>
        {this.state.quebrado && <TouchableOpacity style={styles.btnReset} onPress={() => {
          this.setState({
            frase: '',
            img: require('./assets/biscoito.png'),
            quebrado: !this.state.quebrado
          })
        }}>
          <Text style={styles.btnResetLabel}>Resetar</Text>
        </TouchableOpacity>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200
  },
  frase: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#ff8b2b',
    textAlign: 'center',
    padding: 10
  },
  btnReset: {
    width: 150,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#ff8b2b',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  btnResetLabel: {
    color: '#ff8b2b',
    fontWeight: 'bold'
  }
});

export default App;