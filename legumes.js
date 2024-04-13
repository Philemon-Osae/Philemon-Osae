import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Legumes() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>BENEFITS OF LEGUMES</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}>
     1. Legumes are rich in protein, which is essential for the growth and development of the baby. They provide a valuable plant-based protein source for pregnant women, especially for those following vegetarian or vegan diets.
    </Text>
    <Text style={styles.textt}>
     2. Legumes are an excellent source of dietary fiber, which helps prevent constipation—a common issue during pregnancy. Adequate fiber intake supports healthy digestion and can alleviate discomfort.  
    </Text>
    <Text style={styles.textt}>
     3. Folate is a crucial nutrient during pregnancy as it helps prevent neural tube defects and supports the baby's brain and spinal cord development. Legumes, particularly lentils and chickpeas, are high in folate, making them an important addition to a pregnant woman's diet.
    </Text>
    <Text style={styles.textt}>
     4. Legumes are rich in minerals like iron, magnesium, potassium, and zinc. Iron is especially important during pregnancy to support the production of red blood cells and prevent iron-deficiency anemia.
    </Text>
    <Text style={styles.textt}>
     5. Legumes provide complex carbohydrates that release energy slowly, helping to maintain stable blood sugar levels throughout the day. This can help prevent energy crashes and promote sustained energy levels during pregnancy.  
    </Text>
    <Text style={styles.textt}>
     6. Legumes are generally low in fat but high in nutrients, making them a healthy choice for managing weight gain during pregnancy while still providing essential nutrition.

    </Text>
    <Text style={styles.textt}>
     7. Legumes contain various antioxidants that help protect cells from damage caused by free radicals. These antioxidants contribute to overall health and support a healthy immune system.
    </Text>
    <Text style={styles.textt}>
     8. Legumes are versatile ingredients that can be incorporated into a wide range of dishes such as soups, stews, salads, and dips. They are also relatively inexpensive, making them a cost-effective way to add nutrition to meals.
    </Text>
    <Text style={styles.textt}>
     9. Legumes
    </Text>
    <Text style={styles.textt}>
    10. Legumes 
    </Text>
    <Text style={styles.textt}>
          * When consuming legumes during pregnancy, it's important to ensure they are properly cooked to eliminate any potential bacteria or toxins.
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