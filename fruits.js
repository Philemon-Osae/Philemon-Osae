import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fruits() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>BENEFITS OF FRUITS</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}> 
     1. Fruits are rich in various nutrients such as vitamin C, folate, potassium, and fiber. 
        These nutrients are crucial for the healthy development of the baby and can help prevent birth defects.

    </Text>
    <Text style={styles.textt}>
     2. Some studies suggest that consuming fruits during pregnancy may help reduce the risk of preterm birth.
        The antioxidants and other beneficial compounds found in fruits may contribute to a healthier pregnancy and lower the chances of delivering prematurely. 
    </Text>
    <Text style={styles.textt}>
     3.  Many fruits have high water content, which helps keep the body hydrated during pregnancy. 
         Staying hydrated is important for maintaining proper blood circulation, preventing constipation, and supporting overall health.

    </Text>
    <Text style={styles.textt}>
     4. The fiber content in fruits can help prevent constipation, a common issue during pregnancy. 
        Fiber promotes regular bowel movements and can alleviate discomfort. 
    </Text>
    <Text style={styles.textt}>
     5. Some fruits, such as bananas and oranges, are rich in potassium, which helps regulate blood pressure levels.
        Maintaining healthy blood pressure is essential for both the mother's well-being and the baby's development.
    </Text>
    <Text style={styles.textt}>
     6. Fruits are generally low in calories and fat but high in nutrients. 
        Incorporating them into a balanced diet can help pregnant women manage their weight gain effectively while providing essential nutrition.
    </Text>
    <Text styles={styles.textt}>
     7. Eating fruits as part of a balanced diet can help reduce the risk of gestational diabetes, a condition that affects some pregnant women.
 
    </Text>
    <Text style={styles.textt}>
     8. Fruits contain natural sugars that provide a quick energy boost without causing spikes in blood sugar levels. 
        This can be particularly helpful during pregnancy when fatigue is common. 
    </Text>
    <Text style={styles.textt}>
     9. Fruits are rich in folate, a B-vitamin that is essential for the development of the baby's neural tube.
        Adequate folate intake during early pregnancy can help prevent neural tube defects such as spina bifida.
    </Text>
    <Text style={styles.textt}>
    10. Some fruits, such as watermelon and citrus fruits, have high water content and can be refreshing and hydrating.
        They may also help alleviate nausea and morning sickness symptoms that many pregnant women experience.  
    </Text>
    </ScrollView>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10
},

header: {
  marginTop: 30,
  height: 40,
  width: '100%'
},

headerText: { 
  fontSize: 35,
  color: 'blue',
  fontWeight: 'bold'
},

textContainer: {
  marginTop: 10,
  padding: 5
},

textt: {
  fontSize: 20
}

})