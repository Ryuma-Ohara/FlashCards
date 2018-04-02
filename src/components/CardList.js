import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class CardList extends React.Component {
  render() {
    return (
      <View sytle={styles.cardList}>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('CardRegistration'); }}>
          <View style={styles.cardListItem}>
            <Text style={styles.cardTitle}>Front / Back</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('CardRegistration'); }}>
          <View style={styles.cardListItem}>
            <Text style={styles.cardTitle}>Front / Back</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('CardRegistration'); }}>
          <View style={styles.cardListItem}>
            <Text style={styles.cardTitle}>Front / Back</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardList: {
    width: '100%',
    flex: 1,
  },
  cardListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
});

export default CardList;
