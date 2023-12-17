import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
<div className="icons d-flex gap-5 justify-content-evenly">
<IoLogoWhatsapp className="whatsapp" />
<FaFacebook className="facebook" />
<PiInstagramLogoFill className="instagram" />
<BsTelegram className="telegram" />
</div>
    </footer>
  )
}

export default Footer