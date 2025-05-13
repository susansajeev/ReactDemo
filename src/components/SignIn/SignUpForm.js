import React, { useContext, useState } from 'react'
import SignInButton from './SignInButton'
import Alert from '../Alert'
import useWindowWidth from '../../customcom/UseWindowWidth'
import UserConext from '../contexts/UserConext'
import ListUserData from "../ListUserData";
import ListGroup from "../ListGroup";
import Counter from '../reducer_example/Counter'
import BuggyErrComponent from '../errorboundarycomp/BuggyErrComponent'


const SignUpForm = () => {

    const { user, logOut } = useContext(UserConext)
    const width = useWindowWidth()
    const [message, setMsg] = useState("")
    const [isAlert, setAlert] = useState(false)
    const [form, setForm] = useState(
        {
            userName: "",
            password: "",
            phoneNo: ""
        }
    )
    const [titleSub, setTitle] = useState("Save");
    let countries = [
        "Canada",
        "Germany",
        "India",
        "Australia",
        "Brazil",
        "Japan",
        "South Africa",
    ];
    const handleSelectItem = (country) => {
        console.log("Clicked item in App", country);
        setTitle(country);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log("==== " + name, value)
        console.log("Data = ", form)

    }

    const showErrorAlert = (isShow, msg) => {
        setMsg(msg)
        setAlert(isShow)

    }
    const closeAlert = () => {
        setAlert(false)
    }

    if (!user)
        return (
            <div style={{
                alignItems: 'center',      // vertically
                height: '100vh',
                margin: '40px'          // full viewport height
            }}>
                {isAlert && <Alert onCloseClick={closeAlert}>{message}</Alert>}


                <div className="mb-3" >
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"
                        name="userName" value={form.userName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1"
                        name="password" value={form.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="787909889"
                        name="phoneNo" value={form.phoneNo} onChange={handleChange} />
                </div>
                <br></br>
                <SignInButton formData={form} showAlert={showErrorAlert} ></SignInButton>

                {/* <h5>Width: {width}</h5> */}

            </div>)

    return (
        <div style={{
            alignItems: "center",
            height: "100vh",
            margin: "40px",
        }}>
            <h3>Welcome, {user}!</h3>
            {/* <button onClick={logOut}>Logout</button> */}
            {/* throwing error */}
            {/* <BuggyErrComponent></BuggyErrComponent> */}

            <ListGroup
                countries={countries}
                heading="Country List"
                onSelectItem={handleSelectItem}
            ></ListGroup>


        </div>
    )


}

export default SignUpForm