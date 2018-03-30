import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FolderList extends React.Component {
  render() {
    return (
      <View sytle={styles.folderList}>
        <View style={styles.folderListItem}>
          <Text style={styles.folderTitle}>Verb1</Text>
        </View>

        <View style={styles.folderListItem}>
          <Text style={styles.folderTitle}>Verb1</Text>
        </View>

        <View style={styles.folderListItem}>
          <Text style={styles.folderTitle}>Verb1</Text>
        </View>

        <View style={styles.folderListItem}>
          <Text style={styles.folderTitle}>Verb1</Text>
        </View>

        <View style={styles.folderListItem}>
          <Text style={styles.folderTitle}>Verb1</Text>
        </View>
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
