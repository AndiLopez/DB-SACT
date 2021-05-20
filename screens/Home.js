import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataCenter from '../assets/data-center.png';
import RNUM from '../assets/RNUM.png';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
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
            <View style={styles.container2}>
                <View style={styles.imgStyleConteiner}>
                    <View style={styles.containerText}>
                        <Text style={styles.textTitle} >
                            Base de Datos  
                        </Text>
                        <Text style={styles.textTitle} >
                            Sistemas de Alimentación en Centrales Telefónicas
                        </Text>
                    </View>
                    <View style={styles.centerConteiner}>
                        <Image style={styles.imgStyle} source={DataCenter} />
                    </View>

                </View>
            </View>

            <View style={[styles.footer]}>
                <Text style={styles.textFooter}>Red Nacional Última Milla S.A.P.I de C.V </Text> 
                <Text style={styles.textFooter}>Todos los derechos reservados 2021</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FFFFFF',
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
    textTitle: {
        alignSelf: 'center',
        fontSize: 27,
        color: '#2C3E50',
        top: 10,
        justifyContent:'center',
        padding:2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    header: {
        flexDirection: 'row',
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#E1E1E2',
        zIndex: 10
    },
    footer: {
        flex: 3,
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#E1E1E2',
        padding: 10
    },
    textFooter: {
        alignSelf: 'center',
        fontSize: 13,
        color: '#2C3E50',
        padding: 1.5,
        top: 15,
        // fontWeight: 'bold',
        fontFamily: 'Verdana',
        
    },
    imgStyleConteiner: {
        width: '80%',
        height: '100%',
        alignContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'blue'
    },
    centerConteiner: {
        top: '10%',
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },
    containerText: {
        top: '10%',
        alignItems: 'center',
        width: '100%',
        height: '15%',
        // left:'-25%',
        // backgroundColor: 'pink',
    },
    styleLogo: {
        flex: 4,
        alignSelf: 'center',
        padding: '3%',
    },
    imgLogo: {
        width: 100.65,
        height: 51.7,
        marginTop: 3,
        marginStart: 3,
        alignSelf: 'flex-end',
        right:6,
    },
    imgStyle: {
        width: 300,
        height: 300,
        alignContent: 'center',
        alignSelf: 'center',
    },

});

// Autor de código Ing. de Software Andrea Cecilia López González