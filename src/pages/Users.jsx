import { useMutation } from "@tanstack/react-query";
import { UseAuthContext } from "../contexts/AuthContext";
import LogIn from "../slices/user/LogIn";
import { logOut } from "../services/supabase";




export default function Users() {

  const { user } = UseAuthContext();
  const { mutate: handleLogOut, isPending, isError, error } =useMutation({
    mutationFn: logOut,
    
  })

  return (
    <div className={`flex justify-center items-center w-full h-[90vh] p-2 md:p-4 lg:p-8`} >
      { user ? 
        <>
          <h2>Welcome back, {user.user_metadata.username} </h2>
          <button 
            onClick={handleLogOut}
            className="bg-white py-1 px-3"
            disabled={isPending}
          >{ isPending ? "Loading..." : "Log out" }</button>

          { isError && <p>{error}</p> }
        </>

        :
      
        <LogIn />
      }
    </div>
  )
}
