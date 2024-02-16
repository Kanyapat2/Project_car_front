import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username : '', 
    password : '',
    confirmPassword : '',
    email : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className='bg-my-Car bg-cover bg-center flex items-center justify-center h-screen '>  
  <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5 bg-gray-200/70">
    <div className="text-3xl mb-5 font-bold text-center">RegisterForm</div>
    <form className="flex flex-col gap-2 items-center" onSubmit={hdlSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-center">username</span>
        </div> 
        <input
          type="text"
          className="input input-bordered w-full max-w-xs flex justify-center"
          name="username"
          value={input.username}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-center">E-mail</span>
        </div>
        <input
          type="email"
          className="input input-bordered w-full max-w-xs"
          name="email"
          value={input.email}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label items-center">
          <span className="label-text text-center">password</span>
        </div> 
        <input
          type="password"
          className="input input-bordered w-full max-w-xs "
          name="password"
          value={input.password}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-center">Confirm Password</span>
        </div>
        <input
          type="password"
          className="input input-bordered w-full max-w-xs"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={hdlChange}
        />
      </label>
      <div className="flex gap-5">
        <button type="submit" className="btn btn-outline btn-info mt-7">Submit</button>
        <button type="reset" className="btn btn-outline btn-warning mt-7">Reset</button>
      </div>
    </form>
  </div>
</div>
  );
}
