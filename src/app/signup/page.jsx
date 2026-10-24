"use client"

import React from 'react';

const SignupPage = () => {
    const onSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        // we can get data from page in log section 
        console.log(user)


    }






    return (
        <div className="container mx-auto">
            <h1>sign-up</h1>
              <form onSubmit={onSubmit} >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">সাগিন উপ</legend>

   <label className="label">নাম</label>
  <input type="text" name="name"  className="input" placeholder="নাম" />

   <label className="label">ইমেইল</label>
  <input  type="email"
  name="email"
  className="input"
  placeholder="Email" />

   <label className="label"></label>
  <input type="password" name="password" className="input" placeholder="Password" />

  <label className="label">Recheck-Password</label>
  <input  type="password"
  name="confirmPassword"
  className="input"
  placeholder="Confirm Password" />

  <button className="btn btn-neutral mt-4" type=
  "submit">সাইন আপ</button>
</fieldset>
            </form>

        </div>
    );
};

export default SignupPage;