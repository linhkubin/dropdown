import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

class tes1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ' first value'
    };
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _test(province) {

  this.setState({
      ...this.state,
      test: province
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',height: 50}}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select ..."
            onSelect={this._test.bind(this)}>
            <Option>a</Option>
            <Option>b</Option>
            <Option>c</Option>
            <Option>d</Option>
            <Option>e</Option>
            <Option>f</Option>
            <Option>g</Option>
            <Option>h</Option>
            <Option>i</Option>

          </Select>

          <Text>Selected : {this.state.test}</Text>

          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}



AppRegistry.registerComponent('tes1', () => tes1);