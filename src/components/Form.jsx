import React, { Fragment, useState } from 'react'

export function Form() {

    const initialState = {
        firstname:'',
        lastname:'',
        terms: false,
        experience: ''
    }

    const [data, setdata] = useState(initialState)

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        setdata({...data, [name]:value });
    }

    const sendData = (e) =>{
        e.preventDefault();
        console.log(`${data.firstname} ${data.lastname}`);
    }

    return (
        <Fragment>
            <h1>Formulario de contacto</h1>
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" 
                        placeholder="Ingrese su nombre" 
                        className="form-control"
                        name="firstname"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellido:</label>
                    <input type="text" 
                    placeholder="Ingrese su apellido" 
                    name="lastname"
                    className="form-control"
                    onChange={handleInputChange}/>   
                </div>

                <div className="mb-3">
                    <select className="form-select" 
                        value={data.experience} 
                        name="experience"
                        onChange={handleInputChange}>
                        <option selected>Selecciona tu nivel de experiencia</option>
                        <option value="1">Junior</option>
                        <option value="2">Middle</option>
                        <option value="3">Senior</option>
                    </select>
                </div>

                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" 
                        type="checkbox" 
                        value=""
                        name="terms" 
                        id="flexCheckDefault"
                        onChange={handleInputChange}/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Terminos y condiciones
                        </label>
                    </div>
                </div>

                <button className="btn btn-primary">Enviar</button>
            </form>

            <p>{data.firstname} - {data.lastname}</p>

        </Fragment>
    )
}
