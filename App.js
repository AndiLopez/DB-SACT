import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Inventario from './screens/Inventario';
import Busqueda from './screens/Busqueda';
import MenuInsert from './screens/MenuInsert';
import MenuDelete from './screens/MenuDelete';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Búsqueda rápida" component={Busqueda} />
        <Drawer.Screen name="Inventario de Centrales" component={Inventario} />
        <Drawer.Screen name="Agregar Centrales" component={MenuInsert} />
        <Drawer.Screen name="Eliminar Datos" component={MenuDelete} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// Autor de código Ing. de Software Andrea Cecilia López González