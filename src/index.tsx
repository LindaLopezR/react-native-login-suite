/**
 * @class LoginView
 */

import * as React from "react";
import { View, Text, TextInput, Button, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';

import styles from './styles.js';

export type Props = {
  version: string,
  logoImg: string
};

export default class LoginView extends React.Component<Props> {

  render() {
    const { logoImg, version } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollStyle} 
          enableOnAndroid={true}
        >
          <View style={styles.logoContent}>
            <Image
              style={styles.logo}
              source={logoImg}
            />
          </View>
          <Text style={styles.subtitle}>
            Discipline, we make happen.
          </Text>

          <View style={styles.flexForm}>
            <CheckBox
              style={{padding: 10}}
              onClick={ () => console.log('Click') }
              leftText='Usuario empresarial'
            />
            <TextInput
              style={styles.input}
              placeholder='Username'
              underlineColorAndroid= 'transparent'
              multiline = {false}
              onChangeText={(text) => console.log(text)}
              value=""
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              underlineColorAndroid= 'transparent'
              multiline = {false}
              secureTextEntry
              onChangeText={(text) => console.log(text)}
              value=""
            />
            <View style={styles.buttonStart}>
              <Button
                onPress={() => console.log('Click')}
                title='login'
                color='#003D52'
                textAlign='center'
              />
            </View>
          </View>

          <Text style={styles.footer}>
            {version} 
          </Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
