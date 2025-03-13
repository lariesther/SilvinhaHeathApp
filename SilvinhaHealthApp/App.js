import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>calculadora de IMC</Text>
        <View>
          <Text style={styles.label}>Altura</Text>
           <TextInput
           style={ styles.input}
           placeholder='Ex. 1.70'
           keyboardType='numeric'
           />
           </View>
           <View style={{Margintop: 25 }}>
        <Text style={styles.label}>Peso</Text>
           <TextInput
           style={ styles.input}
           placeholder='Ex. 80.00'
           keyboardType='numeric'
           />
           
          </View>
          <TouchableOpacity style={styles.buttom}
          onPress={ () => alert('AAAAAAAAAAAAA')}
          >
            <Ionicons name={"calculator-sharp"} size={24} color='#edf2f4' />
            <Text style={styles.text}> Calcular</Text>
          </TouchableOpacity>
     </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#edf2f4',
  },
  titleBox: {
    alignItems:'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#0080d0',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  titleText:
  {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content:{
    flex: 1,
    padding: 40,
    width:'100%',
    backgroundColor: '#edf2f4',
  },
  subTitle: {
    textAlign:'center',
    fontSize: 24,
    color: '#0080d0',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label:{
    color:'#000',
    fontSize: 18,

  },
  input:{
    height: 45,
    width:'100%',
    paddingHorizontal: 10,
    fontSize: 18,
    borderColor:'#0080d0',
    borderBottomWidth: 3,
    marginVertical: 5,
   

  },
  buttom:{
    height:50,
    width:"100%",
    paddingVertical:15,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0080d0",
    borderRadius:15,
    marginTop:40,
    margimBottom:10,
  },

  text:{ 
    color:"#edf2f4",
    fontSize:24,
    fontWeight:"bold",
    marginLeft:5

  }

});
