import logo from "../assets/logo.png"
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   <img src={logo} alt="" className="w-34 h-28 "/>
    <p>Fashion Clothing Store<br/>Where Fashion Meets Elegance</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover hover:text-orange-600">Branding</a>
    <a className="link link-hover hover:text-orange-600">Design</a>
    <a className="link link-hover hover:text-orange-600">Marketing</a>
    <a className="link link-hover hover:text-orange-600">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title ">Company</h6> 
    <a className="link link-hover hover:text-orange-600">About us</a>
    <a className="link link-hover hover:text-orange-600">Contact</a>
    <a className="link link-hover hover:text-orange-600">Jobs</a>
    <a className="link link-hover hover:text-orange-600">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover hover:text-orange-600">Terms of use</a>
    <a className="link link-hover hover:text-orange-600">Privacy policy</a>
    <a className="link link-hover hover:text-orange-600">Cookie policy</a>
  </nav> 
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Fashion Clothing Store</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;