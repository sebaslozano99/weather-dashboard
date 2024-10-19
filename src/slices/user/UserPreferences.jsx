import ManageInfoCard from "./ManageInfoCard";
import Button from "../../ui/Button";
import { useTempScaleContext } from "../../contexts/TempScaleContext";


export default function UserPreferences() {

  const { isCelcius, handleChangeTempScale } = useTempScaleContext();

  return (
    <div className="flex flex-col gap-3 p-2 w-full md:w-[70%] h-full border-4" >

        <div className="flex flex-col gap-2 h-[20%] border-2" >
            <h2 className="font-bold text-2xl" >User Preferences</h2>
            <p className="text-sm" >Manage your temperature scales and mode.</p>
        </div>

        <div className="grid md:grid-cols-2 grid-rows-3 gap-3  h-[80%] border-4" >
            <ManageInfoCard label="Temp scale" data="Current Scale: Farenheit" >
                <Button setterFunc={handleChangeTempScale} >
                    { isCelcius ? "C" : "F" }
                </Button>
            </ManageInfoCard>

            <ManageInfoCard label="Themes" data="Current Scale: Light" >
                <Button>D</Button>
            </ManageInfoCard>
        </div>

    </div>
  )
}
