import { useState } from "react";
export function Registration() {
    const [user, setUser] = useState ({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
        if (name === 'email' && value.includes('@')) {
            const usernameFromEmail = value.split('@')[0];
            setUser(prev => ({
                ...prev,
                username: prev.username ? prev.username : usernameFromEmail
            }));
        }
    };
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(user);
    };
    return (
        <div className="registration">
        <h1>Sign Up form</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email Address"
            />
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="User Name"
            />
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="password"
                name="passwordConfirm"
                value={user.passwordConfirm}
                onChange={handleChange}
                placeholder="Confirm Password"
            />
            <div className="">
                <button className="btn-grad" type="submit">Register</button>
            </div>
        </form>
        </div>
    );
}