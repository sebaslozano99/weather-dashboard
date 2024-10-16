import { UseAuthContext } from "../contexts/AuthContext";
import LogIn from "../slices/user/LogIn";
import MyAccount from "../slices/user/MyAccount";




export default function Account() {

  const { user } = UseAuthContext();

  return (
    <div className={`flex justify-center items-center w-full min-h-[90vh] md:h-[90vh] p-2 md:p-4 lg:p-8`} >
      { user ? 
        <MyAccount />

        :
      
        <LogIn />
      }
    </div>
  )
}
