import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"

type HeaderButtonProps={
    size:number,
    color:string
    icon:any,
    onPress:()=>void
}
const HeaderButton = ({size,color,icon,onPress}:HeaderButtonProps) => {
  return (
    <Pressable style={({pressed})=>[styles.button,pressed&&styles.pressed]} onPress={onPress}>
        <Ionicons size={size} color={color} name={icon}/>
    </Pressable>
  )
}

export default HeaderButton

const styles=StyleSheet.create({
    button:{
        padding:5,
        margin:5,
        justifyContent:"center",
        alignItems:"center"
    },
    pressed:{
        opacity:0.5
    }
})