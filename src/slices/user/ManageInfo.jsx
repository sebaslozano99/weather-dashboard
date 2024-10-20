import { FaRegUserCircle } from "react-icons/fa";
import { useThemeContext } from "../../contexts/ThemeContext";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import ManageInfoCard from "./ManageInfoCard";
import PropTypes from "prop-types";




export default function ManageInfo({user}) {

    const { isDarkMode } = useThemeContext();

  return (

    <div className="flex flex-col gap-3 p-2 w-full md:w-[70%] h-full" >

        <div className="flex flex-col gap-2 h-[20%]" >
            <h2 className="font-bold text-2xl dark:text-white" >Personal Information</h2>
            <p className="text-sm dark:text-white" >Manage your personal information, including email address, username and password.    </p>
        </div>

        <div className="grid md:grid-cols-2 grid-rows-3 gap-3  h-[80%]" >

            <ManageInfoCard label="Username" data={`${user.user_metadata.username}`} >
                <FaRegUserCircle size={30} color={ isDarkMode ? "white" : "#21295C" } />
            </ManageInfoCard>

            <ManageInfoCard label="Email" data={`${user.email}`} >
                <MdOutlineEmail size={30} color={ isDarkMode ? "white" : "#21295C" } />
            </ManageInfoCard>

            <ManageInfoCard label="Password" data="************" >
                <MdOutlinePassword size={30} color={ isDarkMode ? "white" : "#21295C" } />
            </ManageInfoCard>

        </div>

    </div>

  )
}



ManageInfo.propTypes = {
    user: PropTypes.object,
}