import {Link} from 'react-router-dom';
import {Label , TextInput} from 'flowbite-react';
export default function Signup() {
  return (
    <div className= 'min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md: items-center gap-5">
        {/*left*/}
        <div className="flex-1">
        <Link
        to='/'
        className= 'font-bold dark:text-white text-4xl'
        >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Thought
        </span>
        trial
      </Link>
      <p className='text-sm mt-5'>
        This is a demo project. You can sign up with your email and password .Just make sure you remember your pass and username or phone no. will also go!
      </p>
        </div>
      {/*right*/}
      <div className="flex-1">
        <form className='flex flex-col gap-4'>
          <div>
         <Label value= 'Your Username'></Label>
         <TextInput type= 'text' placeholder='Username' id='username'></TextInput>
          </div>

          <div>
         <Label value= 'Your email'></Label>
         <TextInput type= 'text' placeholder='Email' id='email'></TextInput>
          </div>

          <div>
         <Label value= 'Your Password'></Label>
         <TextInput type= 'text' placeholder='password' id='password'></TextInput>
          </div>
          <button gradientDuoTone='purpleToPick' type= 'submit'> Sign Up</button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to = '/sign-in' className='text-blue-600'>Sign-in</Link>
        </div>
      </div>
      </div>
      
      </div>
  );
};
