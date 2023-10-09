import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { StatusBar } from 'react-native';
import { ViewStyle ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useRoute } from "@react-navigation/native"

//interface CityListProps {
   //navigation: any; // 
 //}

const CityScreen: React.FC<any> = ({route }) => {
const {city}=route.params;
 
    
   
   return ( 
     <View> 
       <Text>{city.name}</Text> 
       <Text>{city.description}</Text>
       <Text>{city.Image}</Text>
       

      
        
     </View> 
   ); 
 };
 
       
        
     


   

export default CityScreen;
