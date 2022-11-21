# AlcoCalc


### Installation

To run this app with the backend you need to have Node.js installed. You can download it from [here](https://nodejs.org/en/) (use the LTS version 18.12.1) or use nvm (Node Version Manager) to install it. You can find instructions on how to install nvm [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/). 

You also need to run the backend locally before you start the application. You can find the instructions for that [here](https://gitlab.stud.idi.ntnu.no/it1901/groups-2022/gr2245/alcocalc-server/-/blob/main/README.md)

To run the app you need to use an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/) (or an [IOS emulator](https://docs.expo.dev/workflow/ios-simulator/) on Mac). You can find instructions on how to set up an emulator [here](https://docs.expo.dev/workflow/android-studio-emulator/).

To run the app you need to clone the repository and install the dependencies. You can do this by running the following commands in the terminal:

```
git clone https://gitlab.stud.idi.ntnu.no/it1901/groups-2022/gr2245/alcocalc.git

cd alcocalc
npm install
```

To start the app you need to run the following command:

```npm start```

This will start the app which you can then run in the emulator. 

If you already have the app installed on your emulator you can run the following command to update the app:

```npm run android```

### Usage

The app is meant to be used by people who want to keep track of their alcohol consumption. You can log your drinks and see your blood alcohol content (BAC) based on the drinks you have logged, how long you have been drinking for, and the total volume of pure alcohol you have consumed.