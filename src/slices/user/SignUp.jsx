import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/supabase";
import StyledInput from "../../ui/StyledInput";
import Spinner from "../../ui/Spinner";



export default function SignUp() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const { mutate, isPending , isError, error } = useMutation({
    mutationFn: () => signUp({email, password, username}),
    onSuccess: () => navigate("/dashboard"),
    onError: (err) => console.log(err),
  })


  function onSubmit(e){
    e.preventDefault();
    mutate({email, password, username});
  }


  return (
    <form className={`flex flex-col gap-6 p-8 w-11/12 md:w-6/12 sm:h-5/6 md:h-auto bg-white/70 shadow-md rounded-xl`} onSubmit={onSubmit} >

      <h2 className="font-bold text-3xl text-center" >Create your account</h2>

      <div className="flex flex-col gap-5" >

        <div className="flex flex-col" >
          <label htmlFor="username">Username</label>
          <StyledInput state={username} setState={setUsername} type="text" placeholder="mike_smith" name="username" disabled={isPending} />
        </div>

        <div className="flex flex-col" >
          <label htmlFor="email">Email Address</label>
          <StyledInput state={email} setState={setEmail}  type="email" placeholder="email@yahoo.com" name="email" disabled={isPending} />
        </div>

        <div className="flex flex-col relative" >
          <label htmlFor="psw">Create Password</label>
          <StyledInput state={password} setState={setPassword}  type="password" placeholder="********" name="psw" disabled={isPending}  />
        </div>

        <div className="flex flex-col relative" >
          
          <label htmlFor="psw-repeat">Confirm Password</label>

          <StyledInput 
            state={confirmPassword} 
            setState={setConfirmPassword} 
            type="password" 
            placeholder="********" 
            name="psw-repeat" 
            disabled={isPending} 
            className={ password.length > 0 && confirmPassword.length > 0 ? `border-[1px] ${confirmPassword !== password ? "border-red-500" : "border-green-500"}` : "" }  
          />

        </div>

      </div>


      { isError && <p className="text-xs text-red-500" >{error.message}</p> }

      <div className="flex justify-center gap-6 w-full">
        <button className={`flex justify-center items-center px-4 py-2 w-full text-white bg-[#1B3B6F] hover:shadow-lg`} >
          { isPending ? <Spinner size={1} type="secondary" /> : "Sign up" }
        </button>
      </div>

    </form>
  )
}
