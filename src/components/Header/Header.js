import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled'
import {goToRecipesList, goToLogin} from '../../routers/cordinator'
import { useHistory } from 'react-router'


const Header = ({rightButtonText, setRightButtonText}) => {

  const history = useHistory()
  const token = localStorage.getItem ("token")
  
  const logout = () => {
    localStorage.removeItem ("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout ()
      setRightButtonText ("Login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
            <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
            <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header