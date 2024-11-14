import React from 'react';

const Login = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-3xl font-bold'>Login</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi earum esse ipsam dolores dolor distinctio, quidem iusto praesentium architecto iure totam!</p>
        <div className='flex flex-col w-1/2 gap-4'>
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder='name' className='border border-slate-200 rounded-lg px-4 py-1 focus:outline-gray-600' />
            <label htmlFor="Email">Email</label>
            <input type="text"  placeholder='Email' className='border border-slate-200 rounded-lg px-4 py-1 focus:outline-gray-600'  />
            <button className='bg-gray-800 px-4 py-1 rounded-lg text-white'>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Login;
