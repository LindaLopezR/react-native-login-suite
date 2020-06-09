import { StyleSheet } from 'react-native';

let loginStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  scrollStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  subtitle: {
    padding: 12,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgb(8,69,96)',
  },
  logoContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 162,
    height: 95,
  },
  checkboxStyle: {
    padding: 10,
  },
  input: {
    margin: 12,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 15,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  buttonStart: {
    margin: 12,
  },
  footer: {
    padding: 12,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'rgb(8,69,96)',
  },
};

const styles = StyleSheet.create(loginStyles);

export default styles;
