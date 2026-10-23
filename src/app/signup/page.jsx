import React from 'react';

const SignupPage = () => {
    return (
        <div className="container mx-auto">
            <h1>sign-up</h1>
              <form >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">সাগিন উপ</legend>

   <label className="label">নাম</label>
  <input type="text" name="name"  className="input" placeholder="নাম" />

   <label className="label">ইমেইল</label>
  <input type="email" className="input" placeholder="Email" />

   <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <label className="label">Recheck-Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">সাইন আপ</button>
</fieldset>
            </form>

        </div>
    );
};

export default SignupPage;