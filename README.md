# react-native-login-suite

Login iGo&amp;Suite

## Installation

```sh
npm install react-native-login-suite
```

## Usage

```js
import LoginSuite from "react-native-login-suite";

// ...

<LoginSuite
  logoImg={require('../assets/image.png')}
  checkBoxLabel="Usuario empresarial"
  holderCompany="Compañía"
  holderUsername="Usuario"
  holderPasword="Contraseña"
  holderLogin="Entrar"
  version="Versión 1.0"
  selectCompany={companyShow}
  nameStatus={usernameState}
  passwordStatus={passwordState}
  companyStatus={companyState}
  statusCheck={(companyShow) => this.setState({ companyShow })}
  changeCompany={(companyState) => this.setState({ companyState })}
  changeUsername={(usernameState) => this.setState({ usernameState })}
  changePassword={(passwordState) => this.setState({ passwordState })}
  sendLogin={() => console.log('Guardar!')}
/>
```

![Suite](/src/img/movil1.jpg "Login")
![Suite2](/src/img/movil2.jpg "Login")

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
