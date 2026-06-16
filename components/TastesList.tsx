import { View, Text, FlatList, StyleSheet } from 'react-native'
import { TastesType } from '../utils/types/Tastes'
import TastyCard from './TastyCard'
import { Colors } from '../constants/colors'
type TastesListProps={
    tastes:TastesType[]
}
const TastesList = ({tastes}:TastesListProps) => {
    if(!tastes||tastes.length==0){
        return(
            <View style={styles.warningContainer}>
                <Text style={styles.warningText}>No taste Points added yet!</Text>
            </View>
        )
    }

  return (
    <>
        <FlatList  data={tastes} keyExtractor={(item)=>item.id} renderItem={({item})=><TastyCard tasty={item}/>}/>
    </>
  )
}

export default TastesList

const styles=StyleSheet.create({
    warningContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    warningText:{
        fontSize:20,
        fontWeight:"bold",
        color:Colors.primary
    }

})