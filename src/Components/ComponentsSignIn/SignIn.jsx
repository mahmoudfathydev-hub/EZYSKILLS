import React from 'react'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
import googleIMG from "../../images/Vector.png"
import { FaFacebookF, FaApple } from "react-icons/fa";
import frameIMG from "../../images/Frame.png"
import './SignIn.scss'

export default function SignIn() {
    return (
        <div className='sign-in-page'>
            <div className="container">
                <div className="form-card">
                    <div className="heading">
                        <span className='create'>Create</span>
                        <span className='account'>Account</span>
                    </div>
                    <form action="">
                        <input type="text" placeholder='Your First Name' />
                        <input type="text" placeholder='Your Last Name' />
                        <input type="email" placeholder='Email Address' />
                        <input type="password" placeholder='Password' autoComplete="new-password" />
                        {/* <div className="check-box">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div> */}
                        <div className="btn">
                            <Button name="Create Acount" className="create-account" />
                            <div className="content-btn">
                                <span className='btn-create-account'>Already Created?</span>
                                <Link to="/login">
                                    <span className='login'>Login Here</span>
                                </Link>
                            </div>
                            <div className="or-optain">
                                <div className="line"></div>
                                <span>or</span>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="Sign-in-optaions">
                            <button className='google'>
                                <img src={googleIMG} alt="" />
                                <span>Sign In</span>
                            </button>
                            <button className='facebook'>
                                <FaFacebookF />
                                <span>Sign In</span>
                            </button>
                            <button className='apple'>
                                <FaApple />
                                <span>Sign In</span>
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
