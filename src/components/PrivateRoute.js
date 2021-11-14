import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ children, auth, ...rest }) => {
  const { token } = auth
  return (
    <Route {...rest} render = {(props) => {
      if (token !== null) {
        return (children)
      } else {
        return (<Redirect to="/login"/>)
      }
    }} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)