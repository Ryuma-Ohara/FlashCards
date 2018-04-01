import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class FolderList extends React.Component {
  render() {
    return (
      <View sytle={styles.folderList}>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('CardRegistration'); }}>
          <View style={styles.folderListItem}>
            <Text style={styles.folderTitle}>Verb1</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('FolderRegistration'); }}>
          <View style={styles.folderListItem}>
            <Text style={styles.folderTitle}>Verb1</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('FolderRegistration'); }}>
          <View style={styles.folderListItem}>
            <Text style={styles.folderTitle}>Verb1</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  folderList: {
    width: '100%',
    flex: 1,
  },
  folderListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  folderTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
});

export default FolderList;
