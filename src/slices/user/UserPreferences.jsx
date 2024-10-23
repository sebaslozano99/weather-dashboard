import { useTempScaleContext } from "../../contexts/TempScaleContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import ManageInfoCard from "./ManageInfoCard";
import Button from "../../ui/ToggleButton";


export default function UserPreferences() {

  const { isCelcius, handleChangeTempScale } = useTempScaleContext();
  const { isDarkMode, handleDarkMode } = useThemeContext();

  return (
    <div className="flex flex-col gap-3 p-2 w-full md:w-[70%] h-full" >

        <div className="flex flex-col gap-2 h-[20%]" >
            <h2 className="font-bold text-2xl dark:text-white" >User Preferences</h2>
            <p className="text-sm dark:text-white" >Manage your temperature scales and mode.</p>
        </div>

        <div className="grid md:grid-cols-2 grid-rows-3 gap-3  h-[80%]" >

            <ManageInfoCard label="Temp scale" data={`Current Scale: ${isCelcius ? "Celcius" : "Farenheit"}`} >
                <Button setterFunc={handleChangeTempScale} >
                    { isCelcius ? "C" : "F" }
                </Button>
            </ManageInfoCard>

            <ManageInfoCard label="Themes" data={`Current Theme: ${isDarkMode ? "Dark" : "Light"}`} >
                <Button setterFunc={handleDarkMode} >
                    { !isDarkMode ? <IoSunnyOutline size={20} /> : <FiMoon size={20} />}
                </Button>
            </ManageInfoCard>
            
        </div>

    </div>
  )
}
