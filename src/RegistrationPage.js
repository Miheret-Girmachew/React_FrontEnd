import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RegistrationPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();


    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSexChange = (event) => {
        setSex(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleRegistration}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={handleFullNameChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </label>
                <br />
                <label>
                    Sex:
                    <input type="text" value={sex} onChange={handleSexChange} required />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={handleAgeChange} required />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" value={country} onChange={handleCountryChange} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
