import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import ManageInfoCard from "./ManageInfoCard";
import PropTypes from "prop-types";




export default function ManageInfo({user}) {
  return (

    <div className="flex flex-col gap-3 p-2 w-[70%] h-full border-2 border-green-500" >

        <div className="flex flex-col gap-2 h-[20%]" >
            <h2 className="font-bold text-2xl" >Personal Information</h2>
            <p className="text-sm" >Manage your personal information, including email address, username and password.    </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-3  h-[80%]" >

            <ManageInfoCard label="Username" data={`${user.user_metadata.username}`} >
                <FaRegUserCircle size={30} color="#21295C" />
            </ManageInfoCard>

            <ManageInfoCard label="Email" data={`${user.email}`} >
                <MdOutlineEmail size={30} color="#21295C" />
            </ManageInfoCard>

            <ManageInfoCard label="Password" data="************" >
                <MdOutlinePassword size={30} color="#21295C" />
            </ManageInfoCard>

        </div>

    </div>

  )
}



ManageInfo.propTypes = {
    user: PropTypes.object,
}