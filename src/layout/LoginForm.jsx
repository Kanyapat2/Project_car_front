import axios from 'axios'
import {useState} from "react";
import useAuth from '../hooks/useAuth'

export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username : '', 
    password : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)
      
    }catch(err) {
      console.log( err.message)
    }
  }

  return (
    <div class="bg-my-Car bg-cover bg-center flex items-center justify-center h-screen ">
    <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5 bg-gray-200/70 ">
      <div className="text-3xl mb-5 text-black font-bold text-center">Login Form</div>
      <form className="flex flex-col gap-2 items-center" onSubmit={hdlSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold text-center">username</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs flex justify-center"
            name="username"
            value={input.username}
            onChange={ hdlChange }
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-wihits font-bold text-center">password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs flex justify-center"
            name="password"
            value={ input.password }
            onChange={ hdlChange }
          />
        </label>

        <div className="flex gap-5 ">
          <button type="submit" className="btn btn-outline btn-info-600 mt-7">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
}
