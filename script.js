
const targetDiv = document.getElementById('targetDiv');


if (targetDiv) {
  
  targetDiv.style.backgroundColor = 'yellow';

  
  targetDiv.style.margin = '20px';

  targetDiv.style.padding = '10px';


  targetDiv.style.fontSize = '18px';


  targetDiv.style.fontWeight = 'bold';


  targetDiv.style.height = '200px';


  targetDiv.style.width = '300px';
} else {
  console.error('Element with id "targetDiv" not found.');
}
