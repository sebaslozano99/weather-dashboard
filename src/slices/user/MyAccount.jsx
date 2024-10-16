import { useMutation } from "@tanstack/react-query";
import { logOut } from "../../services/supabase";
import { UseAuthContext } from "../../contexts/AuthContext";
import ManageInfo from "./ManageInfo";




export default function MyAccount() {

  const { user } = UseAuthContext();
  const { mutate: handleLogOut, isPending, isError, error } = useMutation({
    mutationFn: logOut,    
  });


  console.log(user);


  return (
    <div className="w-10/12 h-full" >

        <div className="flex justify-between items-center p-2 h-[8%] border-b-[1px] border-black/20" >
            <h2>Welcome back, <b>{user.user_metadata.username}</b></h2>

            <button
                className="bg-[#21295C] text-white px-5 py-1 border-none rounded-3xl outline-none"
                onClick={handleLogOut}
                disabled={isPending}
            >
                { isPending ? "Loading" : "Sign out" }
            </button>

        </div>


        { isError && <p className="text-xs text-red-500" >{error.message || error.description}</p> }


        <div className="flex gap-6 pt-8 w-full h-[92%]" >

            <div className="flex flex-col items-center gap-4 p-2 w-[30%] h-full" >
                
                <div className="flex flex-col items-center gap-4" >
                    <img src="../../../public/user.png" alt="users_img" className="w-6/12" />

                    <div>
                        <h2 className="font-semibold text-lg" >{user.user_metadata.username}</h2>
                        <p className="text-sm" >{user.email}</p>
                    </div>
                </div>


                <nav >
                    <ul >
                        <li className={`cursor-pointer`} >Personal information</li>
                        <li className={`cursor-pointer`} >Delete account</li>
                    </ul>
                </nav>

            </div>

            <ManageInfo user={user} />

        </div>

    </div>
  )
}
