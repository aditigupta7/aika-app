import React from 'react';
import {View,Text, StyleSheet, TextInput,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';

const Flooring=({navigation,onChangeText,value,placeholder})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            {/* <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               Flooring
            </Text>
            <PageButton buttonName={'New Construction'}/>
            <PageButton buttonName={'Remodel'}/>
            <PageButton buttonName={'Addition'}/> */}
             <TextInput
                        style={{width:'100%',height:62,borderWidth:1,borderRadius:4,borderColor:'gray', color: 'black'}}
                        multiline={true}
                        editable={true}
                        // onBlur={()=>{
                        //     console.log("ON BLUR ---",description)
                        //     onSetDescription(data,index)
                        // }}
                        value={value}
                        //  onChangeText={_handleMultiInput(data,index)}
                        onChangeText = {onChangeText}
                        // onChangeText={(text)=>{setDescription(text)}}
                        placeholderTextColor = "gray"
                        placeholder={placeholder}
                    ></TextInput>
        </View>
    )
}
export default Flooring;