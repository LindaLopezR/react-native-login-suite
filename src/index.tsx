/**
 * @class LoginView
 */

import * as React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';

import styles from './styles.js';

export default class LoginView extends React.Component<Props> {
  render() {
    const {
      logoImg,
      checkBoxLabel,
      statusCheck,
      holderCompany,
      holderUsername,
      holderPasword,
      holderLogin,
      version,
    } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollStyle}
          enableOnAndroid={true}
        >
          <View style={styles.logoContent}>
            <Image style={styles.logo} source={logoImg} />
          </View>
          <Text style={styles.subtitle}>Discipline, we make happen.</Text>

          <View style={styles.flexForm}>
            <CheckBox
              style={styles.checkboxStyle}
              onClick={() => statusCheck()}
              isChecked={this.props.selectCompany}
              leftText={checkBoxLabel}
            />

            {this.props.selectCompany && (
              <TextInput
                style={styles.input}
                placeholder={holderCompany}
                underlineColorAndroid="transparent"
                multiline={false}
                onChangeText={(text) => this.props.changeCompany(text)}
                value={this.props.companyStatus}
              />
            )}

            <TextInput
              style={styles.input}
              placeholder={holderUsername}
              underlineColorAndroid="transparent"
              multiline={false}
              onChangeText={(text) => this.props.changeUsername(text)}
              value={this.props.nameStatus}
            />
            <TextInput
              style={styles.input}
              placeholder={holderPasword}
              underlineColorAndroid="transparent"
              multiline={false}
              secureTextEntry
              onChangeText={(text) => this.props.changePassword(text)}
              value={this.props.passwordStatus}
            />
            <View style={styles.buttonStart}>
              <Button
                onPress={this.props.sendLogin}
                title={holderLogin}
                color="#003D52"
                textAlign="center"
              />
            </View>
          </View>

          <Text style={styles.footer}>{version}</Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
