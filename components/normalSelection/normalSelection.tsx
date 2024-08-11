'use client';
import { useState } from 'react';

import styles from './normalSelection.module.scss';

const NormalSelection = ({ options }: { options: {img:string, label:string}[] }) => {
    const [selected, setSelected] = useState(options[0]);
    const [isOpened, setIsOpened] = useState(false);

    const handleOptionsToggled = () => {
        setIsOpened(!isOpened);
    };

    const handleClick = (event: any) => {
        setSelected(event.target.innerText);
    };
    return (
        <main className={styles.container}>
            <div className={styles.selectInput} onClick={handleOptionsToggled}>
                <div className={styles.labelContainer}>
                    <label htmlFor="option">
                      <img src={selected.img} alt="" />
                      <p>{selected.label}</p>
                      </label>
                    <span className={`${styles.arrow} ${isOpened ? styles.up : ''}`}></span>
                </div>
                {isOpened ? (
                    <div className={styles.options}>
                        {options.map((option) => (
                            <div className={styles.labelContainer} key={option} onClick={handleClick}>
                              <label htmlFor="option">
                                <img src={option.img} alt="" />
                                <p>{option.label}</p>
                              </label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </main>
    );
};
export default NormalSelection;
