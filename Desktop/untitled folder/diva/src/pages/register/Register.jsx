import React, { useState } from 'react';
import { registerUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar';

const Register = () => {
  // Make a useState for 5 Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Use State for Error Message
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Make each function for changing the value
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // validation
  var validate = () => {
    var isValid = true;

    // validate the firstname
    if (firstName.trim() === '') {
      setFirstNameError('First name is required!');
      isValid = false;
    }

    if (lastName.trim() === '') {
      setLastNameError('Last name is required!');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Email is required!');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required!');
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm password is required!');
      isValid = false;
    }

    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and confirm password don't match!");
      isValid = false;
    }

    return isValid;
  };

  // Submit button Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    var isValidated = validate();
    if (!isValidated) {
      return;
    }

    // Sending request to the api
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    registerUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h1 className='text-center'>Create Your Maternity Store Account</h1>

        <form className='w-50 mx-auto mt-4'>
          <div className='mb-3'>
            <label className='form-label'>First Name</label>
            <input
              onChange={handleFirstname}
              type='text'
              className='form-control'
              placeholder='Enter your first name'
            />
            {firstNameError && <p className='text-danger'>{firstNameError}</p>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Last Name</label>
            <input
              onChange={handleLastname}
              type='text'
              className='form-control'
              placeholder='Enter your last name'
            />
            {lastNameError && <p className='text-danger'>{lastNameError}</p>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              onChange={handleEmail}
              type='email'
              className='form-control'
              placeholder='Enter your email'
            />
            {emailError && <p className='text-danger'>{emailError}</p>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              onChange={handlePassword}
              type='password'
              className='form-control'
              placeholder='Enter your password'
            />
            {passwordError && <p className='text-danger'>{passwordError}</p>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Confirm Password</label>
            <input
              onChange={handleConfirmPassword}
              type='password'
              className='form-control'
              placeholder='Confirm your password'
            />
            {confirmPasswordError && (
              <p className='text-danger'>{confirmPasswordError}</p>
            )}
          </div>

          <button onClick={handleSubmit} className='btn btn-primary w-100'>
            Create an Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
