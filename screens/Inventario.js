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



//  Constantes de la Tabla General
const columns = [
    {
        name: 'Nombre de Área',
        selector: 'nom_area',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Nombre de Central',
        selector: 'nom_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const columns1 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Dirección',
        selector: 'direccion',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const columns2 = [

    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Categoría',
        selector: 'categoria',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'RPU',
        selector: 'rpu',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'No. Medidor',
        selector: 'no_medidor',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },

]
const columns3 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Inventario de Líneas',
        selector: 'inv_linea',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'POTS',
        selector: 'n_pot',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'ADSL',
        selector: 'adsl',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    }
]

// ----------------  Área de Corriente Directa  ------------------
//  Constantes Tabla Planta de Rectificación

const columns4 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Carga Actual (AMP)',
        selector: 'carga_act',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad Total (AMP))',
        selector: 'cap_total_pr',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupado_pr',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },

]
const columns5 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AC Actual (AMP)',
        selector: 'ac_actual',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AC Máxima (AMP)',
        selector: 'ac_max',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns6 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_pr',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_pr',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

// Constantes Tabla Baterias
const columns7 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'No. Bancos',
        selector: 'no_bancos',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad Total (A.H)',
        selector: 'cap_total',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Fecha de Produción',
        selector: 'fecha_prod',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns8 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Horas de Respaldo',
        selector: 'hrs_respaldo',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_b',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_b',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

// Constantes para  CA
// Apartado de CA y Demanda Calculada
const columns9 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Medición CA',
        selector: 'medicion',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda Actual (AMP)',
        selector: 'dem_actual',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda Media (AMP)',
        selector: 'dem_media',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda Máxima (AMP)',
        selector: 'dem_max',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
// Constantes Tabla Transormadores
const columns10 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad (-)',
        selector: 'capacidad',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMP CA',
        selector: 'amp', // podría cambiar este requisito ( no se sabe si AMP corresponda a la CA)
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupacion_t',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns11 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_t',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_t',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
// Constantes Tabla Completa de Tipo Grupo Electrógeno
//  Esta constante abarca 3 rubros Tipo Motor || Tipo Generador || Probablemente Tipo Grupo Electrógeno --> Todos están en una misma tabla "info_tipo_ges"
const columns12 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Tipo',
        selector: 'tipo',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad (KW ?)',
        selector: 'capacidad_tg',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMP CA',
        selector: 'amp_ca',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupacion_tg',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },

    {
        name: 'Marca',
        selector: 'marca_tg',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_tg',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

// Constantes Tabla completa de Transformadores

const columns13 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Medidor',
        selector: 'nom_medidor',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_t',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_t',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const columns14 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad',
        selector: 'capacidad',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'VOLT',
        selector: 'voltaje',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'KVA',
        selector: 'kva',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'KW',
        selector: 'kw',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const columns15 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMPS',
        selector: 'amp',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Fases',
        selector: 'fases',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda (AMP)',
        selector: 'demanda',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupacion_t',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
// ----------------- GES
// Constantes que se incluyes en la tabla de GES provienen de la tabla Tipo Grupo Electrógeno
//  Esta constante abarca 3 rubros Tipo Motor || Tipo Generador || Probablemente Tipo Grupo Electrógeno --> Todos están en una misma tabla "info_tipo_ge"
//  Complementan en su totalidad (como la vista de Excel) la tabla de GES
const columnsITGE = [ // columnasInfoTipoGE
    {
        name: 'Siglas de Central',
        selector: 'siglas_c',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Tipo',
        selector: 'tipo_ge',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad',
        selector: 'capacidad_ge',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMP CA',
        selector: 'amp_ca',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupacion_ge',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_ge',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_ge',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]


// Constantes Tabla GES (solo están los registros fijos en la tabla GES)
const columns16 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad (KW)',
        selector: 'capacidad_kw',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Placa (AMPS)',
        selector: 'amp_placa',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const columns17 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda Actual (AMP)',
        selector: 'dem_act_g',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda Máxima (AMP)',
        selector: 'dem_max_g',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns18 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación (AMP)',
        selector: 'por_ocupado_g',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación Máxima (AMP)',
        selector: 'por_ocu_max',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns19 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Horas de Duración',
        selector: 'hrs_duracion',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Arranques (ARR)',
        selector: 'arr',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns20 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Combustible (LTS)',
        selector: 'combustible',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Grupo',
        selector: 'grupo',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

// Constantes Tabla Completa de Baterías
const columns21 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Demanda CD',
        selector: 'dem_cd',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_b',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_b', // hay un error , no se muestra el valor
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns22 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },

    {
        name: 'Capacidad',
        selector: 'capacidad_b',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Capacidad Total',
        selector: 'cap_total',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'No. Bancos',
        selector: 'no_bancos',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },

]
// Las constante es complemento de tabla baterías, proviene de la tabla produccion_bcos
// Constante Tabla Producción de Bancos (**puede tener una central >2 bancos)
const columns0 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_c',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Nombre de Banco',
        selector: 'tipo_banco',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Fecha de Producción',
        selector: 'fecha_produccion', // podría cambiar este requisito ( no se sabe si AMP corresponda a la CA)
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns23 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Horas de Respaldo',
        selector: 'hrs_respaldo',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Fecha de Produción',
        selector: 'fecha_prod', // puede ser este campo
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Años',
        selector: 'year', // o este campo
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

// Constantes Tabla Completa Rectificadores
const columns24 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Marca',
        selector: 'marca_r',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Modelo',
        selector: 'modelo_r',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns25 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMPS CD SAL',
        selector: 'amp_cd',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Hilos',
        selector: 'hilo',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMPS X Fase',
        selector: 'amp_fase',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]
const columns26 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Cantidad Rectificadores',
        selector: 'no_rect',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'CD Total Instalada (AMP)',
        selector: 'cd_tot_inst',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AMP de CA Total para transformar a CD',
        selector: 'tot_pta_cd',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const columns27 = [
    {
        name: 'Siglas de Central',
        selector: 'siglas_central',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'Carga Actual CD',
        selector: 'carga_act_cd',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: '% Ocupación',
        selector: 'por_ocupacion_r',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
    {
        name: 'AC Actual (AMP)',
        selector: 'ac_actual_r',
        style: { fontSize: 15, fontWeight: 'blod', color: 'gray' },
        soportable: true
    },
]

const url = 'http://192.168.0.12:4000/1';
const url1 = 'http://192.168.0.12:4000/1.1';
const url2 = 'http://192.168.0.12:4000/1.2';

// const url = 'http://192.168.43.238:4000/1';
// const url1 = 'http://192.168.43.238:4000/1.1';
// const url2 = 'http://192.168.43.238:4000/1.2';

export default class Inventario extends Component {
    constructor() {
        super();
        this.state = {
            busqueda: '',
            lista: [],
            lista1: [],
            lista2: [],
        }
    }

    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });

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
                item.nom_central.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda)
            ) {
                return item;
            }
        });
        this.setState({ siglas_busqueda: search })
    }
    filtrarElementos1 = () => {
        // Tabla de Información Tipo GES
        var search1 = this.state.lista1.filter(item => {
            if (
                item.siglas_c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda)
                || item.nom_central.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda)
            ) {
                return item;
            }
        });
        this.setState({ siglas_busqueda1: search1 })
    }
    filtrarElementos2 = () => {
        // Tabla de Producción de Bancos
        var search2 = this.state.lista2.filter(item => {
            if (
                item.siglas_c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda)
                || item.nom_central.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda)

            ) {
                return item;
            }
        });
        this.setState({ siglas_busqueda2: search2 })
    }

    _renderData = async e => {
        e.persist();
        this.filtrarElementos();
        this.filtrarElementos1();
        this.filtrarElementos2();
        <Text>{this.state.siglas_central}</Text>
    }
    componentDidMount() {
        this.getGeneral();
        this.setState({ siglas_busqueda: this.state.lista });
        this.getInfoTGES();
        this.setState({ siglas_busqueda1: this.state.lista1 });
        this.getInfoBCOS();
        this.setState({ siglas_busqueda2: this.state.lista2 });
    }

    async getGeneral() {
        // 192.168.43.238
        try {
            const res = await axios.get(url);
            console.log(res.data)
            this.setState({ lista: res.data })
        } catch (error) { console.log(error); }
    }

    async getInfoTGES() {
        // info tipo ge
        try {
            const res1 = await axios.get(url1);
            console.log(res1.data)
            this.setState({ lista1: res1.data })
        } catch (error) { console.log(error); }
    }
    async getInfoBCOS() {
        // produccion bancos
        try {
            const res2 = await axios.get(url2);
            console.log(res2.data)
            this.setState({ lista2: res2.data })
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
                                <Text style={styles.textTitle}> Inventario de Central </Text>
                            </View>

                            <View style={styles.containerTextImput}>
                                <TextInput style={styles.textInput}
                                    placeholder='Buscar centrales por siglas, nombre, área'
                                    value={this.state.busqueda}
                                    onChange={this.onChange}
                                />
                                <Button
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

                                <View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns1}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />

                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns2}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns3}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                </View>

                                {/*  ----------  Corriente Directa  ---------- */}


                                {/*  ----- Planta de Rectificación  -----*/}
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

                                <View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns4}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns5}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns6}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                </View>

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
                                        Baterías General
                                    </Text>
                                </View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns21}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns22}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>

                            <View style={styles.conteinerTitleData}>
                                <View style={styles.containerSubIcon} />
                                <View style={styles.containerSubIcon} />
                                <Text style={styles.textSubTitleDataLight}>
                                    Producción de Bancos
                                    </Text>
                            </View>
                            {/* ---------------------------------- Tipo  de Bancos tabla interna de Baterías----- */}
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns0}
                                    data={this.state.siglas_busqueda2}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>

                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns23}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>

                            {/* ----- CA ----- */}


                            <View style={styles.conteinerTitleData}>

                                <View style={styles.containerIcon}>
                                    < Icon
                                        name='check-circle'
                                        size={28}
                                        style={styles.iconStyle}
                                    />
                                </View>

                                <Text style={styles.textTitleData}>
                                    Corriente Alterna
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
                                    Demanda Calculada
                                    </Text>
                            </View>

                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns9}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
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
                                    Transformadores General
                                    </Text>
                            </View>


                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns13}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns14}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns15}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>

                            {/* ----- GES----- */}

                            <View style={styles.conteinerTitleData}>
                                <View style={styles.containerSubIcon}>
                                    < Icon
                                        name='check'
                                        size={14}
                                        style={styles.subIconStyle}
                                    />
                                </View>

                                <Text style={styles.textSubTitleData}>
                                    GES General
                                    </Text>
                            </View>
                            <View style={styles.conteinerTitleData}>
                                <View style={styles.containerSubIcon} />
                                <View style={styles.containerSubIcon} />

                                <Text style={styles.textSubTitleDataLight}>
                                    Información G.E - Motor - Generador
                                </Text>
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columnsITGE}
                                    data={this.state.siglas_busqueda1}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>

                            <View style={styles.conteinerTitleData}>
                                <View style={styles.containerSubIcon} />
                                <View style={styles.containerSubIcon} />

                                <Text style={styles.textSubTitleDataLight}>
                                    General GES
                                </Text>
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns16}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns17}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns18}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns19}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>
                            <View>
                                <DataTable
                                    style={styles.styleDT}
                                    columns={columns20}
                                    data={this.state.siglas_busqueda}
                                    noDataComponent={<Text> Sin Información </Text>}
                                />
                            </View>


                            <View>

                                {/* ----- Rectificadores ----- */}

                                <View style={styles.conteinerTitleData}>
                                    <View style={styles.containerIcon}>
                                        < Icon
                                            name='check-circle'
                                            size={28}
                                            style={styles.iconStyle}
                                        />
                                    </View>

                                    <Text style={styles.textTitleData}>
                                        Rectificadores
                                    </Text>
                                </View>
                                <View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns24}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                </View>
                                <View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns25}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                </View>
                                <View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns26}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                </View>
                                <View>
                                    <DataTable
                                        style={styles.styleDT}
                                        columns={columns27}
                                        data={this.state.siglas_busqueda}
                                        noDataComponent={<Text> Sin Información </Text>}
                                    />
                                </View>

                                <View style={styles.contentSpace} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentSpace} />
                    <View style={[styles.footer]}>
                        <Text style={styles.textFooter}>Red Nacional Última Milla S.A.P.I de C.V. Todos los derechos reservados 2021</Text>
                    </View>

                </ScrollView>
            </View >
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
        backgroundColor: '#FFFFFF',
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
        // margintop: 60

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
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#333',
        marginBottom: 10
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
        alignItems: 'center',
        width: '100%',
        height: 30,
        // backgroundColor: 'purple', // es el contenedor del Titulo X DataBase
        alignItems: 'flex-start',
        // alignSelf: 'center',
    },
    conteinerButton: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        width: '95%',
        height: 60,
        backgroundColor: 'purple', // es el contenedor del Titulo X DataBase
        alignItems: 'flex-end',
    },
    textTitleData: {
        alignSelf: 'flex-start',
        fontSize: 22,
        color: '#1A5276',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    textSubTitleData: {
        alignSelf: 'flex-start',
        fontSize: 17,
        color: '#2471A3',
        justifyContent: 'center',
        padding: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    textSubTitleDataLight: {
        alignSelf: 'flex-start',
        fontSize: 17,
        color: '#2196F3',
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
        backgroundColor: 'green', // es el contenedor de la DataBase '#ABEBC6'
    },
    styleDT: {
        fontSize: 50,
    },
    iconStyle: {
        position: 'relative',
        color: 'gray',
        top: 1,
        left: 5
    },
    subIconStyle: {
        color: 'gray',
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
    styleButtonAceptar: {
        height: 40,
        backgroundColor: 'pink',
    }
});
// Autor de código Ing. de Software Andrea Cecilia López González