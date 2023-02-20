import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext)
    const [signError, setSignUpError] = useState('')
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/')
    // }

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully')
                navigate('/')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log('user updated');
                        // toast.success('Profile Update successfully')
                        // saveUser(data.name, data.email)
                    })
                    .catch(err => console.error('While updating user', err));
            })
            .catch(error => {
                console.error('while creating user', error)
                setSignUpError(error.message)
            });
    }

    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCreatedUserEmail(email)
    //         })
    // }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='p-8 card w-96 border shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Create your account</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input type='text'
                            className='input input-bordered w-full max-w-xs'
                            {...register("name", {
                                required: 'Name is required'
                            })}
                            placeholder='Enter your name'
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className='input input-bordered w-full max-w-xs'
                            {...register("email", {
                                required: 'Email is required'
                            })}
                            placeholder='Enter your email address'
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type='password'
                            className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: 'Password is required',
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase numbers and special characters" },
                                minLength: { value: 6, message: 'Password must be 6 characters' }
                            })}
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-secondary my-4 w-full max-w-xs' value='Sign Up' type="submit" />
                    {signError && <p className='text-red-600'>{signError}</p>}
                </form>
                <p className='mt-3'>Already Have an account? <Link className='text-secondary' to='/login'>Please login</Link> </p>
                {/* <div className="divider">OR</div>
                <button className='btn btn-secondary w-full'>CONTINUE WITH GOOGLE</button> */}
            </div>
        </div>
    );
};

export default SignUp;