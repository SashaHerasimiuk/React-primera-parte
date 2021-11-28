import '../Styles/Components/Pages/Contacto.css'
const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="number" name="telefono" />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar">
                        <input type="submit" value="enviar"/>
                    </p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono:123456789</li>
                    <li>Email:</li>
                    <li>Facebook:</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagramr</li>
                </ul>
            </div> 
        </main>
    );
}

export  default ContactoPage;