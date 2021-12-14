import React, {useState} from 'react'
import {InputsContainer} from './styled'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'
import { CircularProgress } from '@material-ui/core'

const SignUpForm = ({rightButtonText, setRightButtonText}) => {

    const history = useHistory()

    const [isLoading, setIsLoading] = useState (false)

    const [form, onChange, clear] = useForm({ name: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log (form)
        signUp(form, clear, history, setRightButtonText, setIsLoading)
    }


    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>

                <TextField 
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"text"}
                    /> 
                    <TextField 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"email"}
                    /> 

                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"password"}
                    /> 

                    <Button
                        type={"subimit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Cadastre</>}
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default SignUpForm