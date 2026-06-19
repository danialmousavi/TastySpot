import { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'

const TasteForm = () => {
  const [title,setTitle]=useState("")
  const titleHandler=(value:string)=>{
    setTitle(value)
  }
  return (
    <>
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>title</Text>
        <TextInput onChangeText={titleHandler} value={title} style={styles.input}/>
      </View>
      <ImagePicker/>
      <LocationPicker/>
    </ScrollView>
    </>
  )
}

export default TasteForm

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,

  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    color:Colors.primary
  },
  input:{
    marginTop:10,
    padding:8,
    borderBottomWidth:3,
    borderBottomColor:Colors.primary,
    backgroundColor:Colors.BackGround2,
    color:Colors.text,
    marginBottom:10
  }
})