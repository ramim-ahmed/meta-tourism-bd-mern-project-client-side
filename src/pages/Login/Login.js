import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from '../../assets/Meta Tourisim BD.png';
import Container from '../../components/Container/Container';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    
    const {SignInGoogle, setUser, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        SignInGoogle()
        .then( result => {
            setUser(result.user);
            history.push(location?.state?.from || '/home');
        })
        .finally( () => setIsLoading(false))
    }

    return (
        <div style={{height:'400px'}} className='flex items-center'>
            <Container>
                <div className='w-2/5 mx-auto'>
                    <div className='border border-green-500 py-5'>
                          <div className='flex justify-center'>
                              <img className='w-58' src={Logo} alt="" />
                          </div>
                          <div className='w-1/2 mx-auto mt-10'>
                              <button onClick={handleGoogleSignIn} className='bg-indigo-700 text-white w-full py-2 px-2 text-xl'>Sign In With Google</button>
                          </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;