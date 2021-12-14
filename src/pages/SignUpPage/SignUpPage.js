import React from 'react'
import { LogoImage, ScreenContainer } from '../LoginPage/styled'
import logo from '../../assets/logo.png'
import SignUpForm from './SignUpForm'



const SignUpPage = ({rightButtonText, setRightButtonText}) => {
    return (
        <ScreenContainer>
            <LogoImage src ={logo} />
            <SignUpForm rightButtonText ={rightButtonText} setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage