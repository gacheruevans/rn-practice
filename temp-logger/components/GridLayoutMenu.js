'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class GridLayoutMenu extends Component {
  constructor() {
    super();

    const list = {
      data : [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }
      ]
    }

    this.state = {
      dataSource: list.data,
    };
  }
      
  render () {
    return (
      <List style={styles.list}>
        {
          this.state.dataSource.map((item, index) => (
            <ListItem
              style={styles.row}
              roundAvatar
              avatar={{uri:item.avatar_url}}
              key={item.name}
              title={item.name}
            />
          ))
        }
      </List>
    )
  }
}

var styles = StyleSheet.create({
   list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});
