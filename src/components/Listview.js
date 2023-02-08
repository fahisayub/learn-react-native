import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import ListCard from './ListCard';
import axios from 'axios';
const ListView = () => {
    const [data, setData] = useState([])
    let getData = async () => {
        await axios.get('https://reqres.in/api/users').then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
        })
    };
    useEffect(() => {
        getData();
    }, [])
    return (
        <ScrollView style={style.container}>
            {data && <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => <ListCard {...item} />} />}
        </ScrollView>
    );
};
const style = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        paddingVertical: 30,
    }
})
export default ListView;