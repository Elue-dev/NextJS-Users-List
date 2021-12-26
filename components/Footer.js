import footerStyles from '../styles/FooterStyles/Footer.module.css'

const Footer = () => {
    return ( 
        <div className={footerStyles.container}>
            <p>&copy; 2021 Next JS App<br/> 
                Developed by Elue Wisdom</p>
        </div>
     );
}
 
export default Footer;