/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      todos: [1, 2, 3, 4],
      newTodo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  handlePress() {}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          onChange={this.handleChange}
          name="newTodo"
        />
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Tap Me</Text>
        </TouchableHighlight>
        {this.state.todos.map(todo => (
          <Text key={`todo-${todo}`}>{todo}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
