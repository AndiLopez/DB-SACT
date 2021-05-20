import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import InsertGeneral from './InsertGeneral';
import InsertCA from './InsertCA';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNUM from '../assets/RNUM.png';
import { useNavigation } from '@react-navigation/native';
import EliminarGeneral from './EGeneral';
import EliminarPR from './EPR';
import EliminarBaterias from './EBaterias';
import EliminarCA from './ECA';
import EliminarTransformadores from './ETransformadores';
import EliminarGES from './EGES';
import EliminarRectificadores from './ERectificadores';
import EliminarTGES from './ETGES';
import EliminarPB from './EPB';

const Tab = createMaterialTopTabNavigator();

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
          {/* <View><Text style={{ fontSize:23,color:'blue',textAlign: 'center', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>
            Eliminar Centrales</Text></View> */}
          <Tab.Navigator>
            <Tab.Screen name="General" component={EliminarGeneral} />
            <Tab.Screen name="Planta de Rectificadores" component={EliminarPR} />
            <Tab.Screen name="Rectificadores" component={EliminarRectificadores} />
            <Tab.Screen name="Baterías" component={EliminarBaterias} />
            <Tab.Screen name="Producción BCOS" component={EliminarPB} />
            <Tab.Screen name="CA" component={EliminarCA} />
            <Tab.Screen name="Transformadores" component={EliminarTransformadores} />
            <Tab.Screen name="GES" component={EliminarGES} />
            <Tab.Screen name="Sub GES" component={EliminarTGES} />
          </Tab.Navigator>
        </View>
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
    backgroundColor: '#FFFFFF',
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
    justifyContent: 'center',
    padding: 2,
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
  imgStyleConteiner: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'blue',
    top: '10%',
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
    right: 6,
  },
  imgStyle: {
    width: 300,
    height: 300,
    alignContent: 'center',
    alignSelf: 'center',
  },

});
// Autor de código Ing. de Software Andrea Cecilia López González