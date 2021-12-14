import React from 'react'
import { LogoImage, ScreenContainer, InputsContainer, SignUpButtonContainer } from './styled'
import logo from '../../assets/logo.png'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import {goToSingUp} from '../../routers/cordinator'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'

const LoginPage = ({rightButtonText, setRightButtonText}) => {
    
    useUnProtectedPage()
    const history = useHistory()

    return (
        
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm rightButtonText ={rightButtonText} setRightButtonText={setRightButtonText}/>
    
                <SignUpButtonContainer>
                <Button onClick ={() => goToSingUp(history)}
                    type={"subimit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se!
                </Button>
                </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage