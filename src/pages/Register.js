import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getCountry } from '../redux/actions/country'
import {authRegister} from '../redux/actions/auth'
import Swal from 'sweetalert2'

class Register extends Component {
  state = {
    name: '',
    email: '',
    country: '',
    password: ''
  }
  componentDidMount () {
    this.props.getCountry()
  }

  onRegister = (e) => {
    e.preventDefault()
    const {name, email, country, password} = this.state
    this.props.authRegister(name, email, country, password).then(() =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Register Success, You Can Login Now',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  render() {
    const {data} = this.props.country
    console.log(data)
    return (
      <div className="bg-gray-300 flex justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center gap-4 py-10 px-10 rounded-xl shadow-2xl md:w-5/12 w-8/12 my-10">
          <h3 className="text-gray-800 text-3xl font-bold pb-10">Register</h3>
          <form onSubmit={this.onRegister} className="flex flex-col gap-2 w-full">
            <h4 className="font-semibold text-gray-800 capitalize">Name : </h4>
            <input onChange={e => this.setState({name: e.target.value})} className="focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent border-2 mb-3  border-gray-700 p-3 text-sm text-yellow-800 font-semibold rounded-md" type="text" placeholder="Enter your Name"/>
            <h4 className="font-semibold text-gray-800 capitalize">Country : </h4>
            <select value={this.state.country} onChange={e=>this.setState({country:e.target.value})} className="focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent border-2 mb-3  border-gray-700 p-3 text-sm text-yellow-800 font-semibold rounded-md">
              {data.map(country => (
                <option key={country.id} value={country.name}>{country.name}</option>
              ))}
            </select>
            <h4 className="font-semibold text-gray-800 capitalize">Email : </h4>
            <input onChange={e => this.setState({email: e.target.value})} className="focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent border-2 mb-3  border-gray-700 p-3 text-sm text-yellow-800 font-semibold rounded-md" type="email" placeholder="Enter your Email"/>
            <h4 className="font-semibold text-gray-800 capitalize">password : </h4>
            <input onChange={e => this.setState({password: e.target.value})} className="focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent border-2 mb-8 border-gray-700 p-3 text-sm text-yellow-800 font-semibold rounded-md" type="password" placeholder="Password length min 8 character"/>
            <button type="submit" className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold p-3 rounded-lg mb-3">Submit</button>
            <h3 className="text-sm text-center">Already Have Account ? <Link to="/" className="cursor-pointer hover:text-yellow-700">Login Here</Link></h3>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  country: state.country,
  auth: state.auth
})

const mapDispatchToProps = { getCountry, authRegister }

export default connect(mapStateToProps, mapDispatchToProps)(Register)