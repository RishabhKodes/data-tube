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
  gapi.client.init
}
