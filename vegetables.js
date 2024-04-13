import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Vegetables() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>BENEFITS OF VEGETABLES</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}>
     1. They provide vitamins and minerals,as well as fibre, which helps digestion and can help prevent constipation.
      Eat at least 5 portions of a variety of Vegetables every day-these can b fresh frozen,canned or dries.
    </Text>
    <Text style={styles.textt}>
     2. Colorful vegetables like bell peppers, tomatoes, and carrots contain antioxidants such as vitamin C and beta-carotene.
        These antioxidants help strengthen the immune system of both the mother and the baby.
    </Text>
    <Text style={styles.textt}>
     3. Eating a variety of vegetables can help pregnant women maintain a healthy weight during pregnancy.
        Vegetables are low in calories but high in nutrients and fiber, making them an excellent choice for satisfying hunger while providing essential nutrients.
    </Text>
    <Text style={styles.textt}>
     4. Vegetables like broccoli, peas, and Brussels sprouts are rich in iron, which is essential for the production of red blood cells.
        During pregnancy, a woman's blood volume increases to support the growing fetus, making iron intake crucial to prevent anemia.
    </Text>
    <Text style={styles.textt}>
     5. Leafy green vegetables such as spinach and kale are excellent sources of folate, a B-vitamin that plays a vital role in the early development of the baby's neural tube.
        Adequate folate intake can help prevent neural tube defects like spina bifida.
    </Text>
    <Text style={styles.textt}>
     6. Eating a variety of vegetables can help prevent gestational diabetes, a condition that affects some pregnant women.
        Vegetables are low in sugar and high in fiber, which helps regulate blood sugar levels and reduce the risk of developing gestational diabetes.
    </Text>
    <Text style={styles.textt}>
     7. Consuming a wide range of vegetables during pregnancy can help reduce the risk of certain birth defects.
       The combination of vitamins, minerals, and antioxidants found in vegetables supports healthy fetal development and reduces the chances of abnormalities. 
    </Text>
    <Text style={styles.textt}>
     8. Preeclampsia is a potentially serious condition characterized by high blood pressure during pregnancy. 
        Consuming vegetables rich in potassium, such as sweet potatoes and leafy greens, may help lower blood pressure and reduce the risk of developing preeclampsia.  
    </Text>
    <Text style={styles.textt}>
     9. The vitamins and minerals found in vegetables play a crucial role in maintaining optimal energy levels and supporting mental well-being during pregnancy. 
        A balanced diet that includes plenty of vegetables can contribute to improved mood and overall vitality.
    </Text>
    <Text style={styles.textt}>
     10. Many vegetables have high water content, which helps keep pregnant women hydrated. 
         Cucumbers, lettuce, and celery are great examples of hydrating vegetables that can contribute to maintaining proper fluid balance during pregnancy. 
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