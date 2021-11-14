import React, { Component } from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {getFile} from '../redux/actions/user'
import {authLogout} from '../redux/actions/auth'
import Swal from 'sweetalert2'

class Dashboard extends Component {
  componentDidMount () {
    this.onGetFile()
  }

  onGetFile () {
    const {token} = this.props.auth
    this.props.getFile(token)
  }

  onLogout() {
    this.props.authLogout()
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Logout successfully'
    })
  }
  render() {
    const {dataFile} = this.props.user
    return (
      <React.Fragment>
        <Header />
        <div className="bg-gray-300 flex flex-col py-14 gap-6 items-center h-screen">
          <h3 className="text-3xl font-bold">List File</h3>
          <div className="bg-white gap-4 flex flex-col w-8/12 py-10 px-10 rounded-lg">
            <h4 className="font-bold">Lokasi File .yml berada :</h4>
            <div className=" text-sm border-2 border-gray-700 py-3 px-3 text-gray-600">{dataFile.files}</div>
          </div>
          <div className=" absolute right-8 bottom-10">
            <button onClick={e => this.onLogout()} className=" bg-purple-400 hover:bg-purple-600 text-gray-800 font-bold rounded-md py-4 px-10">Logout</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

const mapDispatchToProps = { getFile, authLogout }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)