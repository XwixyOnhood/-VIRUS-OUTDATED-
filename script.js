// Reusable styling classes
const roundedBox = `
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const fancyButton = `
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
  transition: background-color 0.2s;

  &:hover {
    background-color: #ddd;
  }  
`

// Apply styles
document.querySelector('.script').style.cssText = roundedBox;

document.querySelector('.button').style.cssText = fancyButton;

// Toggle text box content
document.querySelector('.script-toggle').addEventListener('click', () => {
  const textBox = document.querySelector('.script');

  if (textBox.style.display === 'none') {
    textBox.style.display = 'block';
  } else {
    textBox.style.display = 'none'; 
  }
});
