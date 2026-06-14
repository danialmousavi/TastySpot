import { View, Text, Pressable, Image } from 'react-native'
import { TastesType } from '../utils/types/Tastes'

const TastyCard = ({tasty}:{tasty:TastesType}) => {
  return (
    <>
    <Pressable>
        <Image source={{uri:tasty.url}}/>
        <View>
            <Text>{tasty.title}</Text>
            <Text>{tasty.address}</Text>
        </View>
    </Pressable>
    </>
  )
}

export default TastyCard