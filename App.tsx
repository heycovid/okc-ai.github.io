import React from 'react';
import { StyleSheet, Platform, Text, View, Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SplashScreen } from 'expo';


import { createMaterialTopTabNavigator, createAppContainer } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Main from "./Main";
// import Chat from "./Chat";

// // Create the navigator
// const RootNavigator = createMaterialTopTabNavigator({
//   Main: { screen: Main },
//   Chat: { screen: Chat },
//   });


// const navigator = createStackNavigator({

// });
// Export

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();


    Font.loadAsync({
              ...Ionicons.font,
              'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
              'bitter': require('./assets/fonts/Bitter/Bitter-Regular.ttf'),
              'pacifico':require('./assets/fonts/Pacifico/Pacifico-Regular.ttf'),
            });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('./assets/logo/heycovid-logos_logo-wink-inverted.svg') }
              style={styles.welcomeImage}
            />
          </View>
  
          <View style={styles.splashContainer}>
            <SplashContainer />
          </View>
        </ScrollView>
      </View>

  );
    // }
}

function SplashContainer() {

  return(
    <View style={styles.splash}>
      <View style={styles.splashHeader}>
       <SplashHeaderText><SplashHeaderTitleText>OKC</SplashHeaderTitleText></SplashHeaderText>
       <SplashHeaderText>OK COVID</SplashHeaderText>
      </View>

      <SplashContentText style={styles.splashContent}>
        The new dating website that allows you to match with other elite singles infected with novel corona virus!
    </SplashContentText>
    </View>
    );
  
}


export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function SplashHeaderTitleText(props){
  return <Text {...props} style={
    [props.style, { fontSize:120}]}/>
}



export function SplashAllText(props){
  return <Text {...props} style={
    [props.style, { 
      color:"blue",
      textAlign:"center",
        }
  ]} />;
}
export function SplashHeaderText(props){
  return <Text {...props} style={
    [props.style, { 
      fontFamily: 'pacifico' , 
      color:"blue",
      fontSize:70,
      fontWeight:"bold",
      textShadowOffset:{width:3,height:3},
      textShadowColor:"white",
        }
  ]} />;
}

export function SplashContentText(props){
  return <Text {...props} style={
    [props.style,{
      fontFamily:"bitter",
      fontSize:40,
    }]
  }/>
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fuchsia',
  },

  splash:{

    textAlign:"center",
    maxWidth:400,
    marginLeft:'auto',
    marginRight:'auto',

  },
  splashHeader: {
    color:"blue",
  },  
  splashContent:{
    color:"yellow",
  }, 
  splashContainer:{
    backgroundColor:"fuchsia",
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
