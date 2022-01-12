import { useEffect, useState } from 'react';
import Display from '../../components/Display/Display';
import useAffirmation from '../../hooks/useAffirmation';
import useColorPicker from '../../hooks/useColorPicker';
import styles from './ColorPicker.css';

export default function ColorPicker() {

  const {
    handleColorChange,
    setDidChangeColor,
    didChangeColor,
    fgColor,
    bgColor,
  } = useColorPicker();
  const { setContent, affirmation, content } = useAffirmation({bgColor, fgColor});

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={fgColor}
          onChange={handleColorChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleColorChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setDidChangeColor(false);
          }}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
