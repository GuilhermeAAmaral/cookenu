import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px auto auto 30px;
`

export const RecipeCardContent = styled.div`
  margin: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`
