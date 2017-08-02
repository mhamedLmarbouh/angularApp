// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCuLQ4bawBeuCl97A05qqLmhq3kaK30XrQ',
    authDomain: 'places-fee05.firebaseapp.com',
    databaseURL: 'https://places-fee05.firebaseio.com',
    projectId: 'places-fee05',
    storageBucket: 'places-fee05.appspot.com',
    messagingSenderId: '22132379641'
  }
};
