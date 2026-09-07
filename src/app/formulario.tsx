import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
  
export default function Formulario() {  
  
  const [nombre, setNombre] = useState('');  
  const [edad, setEdad] = useState('');  
  const [email, setEmail] = useState('');  
  const [telefono, setTelefono] = useState('');  
  const [ocupacion, setOcupacion] = useState('');  
  const [direccion, setDireccion] = useState('');  
  
  const [editar, setEditar] = useState(false);  
  
  // Por defecto se pone que no es mayor de edad 
  let mayorEdad = 'No';  
  
  if (Number(edad) >= 18) {  
    mayorEdad = 'Sí';  
  }  
  
  const guardar = () => {  
  
    if (nombre === '') {  
      alert('El nombre es obligatorio');  
      return;  
    }  
  
    if (edad === '') {  
      alert('La edad es obligatoria');  
      return;  
    }  
  
    if (Number(edad) <= 0) {  
      alert('La edad debe ser mayor a 0');  
      return;  
    }  
  
    if (email === '') {  
      alert('El email es obligatorio');  
      return;  
    }  
  
    if (!email.includes('@')) {  
      alert('El email debe contener @');  
      return;  
    }  
  
    if (telefono === '') {  
      alert('El teléfono es obligatorio');  
      return;  
    }  
  
    if (isNaN(Number(telefono))) {  
      alert('El teléfono debe contener solamente números');  
      return;  
    }  
  
    if (ocupacion === '') {  
      alert('La ocupación es obligatoria');  
      return;  
    }  
  
    if (direccion === '') {  
      alert('La dirección es obligatoria');  
      return;  
    }  
  
    setEditar(false);  
  };  
  
  return (  
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
  
      <Text style={styles.titulo}>Formulario</Text>  
  
      {!editar ? (  
  
        <View style={styles.tarjeta}>  
  
          <Text style={styles.dato}>Nombre: {nombre}</Text>  
  
          <Text style={styles.dato}>Edad: {edad}</Text>  
  
          <Text style={styles.dato}>Mayor de edad: {mayorEdad}</Text>  
  
          <Text style={styles.dato}>Email: {email}</Text>  
  
          <Text style={styles.dato}>Teléfono: {telefono}</Text>  
  
          <Text style={styles.dato}>Ocupación: {ocupacion}</Text>  
  
          <Text style={styles.dato}>Dirección: {direccion}</Text>  
  
          <View style={styles.boton}>  
            <Button  
              title="Cambiar"  
              onPress={() => setEditar(true)}  
              color="#C982A5"  
            />  
          </View>  
  
        </View>  
  
      ) : (  
  
        <View style={styles.formulario}>  
  
          <Text style={styles.etiqueta}>Nombre:</Text>  
          <TextInput  
            style={styles.input}  
            value={nombre}  
            onChangeText={setNombre}  
            maxLength={30}  
          />  
  
          <Text style={styles.etiqueta}>Edad:</Text>  
          <TextInput  
            style={styles.input}  
            value={edad}  
            onChangeText={setEdad}  
            keyboardType="numeric"  
            maxLength={3}  
          />  
  
          <Text style={styles.mayor}>Mayor de edad: {mayorEdad}</Text>  
  
          <Text style={styles.etiqueta}>Email:</Text>  
          <TextInput  
            style={styles.input}  
            value={email}  
            onChangeText={setEmail}  
            keyboardType="email-address"  
            maxLength={50}  
          />  
  
          <Text style={styles.etiqueta}>Teléfono:</Text>  
          <TextInput  
            style={styles.input}  
            value={telefono}  
            onChangeText={setTelefono}  
            keyboardType="numeric"  
            maxLength={10}  
          />  
  
          <Text style={styles.etiqueta}>Ocupación:</Text>  
          <TextInput  
            style={styles.input}  
            value={ocupacion}  
            onChangeText={setOcupacion}  
            maxLength={30}  
          />  
  
          <Text style={styles.etiqueta}>Dirección:</Text>  
          <TextInput  
            style={styles.input}  
            value={direccion}  
            onChangeText={setDireccion}  
            maxLength={50}  
          />  
  
          <View style={styles.botonGuardar}>  
            <Button  
              title="Guardar"  
              onPress={guardar}  
              color="#C982A5"  
            />  
          </View>  
  
        </View>  
  
      )}  
  
    </ScrollView>  
  );  
}  
  
const styles = StyleSheet.create({  
  
  container: {  
    flex: 1,  
    padding: 25,  
    justifyContent: 'center',  
    backgroundColor: '#FCEEF5',  
  },  
  
  titulo: {  
    fontSize: 32,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    marginBottom: 28,  
    color: '#B56B8C',  
  },  
  
  tarjeta: {  
    backgroundColor: '#FFF8FB',  
    padding: 22,  
    borderRadius: 22,  
    borderWidth: 1,  
    borderColor: '#EBC7D7',  
    shadowColor: '#B56B8C',  
    shadowOffset: {  
      width: 0,  
      height: 4,  
    },  
    shadowOpacity: 0.15,  
    shadowRadius: 8,  
    elevation: 5,  
  },  
  
  dato: {  
    fontSize: 17,  
    color: '#704C5D',  
    backgroundColor: '#FBE7F0',  
    padding: 12,  
    marginBottom: 9,  
    borderRadius: 12,  
    fontWeight: '500',  
  },  
  
  etiqueta: {  
    fontSize: 15,  
    fontWeight: 'bold',  
    color: '#8E5C73',  
    marginLeft: 4,  
    marginBottom: 3,  
  },  
  
  input: {  
    backgroundColor: '#FFF8FB',  
    borderWidth: 1,  
    borderColor: '#E3B8CB',  
    paddingHorizontal: 15,  
    marginBottom: 13,  
    borderRadius: 14,  
    height: 46,  
    fontSize: 16,  
    color: '#704C5D',  
  },  
  
  mayor: {  
    fontSize: 15,  
    fontWeight: 'bold',  
    color: '#B56B8C',  
    backgroundColor: '#FBE7F0',  
    padding: 10,  
    borderRadius: 12,  
    marginBottom: 13,  
  },  
  
  formulario: {  
    backgroundColor: '#FFF8FB',  
    padding: 20,  
    borderRadius: 22,  
    borderWidth: 1,  
    borderColor: '#EBC7D7',  
  },  
  
  boton: {  
    marginTop: 15,  
    borderRadius: 14,  
    overflow: 'hidden',  
  },  
  
  botonGuardar: {  
    marginTop: 8,  
    borderRadius: 14,  
    overflow: 'hidden',  
  },  
   scroll: {
    backgroundColor: '#FCEEF5',
  },
  
});