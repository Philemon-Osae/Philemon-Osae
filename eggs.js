import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Eggs() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>BENEFITS OF EGGS</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}>
     1. Eggs are an excellent source of high-quality protein, which is essential for the growth and development of the baby. Protein helps in the formation of new cells, tissues, and organs, and it also supports the production of enzymes and hormones.
    </Text>
    <Text style={styles.textt}>
     2. Eggs are one of the best dietary sources of choline, a nutrient that plays a crucial role in fetal brain development. Choline is important for the formation of the neural tube, which eventually develops into the baby's brain and spinal cord.
    </Text>
    <Text style={styles.textt}>
     3.  Eggs contain various vitamins and minerals that are beneficial during pregnancy. They are a good source of vitamin D, which helps in calcium absorption and bone health. Eggs also provide vitamins A, E, B12, and folate, along with minerals like iron and zinc.          
    </Text>
    <Text style={styles.textt}>
     4. Some eggs are enriched with omega-3 fatty acids, particularly DHA (docosahexaenoic acid). DHA is vital for the development of the baby's brain and eyes. It may also help reduce the risk of preterm birth and promote healthy birth weight.
    </Text>
   
    <Text style={styles.textt}>
     5. Eggs are generally well-tolerated by most people and are easy to digest. This can be especially beneficial for pregnant women who may experience digestive issues such as nausea or heartburn.
    </Text>
    <Text style={styles.textt}>
     6. Eggs can be beneficial for managing weight during pregnancy due to their high protein content. Protein helps promote feelings of fullness and can aid in maintaining a healthy weight during pregnancy.

    </Text>
    <Text style={styles.textt}>
     7. Eggs can be prepared in various ways, making them a versatile ingredient in meals. They can be incorporated into breakfast dishes, salads, sandwiches, or used as a protein source in main courses. This versatility allows pregnant women to enjoy.
    </Text>
    <Text style={styles.textt}>
     8.  Eggs are widely available and relatively inexpensive compared to other sources of protein. This makes them a practical choice for pregnant women who want to maintain a healthy diet without breaking the bank.

    </Text>
    <Text style={styles.textt}>
    9. Eggs contain nutrients like lutein and zeaxanthin, which are beneficial for eye health. These antioxidants can help protect against age-related macular degeneration and promote healthy vision for both the mother and baby.
    </Text>


  <View>
   <Text style={styles.textt}>
          *Overall, eggs are a nutritious food choice for pregnant women due to their high protein content, choline, omega-3 fatty acids, vitamins, and minerals. 
   </Text>
   </View>
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
  color: '#FF003D',
  fontWeight: 'bold'
},

textContainer: {
  marginTop: 10,
  padding: 6
},

textt: {
  fontSize: 25
}

})