import SignUp from "../slices/user/SignUp";



export default function CreateAccount() {
  return (
    <div className={`flex justify-center items-center w-full h-[90vh] p-2 md:p-6 lg:p-8`} >
      <SignUp />
    </div>
  )
}
