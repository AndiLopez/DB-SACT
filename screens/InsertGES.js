import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView,
    Button,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// Constante 'urlGral' que almacena la direccion URL. La IP http://192.168.0.12 es donde se aloja el proyecto.
// El puerto de comunicación por donde se realiza la comunicación entre el servidor de Back-End de Node.js y el Front-End de React Native.

// Solo e necesario cambiar la IP o en su caso el nuevo HOST donde se aloja la aplicación en el servidor
const baseUrl = 'http://192.168.0.12:4000/1.9';

export default class ScreenInsert extends Component {
    constructor() {
        super();
        this.addGeneral = this.addGeneral.bind(this);

        this.state = {
            lista: [],
            siglas_c: '',
            capacidad_kw: '',
            hrs_duracion: '',
            arr: '',
            combustible: '',
            grupo: '',
            amp_placa: '',
            dem_act_g: '',
            dem_max_g: '',
            por_ocupado_g: '',
            por_ocu_max: '',

        }
    }
        componentDidMount() {
        this.getGeneral();

    }

    async getGeneral() {
        try {
            const res = await axios.get(baseUrl);
            // console.log(res.data)
            this.setState({ lista: res.data })
        } catch (error) { console.log(error); }
    }

    async addGeneral() {
        try {
            const { siglas_c, capacidad_kw, hrs_duracion, arr, combustible, grupo, amp_placa, dem_act_g, dem_max_g, por_ocupado_g, por_ocu_max } = this.state;
            const response = await axios.post(baseUrl, { siglas_c, capacidad_kw, hrs_duracion, arr, combustible, grupo, amp_placa, dem_act_g, dem_max_g, por_ocupado_g, por_ocu_max });
            const { data } = response;
            // console.log(data);
            // this.getProducts();
            this.clearInput();
            this.myAlert();
        } catch (error) {
            console.error(error);
        }
    }

    clearInput() {
        this.setState({
            siglas_c: '',
            capacidad_kw: '',
            hrs_duracion: '',
            arr: '',
            combustible: '',
            grupo: '',
            amp_placa: '',
            dem_act_g: '',
            dem_max_g: '',
            por_ocupado_g: '',
            por_ocu_max: '',
        });
    }
    myAlert(){
        alert('Datos Guardados con Éxito');
    }

    render() {
        const { lista, siglas_c, capacidad_kw, hrs_duracion, arr, combustible, grupo, amp_placa, dem_act_g, dem_max_g, por_ocupado_g, por_ocu_max } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[styles.content]}>
                        <View style={styles.content2}>

                            <View style={styles.Title}>
                                <Text style={styles.textTitle}>  Información GES</Text>
                            </View>
                            <View style={styles.containerIndicaciones}>
                                <View style={styles.iconStyle}>
                                    <Text style={styles.textIndicaciones}>
                                        Indicaciones
                                    </Text>
                                    <Text style={styles.styleSubTitleG}>
                                        Ingrese los datos correspondientes a cada Central que se solicitan a continuación.
                                </Text>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Siglas de Central</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: alm ..."
                                            onChangeText={(siglas_c) => this.setState({ siglas_c })}
                                            value={siglas_c}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Capacidad KW </Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345"
                                            onChangeText={(capacidad_kw) => this.setState({ capacidad_kw })}
                                            value={capacidad_kw}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Horas de Duración</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 0123456789.1"
                                            onChangeText={(hrs_duracion) => this.setState({ hrs_duracion })}
                                            value={hrs_duracion}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>ARR</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 0123456789"
                                            onChangeText={(arr) => this.setState({ arr })}
                                            value={arr}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Combustible</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 01234567891"
                                            onChangeText={(combustible) => this.setState({ combustible })}
                                            value={combustible}
                                        />
                                    </View>
                                </View>
                            </View>

                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Grupo</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 123456"
                                            onChangeText={(grupo) => this.setState({ grupo })}
                                            value={grupo}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AMPS Placa </Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 123456"
                                            onChangeText={(amp_placa) => this.setState({ amp_placa })}
                                            value={amp_placa}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Demanda Actual</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 123456.12"
                                            onChangeText={(dem_act_g) => this.setState({ dem_act_g })}
                                            value={dem_act_g}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Demanda Máxima</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 123456.12"
                                            onChangeText={(dem_max_g) => this.setState({ dem_max_g })}
                                            value={dem_max_g}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>% de Ocupación</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345678.12 "
                                            onChangeText={(por_ocupado_g) => this.setState({ por_ocupado_g })}
                                            value={por_ocupado_g}
                                        />
                                    </View>
                                </View>
                            </View>

                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>% Ocupación Máximo </Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345678.12 "
                                            onChangeText={(por_ocu_max) => this.setState({ por_ocu_max })}
                                            value={por_ocu_max}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.container3Button}>
                                <TouchableOpacity
                                    style={styles.styleButton}
                                    onPress={this.addGeneral}>
                                    <Text style={{ color: '#fff' }}>
                                        Guardar
                                        </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentSpace} />
                </ScrollView>
                <View style={[styles.footer]}>
                    <Text style={styles.textFooter}>Red Nacional Última Milla S.A.P.I de C.V. 2021</Text>
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
    containerText: {
        flexDirection: 'row',
        marginTop: 10,
        width: '98%',
        height: 25,
        // backgroundColor: 'lightgreen',
        alignSelf: 'center',
    },
    containerTextTitle: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 10,
        width: '98%',
        height: 40,
        // backgroundColor: 'lightgreen',
    },
    textTitle: {
        fontSize: 28,
        color: '#2471A3', // #2471A3
        padding: 2,
        fontWeight: 'bold',
        fontFamily: 'Calibri',
    },
    textInput: {
        height: 40,
        width: '100%',
        fontSize: 15,
        borderWidth: 1,
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        borderStartColor: '#FFFFFF',
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#0099D8',
        fontStyle: 'italic',
        borderRadius: 5
    },
    iconStyle: {
        position: 'relative',
        color: 'gray',
        top: 1,
        left: 10
    },
    styleButton: {
        padding: 12,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        borderRadius: 3
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
    },
    containerInput: {
        flexDirection: 'row',
        width: '98%',
        height: 40,
        backgroundColor: 'pink',
        alignSelf: 'center',
    },
    containerIndicaciones: {
        flexDirection: 'row',
        marginTop: 10,
        width: '98%',
        height: 90,
        // backgroundColor: 'blue',
        alignSelf: 'center',
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
    Title: {
        marginTop: 30,
    },
    containerInput: {
        flexDirection: 'row',
        width: '98%',
        height: 40,
        // backgroundColor: 'pink',
        alignSelf: 'center',
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
});

// Autor de código Ing. de Software Andrea Cecilia López González