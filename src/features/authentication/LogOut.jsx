import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogOut() {
  const {logout,isLoginOut} =useLogout()
  return (
    <ButtonIcon onClick={logout} >
      {!isLoginOut ? <HiArrowRightOnRectangle /> : <SpinnerMini/>}
    </ButtonIcon>
  );
}

export default LogOut;
