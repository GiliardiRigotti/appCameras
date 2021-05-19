import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    botaos: {
      backgroundColor: '#004d51',
      borderRadius: 30,
      width: '90%',
      height: 50,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 20,
      marginTop: 10,
      flexDirection: "row",
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    flatstyle: {
      marginTop: 30,
    },
    iconcam: {
      marginRight: 10,
    },
    textfooter: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  })