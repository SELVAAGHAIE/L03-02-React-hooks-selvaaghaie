
import  { useState, useEffect } from 'react';
import styles from './TamrinTwo.module.css';
const TamrinTwo = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Counter: {counter}</p>
    </div>
  );
};

export default TamrinTwo;