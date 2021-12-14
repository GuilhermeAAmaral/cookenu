import React, {useState} from 'react'
import {InputsContainer} from './styled'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { createRecipe } from '../../services/recipe'
import { CircularProgress } from '@material-ui/core'

const AddRecipesForm = () => {

    const history = useHistory()

    const [isLoading, setIsLoading] = useState (false)

    const [form, onChange, clear] = useForm({ title: "", description: "", image: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)
         
    }

    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>

                <TextField 
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Título"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"text"}
                    /> 
                    <TextField 
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"Descrição"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                        type={"text"}
                    /> 

                    <TextField 
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={"Foto"}
                        variant={"outlined"}
                        fullWidth
                        margin ={'normal'}
                        required
                    /> 

                    <Button
                        type={"subimit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar</>}
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default AddRecipesForm