import { Typography } from '@material-ui/core'
import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddRecipesForm from './AddRecipesForm'
import { ScreenContainer, RecipeContainer } from './styled'



const AddRecipesPage = () => {

    useProtectedPage()
    
    return (
        
        <ScreenContainer>
            <RecipeContainer>
            <Typography gutterBottom align={'center'} variant={'h4'} color={'primary'}>Adicionar Receita</Typography>
            <AddRecipesForm />
            </RecipeContainer>
            
        </ScreenContainer>
    )
}

export default AddRecipesPage