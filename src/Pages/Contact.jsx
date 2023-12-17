import { Link } from "react-router-dom"

const Contact = () => {
  
  return (
    <div className="contact d-flex flex-column justify-content-center align-items-center">
<h1>You can reach us also from :</h1>
<a href="mailto:adam@gmail.com">Send</a>
<a href="tel:+123456789">Call Us</a>
    </div>
  )
}

export default Contact