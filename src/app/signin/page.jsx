import React from 'react';

const SigninPage = () => {
    return (
        <div>
            {/* <h1>signin page</h1> */}
                <div className="container mx-auto">
            <h1>sign-in</h1>
            <form >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">সাইন ইন</button>
</fieldset>
            </form>
        </div>
        </div>
    );
};

export default SigninPage;