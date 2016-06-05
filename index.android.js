import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';


import App from './src/App';

class rnDemo extends Component {
   render() {
       let defaultName = 'indexPage';
       let defaultComponent = App;
       return (
       <Navigator
         initialRoute={{ name: defaultName, component: defaultComponent }}
         configureScene={(route) => {
           return Navigator.SceneConfigs.PushFromRight;
         }}
         renderScene={(route, navigator) => {
           let Component = route.component;
           return <Component {...route.params} navigator={navigator} />
         }} />
       );
   }


}

AppRegistry.registerComponent('car', () => rnDemo);
