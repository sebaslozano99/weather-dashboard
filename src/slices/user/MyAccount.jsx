import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../../services/supabase";
import { useAuthContext } from "../../contexts/AuthContext";
import ManageInfo from "./ManageInfo";
import DeleteAccount from "./DeleteAccount";
import Spinner from "../../ui/Spinner";
import UserPreferences from "./UserPreferences";




export default function MyAccount() {

  const [showDeleteAccount, setShowDeleteAccount] = useState("info");
  const { user } = useAuthContext();
  const { mutate: handleLogOut, isPending, isError, error } = useMutation({
    mutationFn: logOut,    
  });



  return (
    <div className="w-full md:w-10/12 h-full" >

        <div className="flex justify-between items-center p-2 h-[8%] border-b-[1px] border-black/20 dark:border-white/20" >
            <h2 className="dark:text-white text-sm min-[450px]:text-base" >Welcome back, <b>{user.user_metadata.username}</b></h2>

            <button
                className="flex justify-center px-5 py-2 text-xs text-white min-w-14 bg-[#21295C]  border-none rounded-3xl outline-none"
                onClick={handleLogOut}
                disabled={isPending}
            >
                { isPending ? <Spinner  size={1} type="secondary" /> : "Sign out" }
            </button>

        </div>


        { isError && <p className="text-xs text-red-500 dark:text-white" >{error.message || error.description}</p> }


        <div className="flex flex-col md:flex-row gap-6 pt-8 w-full h-[92%]" >

            <div className="flex flex-col gap-6 p-2 w-full md:w-[30%] h-full" >
                
                <div className="flex md:flex-col justify-between gap-4" >
                    <img src="/user.png" alt="users_img" className="w-3/12 min-[500px]:w-28 md:w-6/12" />

                    <div >
                        <h2 className="font-semibold min-[500px]:text-2xl md:text-lg dark:text-cyan-500" >{user.user_metadata.username}</h2>
                        <p className="min-[500px]:text-lg md:text-sm dark:text-white" >{user.email}</p>
                    </div>
                </div>


                <nav className="w-full" >
                    <ul >
                        <li onClick={() => setShowDeleteAccount("info")} className={`${showDeleteAccount === "info" && "font-bold text-[#21295C] dark:text-cyan-500" } cursor-pointer dark:text-white `} >Personal information</li>

                        <li onClick={() => setShowDeleteAccount("preferences")} className={`${showDeleteAccount === "preferences" && "font-bold text-[#21295C] dark:text-cyan-500"} cursor-pointer dark:text-white `} >My Preferences</li>

                        <li onClick={() => setShowDeleteAccount("delete")} className={`${showDeleteAccount === "delete" && "font-bold text-[#21295C] dark:text-cyan-500"} cursor-pointer dark:text-white `} >Delete account</li>

                    </ul>
                </nav>

            </div>

            {showDeleteAccount === "info" && <ManageInfo user={user} /> }
            {showDeleteAccount === "delete" && <DeleteAccount /> }
            {showDeleteAccount === "preferences" && <UserPreferences /> }

        </div>

    </div>
  )
}
