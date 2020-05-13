//options
const CLIENT_ID='61754009219-bsqvqrc3h7cosvgbun9lc3r80f8hdjkb.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');



//auth2 library
function handleClientLoad(){
  gapi.load('client:auth2', initClient);
}

//initialize client library API
function initClient(){
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId:CLIENT_ID,
    scope:SCOPES
  }).then(()=>{
    //listen for state changes
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    // handle initial signin state
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  })
}


function updateSigninStatus(isSignedIn){

  if(isSignedIn){
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      content.style.display = 'block';
      authorizeButton.style.display = 'block';
      getChannel(defaultChannel);
    }else{

    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
    content.style.display = 'none';
    authorizeButton.style.display = 'none';     
  }
}

//login
function handleAuthClick(){

  gapi.auth2.getAuthInstance().signIn();
}

//logout
function handleSignoutClick(){
  gapi.auth2.getAuthInstance().signOut();
}