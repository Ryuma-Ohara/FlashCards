import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardList from '../components/CardList';
import CircleButton from '../elements/CircleButton';

class CardListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList navigation={this.props.navigation} />
        <CircleButton>
          { '\uf067'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});

export default CardListScreen;
