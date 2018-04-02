import React from 'react';
import { StyleSheet, View } from 'react-native';
import FolderList from '../components/FolderList';
import CircleButton from '../elements/CircleButton';

class FolderListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FolderList navigation={this.props.navigation} />
        <CircleButton onPress={() => { this.props.navigation.navigate('FolderRegistration'); }}>
          { '\uf067' }
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

export default FolderListScreen;
