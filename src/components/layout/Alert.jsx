import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <strong>
            {" "}
            <p className="strong text-red-900">X</p>
          </strong>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong className="text-black">{alert.msg} </strong>
        </p>
      </div>
    )
  );
}
export default Alert;
