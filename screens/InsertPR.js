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
const baseUrl = 'http://192.168.0.12:4000/1.5';
const baseUrl2 = 'http://192.168.0.12:4000/1.10';

export default class ScreenInsert extends Component {
    constructor() {
        super();
        this.addGeneral = this.addGeneral.bind(this);
        this.addR = this.addR.bind(this);
        this.state = {
            lista: [],
            siglas_c: '',
            marca_pr: '',
            modelo_pr: '',
            carga_act: '',
            cap_total_pr: '',
            por_ocupado_pr: '',
            ac_actual: '',
            ac_max: '',

            lista2: [],
            marca_r: '',
            modelo_r: '',
            amp_cd: '',
            hilo: '',
            amp_fase: '',
            no_rect: '',
            cd_tot_inst: '',
            tot_pta_cd: '',
            carga_act_cd: '',
            por_ocupacion_r: '',
            ac_actual_r: '',
        }
    }

    componentDidMount() {
        this.getGeneral();
        this.getR();
    }

    async getGeneral() {
        try {
            const res = await axios.get(baseUrl);
            // console.log(res.data)
            this.setState({ lista: res.data })
        } catch (error) { console.log(error); }
    }
    async getR() {
        try {
            const res2 = await axios.get(baseUrl2);
            // console.log(res.data)
            this.setState({ lista2: res2.data2 })
        } catch (error) { console.log(error); }
    }

    async addGeneral() {
        try {
            const { siglas_c, marca_pr, modelo_pr, carga_act, cap_total_pr, por_ocupado_pr, ac_actual, ac_max } = this.state;
            const response = await axios.post(baseUrl, { siglas_c, marca_pr, modelo_pr, carga_act, cap_total_pr, por_ocupado_pr, ac_actual, ac_max });
            const { data } = response;
            console.log(data);
            // this.getProducts();
            this.clearInput();
            this.myAlert();
        } catch (error) {
            console.error(error);
        }
    }
    async getR() {
        try {
            const res = await axios.get(baseUrl);
            // console.log(res.data)
            this.setState({ lista: res.data })
        } catch (error) { console.log(error); }
    }
    async addR() {
        try {
            const { siglas_c, marca_r, modelo_r, amp_cd, hilo, amp_fase, no_rect, cd_tot_inst, tot_pta_cd, carga_act_cd, por_ocupacion_r, ac_actual_r } = this.state;
            const response2 = await axios.post(baseUrl2, { siglas_c, marca_r, modelo_r, amp_cd, hilo, amp_fase, no_rect, cd_tot_inst, tot_pta_cd, carga_act_cd, por_ocupacion_r, ac_actual_r });
            const { data2 } = response2;
            console.log(data2);
            // this.getProducts();
            this.clearInput();
            this.myAlert();
        } catch (error) {
            console.error(error);
        }
    }
    myAlert() {
        alert('Datos Guardados con Éxito');
    }
    clearInput() {
        this.setState({
            siglas_c: '',
            marca_pr: '',
            modelo_pr: '',
            carga_act: '',
            cap_total_pr: '',
            por_ocupado_pr: '',
            ac_actual: '',
            ac_max: '',

            marca_r: '',
            modelo_r: '',
            amp_cd: '',
            hilo: '',
            amp_fase: '',
            no_rect: '',
            cd_tot_inst: '',
            tot_pta_cd: '',
            carga_act_cd: '',
            por_ocupacion_r: '',
            ac_actual_r: '',
        });
    }

    render() {
        const { lista, siglas_c, marca_pr, modelo_pr, carga_act, cap_total_pr, por_ocupado_pr, ac_actual, ac_max, lista2,  marca_r, modelo_r, amp_cd, hilo, amp_fase, no_rect, cd_tot_inst, tot_pta_cd, carga_act_cd, por_ocupacion_r, ac_actual_r } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[styles.content]}>
                        <View style={styles.content2}>

                            <View style={styles.Title}>
                                <Text style={styles.textTitle}>  Información Planta Rectificadores</Text>
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
                                        <Text>Marca</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: FMOP-52MEX....:"
                                            onChangeText={(marca_pr) => this.setState({ marca_pr })}
                                            value={marca_pr}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Modelo</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: FMOP-600MEX...."
                                            onChangeText={(modelo_pr) => this.setState({ modelo_pr })}
                                            value={modelo_pr}
                                        />
                                    </View>
                                </View>
                            </View>

                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Carga Actual</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 1234.1"
                                            onChangeText={(carga_act) => this.setState({ carga_act })}
                                            value={carga_act}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Capacidad Total </Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 1234.1"
                                            onChangeText={(cap_total_pr) => this.setState({ cap_total_pr })}
                                            value={cap_total_pr}
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
                                            placeholder="Ej: 100"
                                            onChangeText={(por_ocupado_pr) => this.setState({ por_ocupado_pr })}
                                            value={por_ocupado_pr}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AC Actual</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 123.5"
                                            onChangeText={(ac_actual) => this.setState({ ac_actual })}
                                            value={ac_actual}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AC Máxima</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 123.12"
                                            onChangeText={(ac_max) => this.setState({ ac_max })}
                                            value={ac_max}
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
{/* ----------------------------Aquí empieza la parte de Rectificadores ----------------- */}
                            <View style={styles.Title}>
                                <Text style={styles.textTitle}>  Información Rectificadores</Text>
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
                                        <Text>Marca</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: INTERGY"
                                            onChangeText={(marca_r) => this.setState({ marca_r })}
                                            value={marca_r}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Modelo</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: CXRF HP 48-2KW"
                                            onChangeText={(modelo_r) => this.setState({ modelo_r })}
                                            value={modelo_r}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AMP de CD</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 1234"
                                            onChangeText={(amp_cd) => this.setState({ amp_cd })}
                                            value={amp_cd}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Hilos</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 1234"
                                            onChangeText={(hilo) => this.setState({ hilo })}
                                            value={hilo}
                                        />
                                    </View>
                                </View>
                            </View>

                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AMP x Fase </Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 1234"
                                            onChangeText={(amp_fase) => this.setState({ amp_fase })}
                                            value={amp_fase}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Número de Rectificadores</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 1234"
                                            onChangeText={(no_rect) => this.setState({ no_rect })}
                                            value={no_rect}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>CD Total Instalada</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345678.1"
                                            onChangeText={(cd_tot_inst) => this.setState({ cd_tot_inst })}
                                            value={cd_tot_inst}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AMP de CA Total para Transformar a CD </Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345678.1"
                                            onChangeText={(tot_pta_cd) => this.setState({ tot_pta_cd })}
                                            value={tot_pta_cd}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>Carga Actual de CD</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345678 "
                                            onChangeText={(carga_act_cd) => this.setState({ carga_act_cd })}
                                            value={carga_act_cd}
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
                                            placeholder="Ej: 12345678 "
                                            onChangeText={(por_ocupacion_r) => this.setState({ por_ocupacion_r })}
                                            value={por_ocupacion_r}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* -------------   Sección de Input con Título correspondiente -------- */}
                            <View style={styles.container2}>
                                <View style={styles.container3}>
                                    <View style={styles.containerText}>
                                        <Text>AC Actual</Text>
                                    </View>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder="Ej: 12345678.1 "
                                            onChangeText={(ac_actual_r) => this.setState({ ac_actual_r })}
                                            value={ac_actual_r}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.container3Button}>
                                <TouchableOpacity
                                    style={styles.styleButton}
                                    onPress={this.addR}>
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
        color: '#2471A3', // 
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
        padding: 12,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        borderRadius: 3
    },
    styleHeaderDataTable: {
        fontSize: 50,
        backgroundColor: 'green',
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
        // backgroundColor: 'pink',
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
});
// Autor de código Ing. de Software Andrea Cecilia López González