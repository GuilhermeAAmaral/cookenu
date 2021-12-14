import React, { useState } from 'react'
import {InputsContainer} from './styled'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const LoginForm = ({rightButtonText, setRightButtonText}) => {

    const [form, onChange, clear] = useForm({ email: "", password: ""})
    const [isLoading, setIsLoading] = useState (false)
    
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
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
                        {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Login</>}
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm