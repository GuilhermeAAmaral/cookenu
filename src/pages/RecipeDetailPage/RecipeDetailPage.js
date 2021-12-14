import { Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Header/Loading.js/Loading'
import { BASE_URL } from '../../constantes/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { RecipeContainer, ScreenContainer, RecipeImage } from './styled'


const RecipeDetailPage = () => {

    useProtectedPage()
    const params = useParams()

    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}` )[0]
    console.log (recipe)
    
    return(
        
        <ScreenContainer>
            {recipe ?
                <RecipeContainer> 
                <RecipeImage src={recipe && recipe.image} />
                <Typography gutterBottom algin={'center'} variante={'h5'} color={'primary'}>{recipe && recipe.title}</Typography>
                <Typography gutterBottom algin={'center'}>{recipe && recipe.description}</Typography>
                </RecipeContainer>
            :
            <Loading />}
        </ScreenContainer>
    )
}

export default RecipeDetailPage