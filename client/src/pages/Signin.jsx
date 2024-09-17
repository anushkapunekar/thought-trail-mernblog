import { Link , useNavigate } from 'react-router-dom';
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { signInStart, signInSuccess , signInFailure } from '../redux/user/userSlice';

export default function Signin() {
  // State to store form data and submission status
  const [formData, setFormData] = useState({});
  const {loading , error : errorMessage} = useSelector(state=> state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signInFailure('Please  fill out all the fields.'));
    }
    
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', { // Using the Vite proxy setup
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
        const data = await res.json();
        if(data.success === false){
         dispatch(signInFailure(data.message));
        }
  
        if(res.ok){
          dispatch(signInSuccess(data));
          navigate('/');
        }

    } catch (error){
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Thought
            </span>
            trial
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with your email and password. Just make sure you remember your password, and username or phone no. will also go!
          </p>
        </div>

        {/* Right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your Email' />
              <TextInput
                type='email'
                placeholder='name@gmail.com'
                id='email'
                aria-label='Email'
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value='Your Password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                aria-label='Password'
                onChange={handleChange}
              />
            </div>

            {/* Corrected Button */}
            <Button  gradientDuoTone= 'purpleToPink' type='submit' disabled= {loading}>
              {
                loading ? (
                  <>
                   <Spinner size= 'sm'/>
                  <span className='pl-3'>loading...
                  </span>
                  </>
                  
                ) : 'Sign-in'
              }
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span> Dont have an account?</span>
            <Link to='/sign-up' className='text-blue-600'>Sign-in</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color= 'failure'>
                {errorMessage}
              </Alert>           
               )
          }
        </div>
      </div>
    </div>
  );
}
