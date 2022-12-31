import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const onSuccess = (res) => {
  console.log("sucess", res);
};

const onFailure = (err) => {
  console.log("failed", err);
};

function GoogleSignIn() {
  const clientId =
    "4257946646-7kettvep79230pkp8jm3hv4egsfqi78v.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <div className="App">
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleSignIn;
