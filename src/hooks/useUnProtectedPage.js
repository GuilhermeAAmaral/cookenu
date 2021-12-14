import { useHistory } from "react-router";
import { useEffect, useLayoutEffect } from "react";
import { goToRecipesList } from "../routers/cordinator";

const useUnProtectedPage = () => {
    const history = useHistory()
    useEffect (() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToRecipesList(history)
        }
    }, [history])
}

export default useUnProtectedPage