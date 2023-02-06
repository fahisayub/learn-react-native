import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListCard from './ListCard';

const Listview = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Hamra' ,hai:"Hello"},
        { id: 2, name: 'Hafi',hai:"Hello Hafi" },
        { id: 4, name: 'Fahiz' ,hai:"Hello"},
        { id: 3, name: 'MFahiz',hai:"Hello" },
        { id: 5, name: 'MFahiz',hai:"Hello" },
    ])
    return (
        <View style={style.container}>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) => <ListCard {...item} />} />
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        width:'100%',
    }
})
export default Listview;