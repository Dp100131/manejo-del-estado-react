import React from "react";
import { Loading } from "./loading.js";  

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            value: '',
            error: false,
            loading: false

        }

    }

    /* UNSAFE_componentWillMount(){

        console.log('componentWillMount')

    } */

    /* componentWillUnmount(){

        console.log('componentWillUnmount')

    } */

    /* componentDidMount(){

        console.log('componentDidMount')

    } */

    componentDidUpdate(){

        console.log('componentDidUpdate')

        if(this.state.loading){

            setTimeout(() => {

                console.log("Haciendo la validación")
                
                if(SECURITY_CODE === this.state.value){

                    this.setState({ error: false, loading: false })

                }else{

                    this.setState({ error: true, loading: false })

                }

                this.setState({loading: false})
    
                console.log("Terminando la validación")
    
            }, 3000)

        }

    }

    render(){

        const {error, loading, value} = this.state

        return (
            
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>

                {(this.state.error && !this.state.loading) && (

                    <p>Error: el código es incorrecto</p>

                )}

                {this.state.loading && (

                    <Loading />

                )}

                <input

                    onChange={(event) => {

                        this.setState({ value: event.target.value })

                    }}
                
                    placeholder="Código de seguridad"
                
                />

                <button

                    onClick={() => this.setState({loading: true})}

                >comprobar</button>

            </div>

        )

    }


}


export {ClassState}