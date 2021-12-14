import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import RecipeCard from './RecipeCard'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constantes/urls'
import { RecipeCardContainer, AddRecipeButton } from './styled'
import {Add} from '@material-ui/icons'
import { goToAddRecipes, goToRecipeDetail } from '../../routers/cordinator'
import { useHistory } from 'react-router-dom'
import Loading from '../../components/Header/Loading.js/Loading'


const RecipesListPage = () => {

    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)


    const onClickCard = (id) => {
        goToRecipeDetail(history, id)
    }

    const recipeCards = recipes.map ((recipe) => {
        return(
            <RecipeCard
            key= {recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClickCard={onClickCard}
            recipe={recipe.recipe_id}
            />
        )
    })

    return (

        <RecipeCardContainer>
            {recipeCards.length > 0 ? recipeCards : <Loading/>} 
            <AddRecipeButton
            color={'primary'}
            onClick={() => goToAddRecipes(history)}
            ><Add/></AddRecipeButton>
        </RecipeCardContainer>
    )
}

export default RecipesListPage