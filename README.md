# AlcoCalc


### Installation

To run this app with the backend you need to have Node.js installed. You can download it from [here](https://nodejs.org/en/) (use the LTS version 18.12.1) or use nvm (Node Version Manager) to install it. You can find instructions on how to install nvm [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/). 

To make the app easier to run with the backend, we have deployed the server to Heroku. You can find the link to the server [here](https://alcocalc-api.herokuapp.com/) to test it yourself, but that is not necessary to run the app.

To run the app you should use the Expo-app on your phone's appstore ([Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) or [IOS Appstore](https://apps.apple.com/us/app/expo-go/id982107779)), or use an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/) (or an [IOS emulator](https://docs.expo.dev/workflow/ios-simulator/) on Mac). You can find instructions on how to set up an emulator [here](https://docs.expo.dev/workflow/android-studio-emulator/).

To run the app you need to clone the repository and install the dependencies. You can do this by running the following commands in the terminal:

```
git clone https://gitlab.stud.idi.ntnu.no/it1901/groups-2022/gr2245/alcocalc.git

cd alcocalc
npm install
```

To start the app you need to run the following command:

```npm start```

This will start the app which you can then run on your phone or in the emulator. 

To open the app you need to press the following keys in the terminal:

- ```a``` for Android emulator

- ```i``` for IOS emulator

- *Or* you can scan the generated QR-code with the Expo-app on your phone. 

### Gitpod integration
This project is integrated with Gitpod, an online IDE. You can use it to work on the project without having to install anything on your computer. To do so, click on the following button:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.stud.ntnu.no/#https://gitlab.stud.idi.ntnu.no/it1901/groups-2022/gr2245/alcocalc/) 

*Note that you need to be logged in to Gitpod with your NTNU account to use feature*

*Also note that the docker container needs to run on your computer or on the same network as you run the app on*

### Usage

The app is meant to be used by people who want to keep track of their alcohol consumption. You can log your drinks and see your blood alcohol content (BAC) based on the drinks you have logged, how long you have been drinking for, and the total volume of pure alcohol you have consumed.