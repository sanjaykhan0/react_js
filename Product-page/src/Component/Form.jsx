import React, { useState } from "react";

export default function Form() {
    const [fname, setfName] = useState('');
    const [fnamearr, setfNamearr] = useState('');
    const [lname, setlName] = useState('');
    const [lnamearr, setlNamearr] = useState('');
    const [email, setEmail] = useState('');
    const [emailarr, setEmailarr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordarr, setPasswordarr] = useState('');
    const [categoryform, setCategoryForm] = useState(''); // Initialize categoryform

    const handlesubmit = (e) => {
        e.preventDefault();

        if (fname === '') {
           if(fname === ''){
            setfNamearr('enter first name !');
           }
        }
        else{
            setfNamearr('');
        }

        if (lname === '') {
            setlNamearr('enter last name !');
        }
        else{
            setlNamearr('');
        }

         if (email === '') {
            setEmailarr('enter email !');
        }
        else{
            setEmailarr('');
        }

         if (password === '') {
            setPasswordarr('enter password !');
        }
        else {
            
            setPasswordarr(' ');



        }

    };
    const [formclose,setFormclose]=useState({display:"block", width: "100%", padding: "8px 20px" })

    let handleformclose=()=>{
        setFormclose({display:"none", width: "100%", padding: "8px"})
    }
    
    return (
        <div style={formclose}>
            <div className="formcolor"></div>
            <form action="" style={{ padding: "20px" }} onSubmit={(e)=>handlesubmit(e)}>

                <input
                    type="text"
                    placeholder="First Name"
                    style={{ width: "100%", padding: "8px 20px" }}
                    onChange={(e) => setfName(e.target.value)}
                />{" "}
                <br />
                <font style={{color:'red'}}>{fnamearr}</font>



                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    style={{ width: "100%", padding: "8px 20px" }}
                    onChange={(e) => setlName(e.target.value)}
                />{" "}
                <br />
                <font style={{color:'red'}}>{lnamearr}    </font>

                <br />
                <input
                    type="text"
                    placeholder="Email"
                    style={{ width: "100%", padding: "8px 20px" }}
                    onChange={(e) => setEmail(e.target.value)}
                />{" "}
                <br />
                <font style={{color:'red'}}>{emailarr}</font>
                <br />
                <input
                    type="text"
                    placeholder="Password"
                    style={{ width: "100%", padding: "8px 20px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br />
                <font style={{color:'red'}}>{passwordarr}</font>

                <br />

                <select
                    style={{ width: "100%", padding: "8px 20px" }}
                    onChange={(e) => setCategoryForm(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="mobile">mobile</option>
                    <option value="laptop">laptop</option>
                    <option value="Electric">Electric</option>
                </select>
                <br />
                <br />
                {categoryform === "mobile" && (
                    <div>
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="mobile brand"
                        />{" "}
                        <br />
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="mobile model"
                        />{" "}
                        <br />
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="mobile price"
                        />{" "}
                        <br />
                    </div>
                )}
                {categoryform === "laptop" && (
                    <div>
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="laptop brand"
                        />{" "}
                        <br />
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="laptop model"
                        />{" "}
                        <br />
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="laptop price"
                        />{" "}
                        <br />
                    </div>
                )}
                {categoryform === "Electric" && (
                    <div>
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="Electric brand"
                        />{" "}
                        <br />
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="Electric model"
                        />{" "}
                        <br />
                        <input
                            style={{
                                width: "100%",
                                padding: "8px 20px",
                                marginTop: "10px",
                                color: "rgba(128, 128, 128, 0.431)",
                            }}
                            type="text"
                            placeholder="Electric price"
                        />{" "}
                        <br />
                    </div>
                )}
                <br />

                <button type="submit" style={{ width: "100%", padding: "8px 20px" }}>
                    Submit
                </button>

                <br /><br />
                <button type="submit"  onClick={handleformclose} style={{ width: "100%", padding: "8px 20px" }} >
                    close
                </button>
            </form>
        </div>
    );
}
