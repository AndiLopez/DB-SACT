
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
} from 'react-native';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// Constante 'urlGral' que almacena la direccion URL. La IP http://192.168.0.12 es donde se aloja el proyecto.
// El puerto de comunicación por donde se realiza la comunicación entre el servidor de Back-End de Node.js y el Front-End de React Native.

// Solo e necesario cambiar la IP o en su caso el nuevo HOST donde se aloja la aplicación en el servidor
const urlGetG = 'http://192.168.0.12:4000/T';

export default class ScreenEliminarG extends Component {
    constructor() {
        super();
        this.state = {
            busqueda: '',
            lista: [],

        }
    }

    myAlert() {
        alert('Datos Eliminados');
    }
    componentDidMount() {
        this.getGeneral();
        this.setState({ siglas_busqueda: this.state.lista });
    }

    async getGeneral() {
        try {
            const res = await axios.get(urlGetG);
            // console.log(res.data)
            this.setState({ lista: res.data })
        } catch (error) { console.log(error); }
    }
    async deleteGeneral(id) {
        try {
            const response = await axios.delete(urlGetG + `${id}`);
            const { data } = response
            // console.log(data)
            this.getGeneral()
            this.myAlert()
        } catch (error) {
            console.log(error)
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[styles.content]}>
                        <View style={styles.content2}>

                            <View style={styles.Title}>
                                <Text style={styles.textTitle}>  Eliminar Transformadores </Text>
                            </View>
                            {/* --------------------    Título, Encabezado e Indicaciones --------------*/}

                            <View style={styles.containerIndicaciones}>
                                <View style={styles.iconStyle}>
                                    <Text style={styles.textIndicaciones}>
                                        Indicaciones
                                    </Text>
                                    <Text style={styles.styleSubTitleG}>
                                        Para eliminar todos los datos de una central en específico, haga clic en el botón ELIMINAR que corresponda a la central a eliminar.
                                </Text>
                                </View>
                            </View>
                            <View style={styles.containerCard}>
                                {this.state.lista.map(central => (
                                    <View style={styles.containerCardGris}>
                                        <View key={central.id}>

                                            <View style={styles.containerInfo}>
                                                <Text style={styles.textNegritas}> Siglas Central:   </Text>
                                                <Text style={{ fontSize: 16 }}>{central.siglas_c}</Text>

                                            </View>
                                            <View style={styles.containerInfo}>
                                                <Text style={styles.textNegritas}>Marca:   </Text>
                                                <Text style={{ fontSize: 16 }}>{central.capacidad_kw}</Text>
                                            </View>

                                            <View style={styles.buttonEliminar}>
                                                <Button
                                                    color="red"
                                                    title="Eliminar"
                                                    onPress={() => this.deleteGeneral(central.id)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                ))}

                            </View>

                        </View>
                    </View>

                    <View style={styles.contentSpace} />
                </ScrollView>
                <View style={[styles.footer]}>
                    <Text style={styles.textFooter}>Red Nacional Última Milla S.A.P.I de C.V. Todos los derechos reservados 2021</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#FFFFFF'
        showsVerticalScrollIndicator: false
    },
    container2: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', // '#FFFFFF  purple ',
        width: '94%',
        borderRadius: 15,
        marginTop: 5,
        top: 10
    },
    container3: {
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'skyblue',
        width: '98%',
        alignSelf: 'center',
    },
    container3Button: {
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'skyblue',
        width: 200,
        alignSelf: 'flex-end',
        right: '10%',
        marginTop: '10%'
    },
    contentSpace: {
        alignItems: 'center',
        // backgroundColor: 'yellow',//'#FFFFFF'
        height: 15,
        width: '95%',
        alignSelf: 'center'
    },
    content: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
        // backgroundColor: 'red'
    },
    content2: {
        alignItems: 'center',
        marginBottom: 50,
        backgroundColor: '#FFFFFF', //'#FFFFFF   pink'
        width: '98%',
        height: '105%',
        marginTop: 10,
        borderRadius: 15
    },
    footer: {
        height: 45,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row-reverse0',
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

    containerIndicaciones: {
        flexDirection: 'row',
        marginTop: 10,
        width: '98%',
        height: 90,
        // backgroundColor: 'blue',
        alignSelf: 'center',
    },
    containerCard: {
        flexDirection: 'column',
        marginTop: 10,
        width: '90%',
        // height: 90,
        // backgroundColor: 'green',
        alignSelf: 'center',
        padding: 10,
        marginBottom: 10
    },
    containerCardGris: {
        flexDirection: 'column',
        marginTop: 10,
        width: '80%',
        // height: 90,
        backgroundColor: '#F2F2F2',
        alignSelf: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4

    },
    containerInfo: {
        flexDirection: 'row',
        marginTop: 10,
        width: '98%',
        height: 40,
        // backgroundColor: 'purple',
        // alignSelf: 'center',
    },
    buttonEliminar: {
        marginTop: 10,
        width: 100,
        flexDirection: 'row-reverse'
    },
    textNegritas: {
        fontSize: 20,
        // color: '#2471A3', // #2471A3
        fontWeight: 'bold',
        fontFamily: 'Calibri',
    },

    textTitle: {
        fontSize: 28,
        color: '#2471A3', // #2471A3
        padding: 2,
        fontWeight: 'bold',
        fontFamily: 'Calibri',
    },
    textIndicaciones: {
        alignSelf: 'flex-start',
        fontSize: 20,
        color: '#2196F3',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    iconStyle: {
        position: 'relative',
        color: 'gray',
        top: 1,
        left: 10
    },
    styleSubTitleG: {
        alignSelf: 'flex-start',
        fontSize: 17,
        color: '#454545',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'justify',
        // fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    Title: {
        marginTop: 30,
    }
});
// Autor de código Ing. de Software Andrea Cecilia López González
