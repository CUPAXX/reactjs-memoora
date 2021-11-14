/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {FaUserCircle} from 'react-icons/all'
import {connect} from 'react-redux'
import {getProfile} from '../redux/actions/user'

 function Header(props) {
   const {token} = props.auth
   const {data} = props.user

   useEffect(() => {
     if(token !== null) {
       props.getProfile(token)
     }
   }, [])
  return (
    <div className=" bg-purple-300 justify-between items-center flex flex-row py-4 px-5">
      <h2 className=" font-bold text-lg tracking-widest text-gray-800">MEMOORA</h2>
      <div className="flex flex-row justify-center items-center gap-5">
        <h3 className="text-gray-800 capitalize font-semibold">{data.name}</h3>
        <FaUserCircle className="text-gray-800" size={35}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

const mapDispatchToProps = { getProfile }

export default connect(mapStateToProps, mapDispatchToProps)(Header)