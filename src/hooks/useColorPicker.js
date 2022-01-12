import { useState } from "react";

export default function useColorPicker() {
  // TODO: Implement me!
  const [fgColor, setFgColor] = useState('#ffcc00');
  const [bgColor, setBgColor] = useState('#212121');
  const [didChangeColor, setDidChangeColor] = useState(false)

  const handleColorChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      default:
        break;
    }
}

return ({handleColorChange, setDidChangeColor, didChangeColor, fgColor, bgColor})

}