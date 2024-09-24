import React, { useState } from 'react';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);

  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault(); 

      
      if (email === "sharanya@gmail.com" && password === "sharu2015") {
        setIsLoggedIn(true); 
        navigate('/assets'); 
      } else {
        alert("Invalid credentials");
      }
    };

    return (
      <div className="bg-gray-800 rounded-3xl shadow-xl flex flex-col w-full md:w-1/3 items-center max-w-4xl p-8 transition duration-500 ease-in-out hover:shadow-2xl">
        <div className="inline-block border-[2px] justify-center w-20 border-teal-400 border-solid mb-4"></div>
        <h3 className="text-3xl font-extrabold text-teal-400 mb-6">Sign In</h3>
        <div className="flex space-x-4 mb-6">
          <div className="socialIcon cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            <Facebook className="text-teal-400" />
          </div>
          <div className="socialIcon cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            <GitHub className="text-teal-400" />
          </div>
          <div className="socialIcon cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            <Google className="text-teal-400" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
            <input
              type="email"
              className="rounded-full px-4 py-2 w-4/5 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-200 mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="rounded-full px-4 py-2 w-4/5 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-200 mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit" // Change button to type submit to trigger form submission
              className="rounded-full px-6 py-3 bg-teal-400 text-white w-4/5 shadow-lg hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="text-gray-400 mt-6 text-sm">Don't have an account?</p>
        <p
          className="text-teal-400 text-sm font-semibold cursor-pointer hover:text-teal-500 transition duration-300"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="bg-gray-800 rounded-3xl shadow-xl flex flex-col w-full md:w-1/3 items-center max-w-4xl p-8 transition duration-500 ease-in-out hover:shadow-2xl">
        <div className="inline-block border-[2px] justify-center w-20 border-teal-400 border-solid mb-4"></div>
        <h3 className="text-3xl font-extrabold text-teal-400 mb-6">Create Account</h3>
        <div className="flex space-x-4 mb-6">
          <div className="socialIcon cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            <Facebook className="text-teal-400" />
          </div>
          <div className="socialIcon cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            <GitHub className="text-teal-400" />
          </div>
          <div className="socialIcon cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
            <Google className="text-teal-400" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <input
            type="text"
            className="rounded-full px-4 py-2 w-4/5 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-200 mb-3"
            placeholder="Name"
          />
          <input
            type="email"
            className="rounded-full px-4 py-2 w-4/5 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-200 mb-3"
            placeholder="Email"
          />
          <input
            type="password"
            className="rounded-full px-4 py-2 w-4/5 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-200 mb-3"
            placeholder="Password"
          />
          <input
            type="text"
            className="rounded-full px-4 py-2 w-4/5 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-200 mb-3"
            placeholder="Avatar URL"
          />
          <button className="rounded-full px-6 py-3 bg-teal-400 text-white w-4/5 shadow-lg hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105 mt-4">
            Sign Up
          </button>
        </div>
        <p className="text-gray-400 mt-6 text-sm">Already have an account?</p>
        <p
          className="text-teal-400 text-sm font-semibold cursor-pointer hover:text-teal-500 transition duration-300"
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center min-h-screen py-10">
      <main className="flex items-center w-full px-4 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 text-gray-300 space-y-5 pr-10">
          <p className="text-5xl font-extrabold tracking-wide">Welcome to Fargo Investing</p>
          <p className="text-lg font-medium text-teal-400">Join us and manage your investments effortlessly.</p>
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default LoginPage;
