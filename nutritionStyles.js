import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    header: {
        marginTop: 51,
        width: 178,
        height: 41,
        
    },
    headerText: { 
        fontSize: 32,
        color: 'reddish-blue',
        fontWeight: 'bold'
    },

    nutritionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '60%',
        width: '100%',
        justifyContent: 'space-around',
        color: 'Red'
    },

    optionSelect: {        
        height: 160,
        marginTop: 25,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 44,
        elevation: 10
        },
        
        optionLogoFruit: {
            width: '100%',
            height: 492,
          },

          optionLogo: {
            width: '100%',
            height: 150,
          },

          optionLogoWheat: {
            width: '100%',
            height: 250,
          },

          optionLogoWater: {
            width: '70%',
            height: 100,
          },

          recordContainer: {
            marginTop: 130,
            height: 20,
            alignSelf: "flex-start",
            marginLeft: 15
          },

          eggs: {
            width: 100,
            height: 80,
            tintColor: 'Blue' 
          },

          dairy: {
            width: 100,
            height: 100,
            tintColor: 'blue' 
          },

          fruits: {
            width: 100,
            height: 100,
            tintColor: 'blue' 
          },

          legumes: {
            width: 100,
            height: 100,
            tintColor: 'blue' 
          },

          vegetable: {
            width: 100,
            height: 100,
            tintColor: 'blue' 
          },

          water: {
            width: 100,
            height: 100,
            tintColor: 'blue' 
          },

          recordText: {
            fontWeight: 'bold',
            fontSize: 15,
            color: '#FF003D'
          }

})

export default styles;