import qs from 'qs';
import configData from '../../src/config.json';
const CLIENT_ID = configData.CLIENT_ID;
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
};

// https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

// http://localhost:8080/oauth2/callback#access_token=60619cc7b1d6993c06a2a4ad0dfb8f4535b0fa29&expires_in=315360000&token_type=bearer&refresh_token=7987a076fddc399cde709fcb92f17e32bdf0761d&account_username=moroseCoding&account_id=159284637
