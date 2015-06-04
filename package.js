
Package.describe({
  name: 'erikusaj:connectsdk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "DO NOT USE!  -developmet- ConnectSDK Cordova plugin package for Meteor.",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/erikusaj/connectsdk.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  'com.connectsdk.cordovaplugin': 'https://github.com/ConnectSDK/Connect-SDK-Cordova-Plugin/tarball/f85f65378531f25db5438629e05482f4a8b136df'
});

Package.onUse(function(api) {
//  api.export('ConnectSDK', 'web.cordova');
  api.export('Command', 'web.cordova');
  api.export('Subscription', 'web.cordova');
  api.export('LaunchSession', 'web.cordova');
  api.export('DevicePicker', 'web.cordova');
  api.export('ConnectableDevice', 'web.cordova');
  api.export('CapabilityFilter', 'web.cordova');
  api.export('PairingLevel', 'web.cordova');
  api.export('AirPlayServiceMode', 'web.cordova');
  api.export('Services', 'web.cordova');


  api.export('discoveryManager', 'web.cordova');

  api.versionsFrom('1.1.0.2');
  api.use(["templating", "session", "ui", "blaze", "less", "reactive-var"]);

//  api.versionsFrom("METEOR@0.9.2");
  api.addFiles('connectsdk.js', 'web.cordova');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erikusaj:connectsdk');
  api.addFiles('connectsdk-tests.js');
});
