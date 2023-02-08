import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const ListCard = ({ id, first_name, email, avatar }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <Pressable onPress={() => setOpen(!isOpen)}>

            <View style={styles.card}>
                <View style={styles.flex} >

                    <Image source={{ uri: avatar }} style={styles.img} />
                    <Text style={styles.text} >{first_name}</Text>
                </View>
                {isOpen && <Text style={styles.text}>{email}</Text>}
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'violet',
        color: 'white',
        shadowColor: 'white',
        borderRadius: 10,
        margin: 5, padding: 50,


    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 20,
    }
    , img: {
        height: 50,
        width: 50,
         borderRadius: 50,
    }
})

export default ListCard;