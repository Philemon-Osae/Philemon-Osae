import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Water() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>BENEFITS OF WATER</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}>
     1. Water is essential for maintaining proper hydration levels in the body, especially during pregnancy. 
        It helps carry nutrients to the baby, supports the development of the placenta, and aids in digestion.
     </Text>

     <Text style={styles.textt}>
      2.  Pregnant women are more susceptible to overheating due to hormonal changes and increased blood volume. Drinking water helps regulate body temperature and prevents overheating, which is important for both the mother's comfort and the baby's well-being.
     </Text>

     <Text style={styles.textt}>
      3. During pregnancy, blood volume increases to support the growing baby. Staying hydrated with water helps maintain adequate blood volume, which is crucial for optimal circulation and nutrient delivery to the baby.
     </Text>

     <Text style={styles.textt}>
      4. Pregnancy hormones can slow down digestion and lead to constipation. Drinking enough water helps soften stools, making them easier to pass and reducing the risk of constipation.
     </Text>

     <Text style={styles.textt}>
      5. Water acts as a natural detoxifier by flushing out waste products and toxins from the body. This is particularly important during pregnancy when there is an increased workload on the kidneys.
     </Text>

     <Text style={styles.textt}>
      6. Pregnant women are more prone to UTIs due to hormonal changes and pressure on the bladder from the growing uterus. Drinking plenty of water helps flush bacteria out of the urinary tract, reducing the risk of UTIs.
     </Text>
     <Text style={styles.textt}>
      7. Swelling, or edema, is common during pregnancy due to increased fluid retention. Drinking water can help reduce swelling by promoting proper fluid balance in the body.
     </Text>
     <Text style={styles.textt}>
      8. Adequate hydration is essential for breastfeeding mothers as it helps maintain milk supply. Drinking enough water can support healthy breast milk production after childbirth.
     </Text>
     <Text style={styles.textt}>
      9. Pregnancy can put extra strain on the joints and muscles, leading to discomfort or pain. Staying hydrated with water helps lubricate the joints, reducing the risk of joint pain and promoting better mobility.
     </Text>
     <Text style={styles.textt}>
     10. Proper hydration is essential for maintaining healthy skin during pregnancy. Drinking enough water helps keep the skin hydrated, reducing dryness, itchiness, and promoting a radiant complexion.  
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