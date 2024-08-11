/* eslint-disable css-modules/no-undef-class */
import styles from './SideNav.module.scss';
const SideNav = ({iconsNames}:{iconsNames:string[]})=>{
    return(
        <main className={styles.container}>
            {iconsNames.map((icon, index)=>(
                <img key={index} src={`icons/${icon}.svg`} alt={icon} />
            ))
            }
        </main>

    )

}
export default SideNav;
