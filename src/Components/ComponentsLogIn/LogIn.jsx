import React from 'react'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
import googleIMG from "../../images/Vector.png"
import { FaFacebookF, FaApple } from "react-icons/fa";
import frameIMG from "../../images/Frame.png"
import "./LogIn.scss"

export default function LogIn() {
    return (
        <div className='login'>
            <div className="container">
                <div className="form-card">
                    <div className="heading">
                        <span className='create'>Log</span>
                        <span className='account'>In</span>
                    </div>
                    <form action="">
                        <input type="email" placeholder='Email Address' />
                        <input type="password" placeholder='Password' autoComplete="new-password" />
                        <div className="check-box">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>
                        <div className="btn">
                            <Button name="Login" className="create-account" />
                            <div className="or-optain">
                                <div className="line"></div>
                                <span>or</span>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="Sign-in-optaions">
                            <button className='google'>
                                <img src={googleIMG} alt="" />
                                <span>Log In With Google</span>
                            </button>
                            <button className='facebook'>
                                <FaFacebookF />
                                <span>Log in with Facebook</span>
                            </button>
                            <button className='apple'>
                                <FaApple />
                                <span>Log in with Apple</span>
                            </button>
                        </div>
                        <div className="bottom-text">
                            <p>By continuing, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span> </p>
                        </div>
                    </form>
                </div>
                <div className="img-container">
                    <img src={frameIMG} alt="frameIMG" />
                </div>
            </div>
        </div>
    )
}
