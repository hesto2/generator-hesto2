import { configure } from 'axios-hooks';
import Axios from 'axios';
import { getToken } from './tokenUtils';

const token = getToken();
const init = () => {
  const axios = Axios.create({});
  configure({ axios });
};

export default init;
