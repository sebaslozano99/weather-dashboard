import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../services/supabase";
import Spinner from "../../ui/Spinner";
import StyledInput from "../../ui/StyledInput"




export default function LogIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { mutate: handleLogIn, isPending ,isError, error } = useMutation({
      mutationFn: () => logIn({email, password}),
      onSuccess: () => navigate("/dashboard"),
      onError: (err) => console.log(err),
  });


  function onLogIn(e){
    e.preventDefault();
    handleLogIn({email, password});
  }


  return (
    <form className={`flex flex-col justify-center gap-6 p-8 sm:h-5/6 md:h-auto w-11/12 md:w-6/12 bg-white/70 shadow-md rounded-xl`} onSubmit={onLogIn}  >

      <h2 className="font-bold text-3xl text-center" >Log in to your account</h2>

      <div className="flex flex-col gap-5" >

        <div className="flex flex-col" >
          <label htmlFor="email">Email Address</label>
          <StyledInput state={email} setState={setEmail} type="email" placeholder="email@yahoo.com" name="email" disabled={isPending} />
        </div>

        <div className="flex flex-col relative" >
          <label htmlFor="psw">Create Password</label>
          <StyledInput state={password} setState={setPassword} type="password" placeholder="********" name="psw" disabled={isPending} />
        </div>

        <p>Do not have an account yet? <Link className="text-[#21295C] underline"  to="/signup" >Sign up</Link> </p>

      </div>

      { isError && <p className="text-xs text-red-500" >{error.message}</p> }

      <div className="flex justify-center gap-6 w-full">

        <button 
          className={`flex justify-center items-center px-4 py-2 w-full text-white bg-[#1B3B6F] hover:shadow-lg`} 
          disabled={isPending} 
        >
          { isPending ? <Spinner size={1} type="secondary" /> : "Log in" }
        </button>

      </div>

    </form>
  )
}
