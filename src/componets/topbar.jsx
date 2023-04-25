import styles from './topbar.module.css';

const Topbar = () => {
    return(<div className={styles.hero}>
        <div className={styles.blueBar}>
            <p>Now get exciting rewards on learning. <a href="#" style={{color : "white"}}> Know More</a></p>
            <p className={styles.cross}>&#10540;</p>
        </div>
        <header>
            <div className={styles.header}>
                <div className={styles.sizeHeight}>
                    <h1 className={styles.logo}>EDYODA</h1>
                    <p className={styles.stories}>Stories</p>
                </div>
                <div className={styles.dropDown}>
                    <p>Explore Categories &#118;</p>
                </div>
            </div>
            <div className={styles.header} id={styles.rightheaderpart}>
                <p className={styles.text}>EdYoda is a learning and knowledge <br /> sharing platform for techies</p>
                <button className={styles.buttonStyle}>
                    Go To Main Website
                </button>
            </div>
            <div></div>
        </header>
        </div>
    )
}


export default Topbar;