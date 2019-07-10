import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { Video } from 'expo-av';

class PlaylistItem {
  constructor(key, name, uri, isVideo) {
    this.key = key;
    this.name = name;
    this.uri = uri;
  }
}

const PLAYLIST = [
  new PlaylistItem(
    '0',
    'Big Buck Bunny',
    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  ),
  new PlaylistItem(
    '1',
    "Popeye - I don't scare",
    'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
  ),
  new PlaylistItem(
    '2',
    'Big Buck Bunny',
    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  ),
  new PlaylistItem(
    '3',
    "Popeye - I don't scare",
    'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
  ),
  new PlaylistItem(
    '5',
    'Big Buck Bunny',
    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  ),
  new PlaylistItem(
    '6',
    "Popeye - I don't scare",
    'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
  ),
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {
      source: {
        uri: PLAYLIST[0].uri
      }
    };
  }
  
  _onPressButton = (item) => {
    console.log('[_onPressButton]');
    this.setState((state, props) => {
      return { source: { uri: item.uri }};
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          isLoaded
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping      
          source={this.state.source}
          style={ styles.video }
        />
        <FlatList
          data={ PLAYLIST }
          renderItem={ ({item}) =>
            <View key={ item.key }>
              <TouchableOpacity
                onPress={ () => this._onPressButton(item)}
              >
                <Text style={styles.item}>
                  {item.name}
                </Text>
                
              </TouchableOpacity>
            </View>
          }
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  video: {
    width: 300,
    height: 300,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
