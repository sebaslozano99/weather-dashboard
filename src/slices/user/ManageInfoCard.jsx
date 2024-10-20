import PropTypes from "prop-types";




export default function ManageInfoCard({children, label, data}) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white/20 rounded-xl" >

        <div className="flex items-center justify-between" >
            <h3 className="font-semibold text-xl dark:text-white" >{label}</h3>

            { children }
        </div>

        <p className="text-sm dark:text-white" >{data}</p>
    </div>
  )
}


ManageInfoCard.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    data: PropTypes.string,
}