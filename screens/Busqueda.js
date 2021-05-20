import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView,
    Button
} from 'react-native';
import axios from 'axios';
import Cabeza from './Cabeza';
import DataTable from 'react-data-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [
    {
        name: 'Nombre de Área',
        selector: 'nom_area',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'Nombre de Central',
        selector: 'nom_central',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
]

const columns1 = [
    {
        name: 'Dirección',
        selector: 'direccion',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
]

const columns2 = [
    {
        name: 'Categoría',
        selector: 'categoria',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'RPU',
        selector: 'rpu',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'No. Medidor',
        selector: 'no_medidor',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },

]
const columns3 = [
    {
        name: 'Inventario de Líneas',
        selector: 'inv_linea',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'POTS',
        selector: 'n_pot',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'ADSL',
        selector: 'adsl',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    }
]

const columns4 = [
    {
        name: 'Carga Actual (AMP)',
        selector: 'carga_act',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: 'Capacidad Total (AMP)',
        selector: 'cap_total_pr',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupado_pr',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},
        soportable: true
    }
]
const columns5 = [
    {
        name: 'No. Bancos',
        selector: 'no_bancos',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},

    },
    {
        name: 'Capacidad Total',
        selector: 'cap_total',
        style: { fontSize: 15, fontWeight: 'blod',color:'gray'},

    },
]

const urlGral= 'http://192.168.0.12:4000/1';
// const urlGral= 'http://192.168.43.238:4000/1';

export default class FixedHeaderFooter extends Component {
    constructor() {
        super();
        this.state = {
            busqueda: '',
            lista: [],

        }
    }


    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        // console.log(this.state.busqueda);

        // Aqui emíeza el cambio a toLoweCase
        var comodin = this.state.busqueda;
        var busquedaCase = comodin.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        this.setState({ busqueda: busquedaCase })
        // console.log(this.state.busquedaCase);
    }

    filtrarElementos = () => {

        var search = this.state.lista.filter(item => {
            if (
                item.siglas_central.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda) ||
                item.nom_central.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda) ||
                item.nom_area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda)
            ) {
                return item;
            }
        });
        this.setState({ siglas_busqueda: search })
    }
    componentDidMount() {
        this.getGeneral();
        this.setState({ siglas_busqueda: this.state.lista });
    }
    _renderData = async e => {
        e.persist();
        this.filtrarElementos();
    }
    async getGeneral() {
        //192.168.43.238
        
        try {
            const res = await axios.get(urlGral);
            console.log(res.data)
            this.setState({ lista: res.data })
        } catch (error) { console.log(error); }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <Cabeza></Cabeza>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.content]}>
                        <View style={styles.content2}>
                            <View style={styles.containerText}>
                                <Text style={styles.textTitle}>Búsqueda rápida</Text>
                            </View>

                            <View style={styles.containerTextImput}>
                                <TextInput style={styles.textInput}
                                    placeholder='Buscar centrales por siglas, nombre, área'
                                    value={this.state.busqueda}
                                    onChange={this.onChange}

                                />
                                <Button
                                    style={styles.styleButton}
                                    onPress={this._renderData}
                                    title="Buscar"

                                />
                            </View>
                        </View>

                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                {/* Aquí empieza la configuración de la DataTable */}

                                {/*  ----------  Datos Generales ---------- */}
                                <View style={styles.conteinerTitleData}>
                                    <View style={styles.containerIcon}>
                                        < Icon
                                            name='check-circle'
                                            size={28}
                                            style={styles.iconStyle}
                                        />
                                    </View>
                                    <Text style={styles.textTitleData}>
                                        Datos Generales
                                    </Text>
                                </View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Resultados </Text>}
                                    />
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns1}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Resultados </Text>}
                                    />

                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns2}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Resultados </Text>}
                                    />
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns3}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Resultados </Text>}
                                    />

                                {/*  ----------  Corriente Directa  ---------- */}


                                {/*  -------------------------- Planta de Rectificación  -------------------------*/}
                                <View style={styles.conteinerTitleData}>
                                    <View style={styles.containerIcon}>
                                        < Icon
                                            name='check-circle'
                                            size={28}
                                            style={styles.iconStyle}
                                        />
                                    </View>
                                    <Text style={styles.textTitleData}>
                                        Corriente Directa
                                    </Text>
                                </View>
                                <View style={styles.conteinerTitleData}>
                                    <View style={styles.containerSubIcon}>
                                        < Icon
                                            name='check'
                                            size={14}
                                            style={styles.subIconStyle}
                                        />
                                    </View>

                                    <Text style={styles.textSubTitleData}>
                                        Planta de Rectificación
                                    </Text>
                                </View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns4}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Resultados </Text>}
                                    />

                                {/* ----- Baterías ----- */}

                                <View style={styles.conteinerTitleData}>
                                    <View style={styles.containerSubIcon}>
                                        < Icon
                                            name='check'
                                            size={14}
                                            style={styles.subIconStyle}
                                        />
                                    </View>
                                    <Text style={styles.textSubTitleData}>
                                        Baterías
                                    </Text>
                                </View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns5}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Resultados </Text>}
                                    />
                                <View style={styles.contentSpace} />
                            </View>
                            {/* <GoInventario></GoInventario> */}
                        </View>
                    </View>

                    <View style={styles.contentSpace} />
                    <View style={[styles.footer]}>
                        <Text style={styles.textFooter}>Red Nacional Última Milla S.A.P.I de C.V. Todos los derechos reservados 2021</Text>
                    </View>
                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#FFFFFF'
    },
    container2: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', // '#FFFFFF',
        width: '98%',
        borderRadius: 15,
        marginTop: -78
    },
    container3: {
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'skyblue',
        width: '98%',
        
        alignSelf: 'center',

    },
    contentSpace: {
        alignItems: 'center',
        // backgroundColor: 'yellow',//'#FFFFFF'
        height: 15,
        width: '95%',
        alignSelf: 'center'
    },
    header: {
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#03A9F4',
        zIndex: 10
    },
    content: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,
        // backgroundColor: 'red'
    },
    content2: {
        alignItems: 'center',
        marginBottom: 50,
        backgroundColor: '#FFFFFF',
        width: '98%',
        height: 150,
        marginTop: 10,
        borderRadius: 15
    },

    footer: {
        height: 45,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#E1E1E2',
        padding: 10,
        textAlign: 'center',
    },
    textFooter: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#2C3E50',
        padding: 1.5,
        top: 20,
        fontFamily: 'Verdana',
    },
    containerText: {
        flexDirection: 'row',
        marginTop: 10,
        width: '98%',
        height: 40,
        // backgroundColor: 'lightgreen',
        alignSelf: 'center',
    },
    containerTextImput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        height: 40,
        // backgroundColor: 'blue',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    textInput: {
        height: 40,
        width: 290,
        fontSize: 15,
        borderWidth: 1,
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        borderStartColor: '#FFFFFF',
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#0099D8',
        fontStyle: 'italic',
    },
    textTitle: {
        alignSelf: 'flex-start',
        fontSize: 28,
        color: '#2471A3',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    conteinerTitleData: {
        flexDirection: 'row',
        top: '1%',
        alignItems: 'center',
        width: '100%',
        height: 50,
        // backgroundColor: 'purple', // es el contenedor del Titulo X DataBase
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    conteinerSubTitleData: {
        flexDirection: 'row',
        top: '1%',
        alignItems: 'center',
        width: '100%',
        height: 30,
        backgroundColor: 'gray', // es el contenedor del SubTitulo X DataBase
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    textTitleData: {
        alignSelf: 'flex-start',
        fontSize: 20,
        color: '#2471A3',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    textSubTitleData: {
        alignSelf: 'flex-start',
        fontSize: 15,
        color: '#2471A3',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    conteinerData: {
        top: '2%',
        left: 1,
        width: '100%',
        backgroundColor: 'lightgreen',
    },
    box1:{
        backgroundColor: 'purple',
        flexDirection: 'row',
        width: '50%',
        height:'100%',
        alignItems: 'center',
    },
    box2:{
        backgroundColor: 'blue',
        flexDirection: 'row',
        width: '50%',
        height:'100%',
        alignItems: 'center',
    },
    box3:{

    },

    iconStyle: {
        position: 'relative',
        color: 'gray',
        top: 1,
        left: 5
    },
    subIconStyle: {
        color: '#E1E1E2',///---------------------------------------

    },
    containerIcon: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        height: 30,
        width: 35,
        alignItems: 'center',
    },
    containerSubIcon: {
        // backgroundColor: 'orange',
        flexDirection: 'row-reverse',
        height: 25,
        width: 50,
        alignItems: 'center'
    },
    styleButton: {
        // active: 'yellow',
    },
    styleHeaderDataTable: {
        fontSize: 50,
        backgroundColor: 'green'
    }
});
// Autor de código Ing. de Software Andrea Cecilia López González