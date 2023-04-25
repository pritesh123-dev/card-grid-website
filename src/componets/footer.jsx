
import styles from './footer.module.css'


const Footer = () => {
    return(
    <footer>
      <ul>
          <li style={{fontSize:'18px', fontWeight : '600'}}>EDYODA</li>
          <li>1st Floor,</li>
          <li>Gopalan Millennium Tower,</li>
          <li>ITPL Main Rd, Brookefield</li>
          <li>Bengaluru, Karnataka-560037,</li>
          <li>India</li>
          <li className={styles.pointerStyle}>hello@edyoda.com</li>
        </ul>
        <ul>
          <li className= {styles.headLine}>EDYODA</li>
          <li className={styles.pointerStyle}>About Us</li>
          <li className={styles.pointerStyle}>Careers</li>
          <li className={styles.pointerStyle}>Contact Us</li>
          <li className={styles.pointerStyle}>Terms of Use</li>
          <li className={styles.pointerStyle}>Privacy Policy</li>
        </ul>
        <ul>
          <li className= {styles.headLine}>RESOURCES</li>
          <li className={styles.pointerStyle}>Learning Paths</li>
          <li className={styles.pointerStyle}>Courses</li>
          <li className={styles.pointerStyle}>Learning Videos</li>
          <li className={styles.pointerStyle}>Educators</li>
          <li className={styles.pointerStyle}>EdYoda Stories</li>
          <li className={styles.pointerStyle}>University</li>
        </ul>
        <ul>
        <li className= {styles.headLine}>FOR ENTERPRISES</li>
          <li className={styles.pointerStyle}>Train Your Employees</li>
          <li className= {styles.headLine} >QUICK LINKS</li>
          <li className={styles.pointerStyle}>Learn and Earn</li>
          <li className={styles.pointerStyle}>Become a Learning-Enabler</li>
          <li className={styles.pointerStyle}>Tips for Learning-Enabler</li>
          <li className={styles.pointerStyle}>Request New Topic</li>
          <li className={styles.pointerStyle}>Certification</li>
          <li className={styles.pointerStyle}>Affiliate Progam</li>
        </ul>
      
    </footer>
      
    
    )
}

export default Footer;