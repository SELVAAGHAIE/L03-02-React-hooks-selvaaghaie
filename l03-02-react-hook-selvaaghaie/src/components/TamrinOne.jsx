import { useState } from 'react';
import styles from './TamrinOne.module.css';

const TamrinOne = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayInputValue, setdisplayInputValue] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setdisplayInputValue(!displayInputValue);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        className={styles.inputField}
      />
      <button onClick={handleButtonClick} className={styles.displayButton}>
        {displayInputValue ? 'Hide Text' : 'Show Text'}
      </button>
      <div>
        {displayInputValue && (
          <>
            <p className={styles.text}>{inputValue}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TamrinOne;