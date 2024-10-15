import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import StyledInput from "../../ui/StyledInput";
import Spinner from "../../ui/Spinner";
import { signUp, logOut } from "../../services/supabase";
import { UseAuthContext } from "../../contexts/AuthContext";





export default function SignUp() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user } = UseAuthContext();



  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: () => signUp({email, password, username}),
    onSuccess: () => navigate("/dashboard"),
  })


  const { mutate: handleLogOut, isLoading: isLoggingOut, isError: isLoggingOutError, error: loggingOutError } = useMutation({
    mutationFn: () => logOut({email, password, username}),
  })


  function onSubmit(e){
    e.preventDefault();
    mutate({email, password, username});
  }



  useEffect(() => {
    console.log(isLoading);
  },[isLoading])



  if(user) console.log(user);



  if(user) return <div className="flex flex-col gap-2 w-full h-full  border-6 border-red-500" >
    <h1>Logged in, Welcome <b>{user.user_metadata.username}</b></h1>
    <button className="p-2 bg-red-500" onClick={handleLogOut} disabled={isLoggingOut} >{ isLoggingOut ? "Loading..." : "Log out" }</button>
    { isLoggingOutError && <p>{loggingOutError}</p> }
  </div>


  return (
    <form className={`flex flex-col gap-6 p-8 w-7/12 bg-white/70 shadow-md rounded-xl`} onSubmit={onSubmit} >

        <h2 className="font-bold text-3xl text-center" >Create your account</h2>

        <div className="flex flex-col gap-5" >

          <div className="flex flex-col" >
            <label htmlFor="username">Username</label>
            <StyledInput state={username} setState={setUsername} type="text" placeholder="mike_smith" name="username" disabled={isLoading} />
          </div>

          <div className="flex flex-col" >
            <label htmlFor="email">Email Address</label>
            <StyledInput state={email} setState={setEmail} type="email" placeholder="email@yahoo.com" name="email" disabled={isLoading} />
          </div>

          <div className="flex flex-col" >
            <label htmlFor="psw">Create Password</label>
            <StyledInput state={password} setState={setPassword} type="password" placeholder="********" name="psw" disabled={isLoading} />
          </div>

          <div className="flex flex-col" >
            <label htmlFor="psw-repeat">Confirm Password</label>
            <StyledInput state={confirmPassword} setState={setConfirmPassword} type="password" placeholder="********" name="psw-repeat" disabled={isLoading} />
          </div>

        </div>

        { isError && <p className="text-xs text-red-500" >{error.message}</p> }

        <div className="flex justify-center gap-6 w-full">
          <button className={`flex justify-center items-center px-4 py-2 w-full text-white bg-[#1B3B6F] hover:shadow-lg`} >
            { isLoading ? <Spinner size={1} type="secondary" /> : "Sign up" }
          </button>
        </div>

      </form>
  )
}
