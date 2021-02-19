const { exec } = require('child_process');

export class composeURLENV {

  private _currentURI: URL;
  
  constructor(url: URL) {
    this._currentURI = url;
    this.overrideDefaults();
  }

  async overrideDefaults() {

    this.setDbURL(this._currentURI);

    process.env.currentURI_href = this._currentURI.href;
    process.env.currentURI_origin = this._currentURI.origin;
    process.env.currentURI_protocol = this._currentURI.protocol;
    process.env.currentURI_host = this._currentURI.host;
    process.env.currentURI_hostname = this._currentURI.hostname;
    process.env.currentURI_port = this._currentURI.port;
    process.env.currentURI_pathname = this._currentURI.pathname;
    process.env.currentURI_search = this._currentURI.search;
    process.env.currentURI_hash = this._currentURI.hash;
    exec('npm run config');
    // console.log('process env ', process.env);
  }

  setDbURL(currentURI: URL) {
    if (currentURI.hostname === 'dev-webstore-customer.anterasaas.com') {
      process.env.currentURI_mongoURI =
        'mongodb+srv://admin:WweLpSP4v6eh7Av4HfaQ93nXR57rrGSc@cluster0.ssbkz.mongodb.net/webstore?retryWrites=true&w=majority';
    }
    if(currentURI.hostname ===  'test.anteraecomm.com'){
      process.env.currentURI_mongoURI =
      'mongodb+srv://admin:WweLpSP4v6eh7Av4HfaQ93nXR57rrGSc@cluster0.ssbkz.mongodb.net/test-anteraecomm-com?retryWrites=true&w=majority'
    }
     else {
      process.env.currentURI_mongoURI =
        'mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
    }
  }
}