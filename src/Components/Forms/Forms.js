
import './Form.css'
import FormItems from './FormItems' 

const Forms = () =>{
    const data =[
        { Text: "Nombre", uri: "Idname" },
        { Text: "Apellido", uri: "Idapellido" },
        { Text: "Correo", uri: "IdCorreo" },
        { Text: "Telefono", uri: "IdTelefono" }
        ]
let formItems = data.map ((u,i)=>{
    return(
        <FormItems
        Text={u.Text}
        uri={u.uri}
        key={i}
        />
    )   

})

return(
    <section class="Conteiner" >
          <section class="Conteiner2" >
              <p> Disfruta de tu descanso en el mejor hotel </p>
    {formItems}
    <input class="Button" type="button" onclick="mensaje('Ha pulsado el botón')" value="Enviar" />
    </section>
    </section>    
);
}

export default Forms