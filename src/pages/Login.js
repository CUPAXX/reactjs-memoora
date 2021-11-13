import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { authLogin } from '../redux/actions/auth'
import Swal from 'sweetalert2'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onLogin = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.authLogin(email, password).then(() =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
      this.props.history.push('/')
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="bg-gray-300 flex justify-center items-center h-screen">
        <div className="bg-white flex flex-col justify-center items-center gap-4 py-10 px-10 rounded-xl shadow-2xl md:w-4/12 w-8/12">
          <h3 className="text-gray-800 text-3xl font-bold">Welcome Back</h3>
          <h3 className="text-xs font-semibold text-gray-400 pb-8 italic">*Please Login To Move Foward*</h3>
          <form onSubmit={this.onLogin} className="flex flex-col gap-2 w-full">
            <h4 className="font-semibold text-gray-800 capitalize">Email : </h4>
            <input onChange={e => this.setState({email: e.target.value})} className="border-2 mb-4  border-yellow-700 p-3 text-sm text-yellow-800 font-semibold rounded-md" type="email" placeholder="Masukan Email Anda"/>
            <h4 className="font-semibold text-gray-800 capitalize">password : </h4>
            <input onChange={e => this.setState({password: e.target.value})} className="border-2 border-yellow-700 p-3 text-sm text-yellow-800 font-semibold rounded-md" type="password" placeholder="Masukan Email Anda"/>
            <h4 className="mb-5 text-sm text-right hover:text-yellow-700 text-gray-800 cursor-pointer">Forgot Password ?</h4>
            <button type="submit" className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold p-3 rounded-lg mb-3">Login</button>
            <h3 className="text-sm text-center">Don't Have Account ? <Link to="/register" className="cursor-pointer hover:text-yellow-700">Register Here</Link></h3>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { authLogin }

export default connect(mapStateToProps, mapDispatchToProps)(Login)