import * as React from 'react';
import LoginSuite from 'react-native-login-suite';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     companyShow: false,
  //     companyState: '',
  //     usernameState: '',
  //     passwordState: '',
  //   };
  // }
  render() {
    // const { companyShow, companyState, usernameState, passwordState } = this.state;

    return (
      <LoginSuite
        logoImg={require('../assets/logo-azul-igo.png')}
        checkBoxLabel="Usuario empresarial"
        holderCompany="Compañía"
        holderUsername="Usuario"
        holderPasword="Contraseña"
        holderLogin="Entrar"
        version="Versión 1.0"
        // showCompany={companyShow}
        // username={usernameState}
        // password={passwordState}
        // company={companyState}
        // toggleCompany={(companyShow) => this.setState({ companyShow })}
        // changeCompany={(companyState) => this.setState({ companyState })}
        // changeUsername={(usernameState) => this.setState({ usernameState })}
        // changePassword={(passwordState) => this.setState({ passwordState })}
        // handleLogin={() => console.log('Guardar!')}
      />
    );
  }
}
