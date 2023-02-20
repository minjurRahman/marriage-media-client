import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/UseToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm('')
    const { LogIn, providerLogin, setUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    // const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = useToken(loginUserEmail);
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    // if (token) {
    //     navigate(from, { replace: true })
    // }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                toast.success('successfully Login')
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        LogIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                // setLoginUserEmail(data.email)
                navigate(from, { replace: true })
                toast.success('successfully Login')
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            });
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='p-8 card w-96 border shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Login to your account</h2>
                {/* <h2 className='text-2xl font-semibold text-center'>Login</h2> */}
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className='input input-bordered w-full max-w-xs'
                            {...register("email", {
                                required: "Email Address is required"
                            })} placeholder='Enter your email address' />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label mt-2"> <span className="label-text">Password</span></label>
                        <input type='password'
                            className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters.' }
                            })} placeholder='Enter your password' />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input
                        className='btn btn-secondary my-4 w-full max-w-xs' value='Login' type="submit" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </form>
                <p className='mt-3'>New to SalafiyahNikah? <Link className='text-accent' to='/signup'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-secondary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;