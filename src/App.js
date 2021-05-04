import React from 'react';
import scriptjs from 'scriptjs';

function AppleLogin() {
  scriptjs.get('https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js', () => {
    const params = {
      clientId: "****** ClientID *******", // eg. com.https.xyz
      redirectURI: "******* REirect Url  ********", // redirect Url
      responseType: "code id_token",
      responseMode: "fragment",
      scope: "name email",
      callback: (res) => console.log(res),

    };
    window.AppleID.auth.init(params);
  });
  const singInApple = async () => {
    const response = await window.AppleID.auth.signIn();
    return response;
  };

  return (
      <button className="btn-gp  apple_button" onClick={singInApple}  >
        <i className="fa fa-apple"></i>
        <span>
          Login With Apple
        </span>
      </button>
  );
}


export default AppleLogin;