import {View,StyleSheet,Text} from 'react-native';

const Heading = ({title}) => {
    return (
       <View>
        <Text style={style.heading}>{title}</Text>
       </View>
    );
};

const style= StyleSheet.create({
    heading:{
        height:100,
        textAlign: 'center',
        fontSize:25,
        fontWeight: 'bold',
        color:'white',
        width:500,
        paddingTop:40,
    }
})

export default Heading;