import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ListCard = ({ id, name,hai }) => {
    const [isOpen,setOpen]=useState(false);
    return (
        <Pressable onPress={()=>setOpen(!isOpen)}>

        <View style={styles.card}>
            <Text style={styles.text} >{name}</Text>
            {isOpen&&<Text style={styles.text}>{hai}</Text>}
        </View>
        </Pressable>
    );
};
const styles=StyleSheet.create({
    card:{
        backgroundColor:'violet',color:'white',shadowColor:'white', borderRadius:10,
        margin:5,padding:10,
        

    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'white',
    }
})

export default ListCard;