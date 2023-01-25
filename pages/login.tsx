import React, { Component } from 'react'

export class login extends Component {
  render() {
    return (
      <div className='flex-1 flex flex-col relative justify-center items-center'>
        <form className="max-w-sm w-full border-b-2 pb-6">
          <div className='mb-5'>
            <label className='block text-sm font-semibold leading-6 text-gray-900 mb-2'>Email</label>
            <input id ="email" type="email" className='bg-white block appearance-none rounded-md w-full px-3 h-8 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-500'/>
          </div>
          <div className='mb-5 pb-2'>
            <label className='block text-sm font-semibold leading-6 text-gray-900 mb-2'>Password</label>
            <input id ="password" type="password" className='bg-white block appearance-none rounded-md w-full px-3 h-8 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-500'/>
          </div>
          <button className="inline-flex justify-center items-center w-full h-8 rounded-md border border-jyr bg-jyr font-medium text-white shadow-sm hover:bg-indigo-700">Log In</button>
        </form>
      </div>
    )
  }
}

export default login