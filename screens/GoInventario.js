import * as React from 'react';
import { View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GoHome() {
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: '#FFFFFF', width: '90%', flexDirection: 'row-reverse', alignItems: 'center'}}>
            <Button
                    onPress={() => navigation.navigate('MenuInsert')}
                    title="Nuevos Datos"
                    color="gray"
                    
                />
           
        </View>

    );
}


export default GoHome
// Autor de código Ing. de Software Andrea Cecilia López González