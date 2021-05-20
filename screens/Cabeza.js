import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNUM from '../assets/RNUM.png';
import { useNavigation } from '@react-navigation/native';



export default function Cabeza() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={[styles.header]}>
                <View style={styles.containerIcon}>
                    <Icon
                        name='bars'
                        size={30}
                        style={styles.iconStyle}
                        onPress={() => navigation.openDrawer()} />
                </View>
                <View style={styles.containerLogo}>
                    <Image style={styles.imgLogo} source={RNUM} />
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    iconStyle: {
        position: 'relative',
        color: '#0099D8',
        top: 12,
        left: 20,
    },
    containerIcon: {
        width: '20%',
        height: '100%',
    },
    containerLogo: {
        height: '100%',
        width: '80%',
    },
    header: {
        flexDirection: 'row',
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#E1E1E2',
        // zIndex: 10
    },
    imgLogo: {
        width: 100.65,
        height: 51.7,
        marginTop: 3,
        marginStart: 3,
        alignSelf: 'flex-end',
        right:6,
    },
});

// Autor de código Ing. de Software Andrea Cecilia López González