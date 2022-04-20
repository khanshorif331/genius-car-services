// import { sendEmailVerification } from 'firebase/auth'
import React from 'react'
import {
	useAuthState,
	useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading'

const RequireAuth = ({ children }) => {
	const [sendEmailVerification, sending, error] =
		useSendEmailVerification(auth)
	const [user, loading] = useAuthState(auth)
	const location = useLocation()
	if (loading) {
		return <Loading></Loading>
	}
	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}
	if (!user.emailVerified) {
		return (
			<div>
				<h1 className='text-danger'> Your Email is not verified.!!</h1>
				<h3 className='text-success'>Please verify your email address.</h3>
				<button
					className='btn btn-primary'
					onClick={async () => {
						await sendEmailVerification()
						toast('Sent email')
					}}
				>
					Send Code Again
				</button>
				<ToastContainer></ToastContainer>
			</div>
		)
	}
	return children
}

export default RequireAuth
