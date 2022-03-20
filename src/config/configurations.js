import {Dimensions} from 'react-native';
import {API_URL, API_TOKEN} from '@env';

const {width, height} = Dimensions.get('window');

const ENV = {
  windowWidth: width,
  windowHeight: height,
};

export {API_TOKEN, API_URL, ENV};
