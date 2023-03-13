import React from "react";

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {

    const [state, setState] = React.useState({

        value:'',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false

    })

    /* const [error, setError] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const [value, setValue] = React.useState(''); */

    React.useEffect(() => {

        console.log("Empezando el efecto")

        if(state.loading){

            setTimeout(() => {

                console.log("Haciendo la validación")
                
                if(state.value === SECURITY_CODE){

                    setState({

                        ...state,
                        loading: false,
                        error: false,
                        confirmed:true

                    })

                }else{

                    setState({

                        ...state,
                        loading: false,
                        error: true

                    })

                    console.log(state.error)

                }

                console.log("Terminando la validación")
    
            }, 3000)

        }

        console.log("Terminando el efecto")

    }, [state.loading])

    console.log(state)

   if(!state.deleted && !state.confirmed){

        return (
            
            <div>

                <h2>Eliminar {name}</h2>

                <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
                
                {(state.error && !state.loading) && (

                    <p>Error: el código es incorrecto</p>

                )}

                {state.loading && (

                    <p>Cargando...</p>

                )}

                <input 
                    
                    placeholder="Código de seguridad" 
                    value={state.value}
                    onChange={(event) => {

                        setState({
                        
                            ...state,
                            value: event.target.value
                        
                        })

                    }}
                
                />

                <button
                
                    onClick={() => {
                        /* setError(false) */

                        setState({ 
                        
                            ...state,
                            loading: !state.loading 
                        
                        })


                    }}
            
                >comprobar</button>

            </div>

        )

   }else if (state.confirmed && !state.deleted){
        return (

            <React.Fragment>
                <p>¿Seguro que quieres eliminar?</p>
                <button
                
                    onClick={() => {

                        setState({
                            ...state,
                            deleted: true
                        })

                    }}
                
                >Si, eliminar</button>
                <button

                    onClick={ () =>{

                        setState({

                            ...state,
                            confirmed: false,
                            value: ''

                        })

                    } }

                >No, regresar</button>
            </React.Fragment>

        )
   }else{
        return (

            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button

                    onClick={ () =>{

                        setState({

                            ...state,
                            confirmed: false,
                            deleted: false,
                            value: ''

                        })

                    } }

                >Resetear</button>
            </React.Fragment>

        )
   }
    
}


export {UseState}