import React, { useContext } from 'react'
import UserConext from '../contexts/UserConext';

const SignInButton = ({ formData, showAlert }) => {
    const { login } = useContext(UserConext);
    function onSaveButton() {

        console.log("data = ", formData)
        const emailRegex = new RegExp("^\\S+@\\S+\\.\\S+$");
        if (!(emailRegex.test(formData.userName))) {
            showAlert(true, "User Invalid")
        } else if (!((formData.phoneNo.match('[0-9]{10}')) && formData.phoneNo.length === 10)) {
            showAlert(true, "Invalid Phone Number")
        } else if (formData.password.length === 0) {
            showAlert(true, "Invalid Password")
        } else {
            showAlert(false, "")
            login(formData.userName)
        }

    }
    return (
        <button
            type="button"
            className="btn btn-success"
            onClick={() => onSaveButton()}
        >
            Save Data
        </button>
    )
}

export default SignInButton