import Spinner from "./Spinner";



export default function LazySpinner() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#9EB3C2]" >
      <Spinner size={15} />
    </div>
  )
}
