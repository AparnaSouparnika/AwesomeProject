  
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import { ViewStyle,ScrollView,FlatList,Button,TouchableOpacity,Image} from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import PlacesScreen from './PlacesScreen';
import { useNavigation } from '@react-navigation/native'; 
import { useRoute } from "@react-navigation/native"
import CityScreen from './CityScreen';


//const City =["Mumbai","Delhi","Kolakatta","Banglor","Hyderabad"];

const cities = [
   { 
     id: 1, 
     name: 'Mumbai',
     description:'Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center and  Indias largest city..,',
     Image:'C:\Users\TLTUser\ReactNative\AwesomeProject\Assets\Mumbai.jpg'
  },
   { id: 2, 
     name: 'Delhi',
     description:'Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India,',
    
   },
   { id: 3, 
      name: 'Kolkatta',
      description:'Kolkata (formerly Calcutta) is the capital of Indias West Bengal state. Founded as an East India Company trading post, it was Indias capital under the British',
     
    },
    { id: 4, 
      name: 'Hyderabad',
      description:'Hyderabad is the capital of southern Indias Telangana state. A major center for the technology industry, its home to many upscale restaurants and shops.',
     
    },
    { id: 5, 
      name: 'Banglore',
      description:'Bengaluru (also called Bangalore) is the capital of Indias southern Karnataka state. The center of Indias high-tech industry, the city is also known for its parks and nightlife. ',
     
    },
];

interface CityListProps {
   navigation: any; // 
 }
 const HomeScreen: React.FC<CityListProps> = ({ navigation }) => {
//const HomeScreen = () =>{
   //const navigation = useNavigation();
   const renderItem = ({ item }: any) => (
    
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('City', { city: item })}>
        <View style={{  padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Image  
                    source={require('C:\Users\TLTUser\ReactNative\AwesomeProject\Assets\Kolkata.jpg')}  
                />
         
  
  </View>
  
        
      </TouchableOpacity>

    );
 
      return (
      <ScrollView> 
      <View style= {styles.headerContainer} >
         <Text style ={styles.headerSubtitle}>View Places</Text>
         <Text style={styles.headerTitle}>THE TRAVEL GUIDE</Text>
         </View>
         
            <FlatList
             data={cities}
             renderItem={renderItem}
             keyExtractor={(item) => item.id.toString()}/> 
         
      
         </ScrollView> 
      );
   };

const styles = StyleSheet.create({
   container:{
      flex:1,
      

   },
   button: {
      flex:1,
      backgroundColor: 'pink', // Change the background color as needed
      padding: 10, // Adjust padding
      borderRadius: 15, // Adjust border radius for rounded corners
       // Center horizontally
      justifyContent: 'center', // Center verticallyflex
      flexDirection:'row',
      alignItems:'flex-start',

    },
   headerContainer:{
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'space-between',
      paddingHorizontal:20
   },
   headerTitle:{
      fontSize:28,
   },
   headerSubtitle:{
      fontSize:13,
      
   }
}

)


export default HomeScreen;