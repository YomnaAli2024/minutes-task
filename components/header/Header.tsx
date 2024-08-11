import NormalSelection from '../normalSelection/normalSelection';
import styles from './Header.module.scss';
const Header = () => {
    const options = [
        {img:"./icons/selectOptions.svg", label:"DXBS09"},
    ]
    return (
        <main className={styles.container}>
            <div className={styles.left}>
                <img src="./icons/minutesLogo.svg" alt="minutesLogo" />
                <NormalSelection options={options}/>

            </div>

            <div className={styles.right}>
                <img src="./icons/bill.svg" alt="bill" />
                <img src="./icons/settings.svg" alt="settings" />
                <img src="./icons/search.svg" alt="search" />
            </div>
        </main>
    )
}
export default Header;
