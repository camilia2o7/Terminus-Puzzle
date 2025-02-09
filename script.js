function updatePreview(select, previewId) {
const preview = document.getElementById(previewId);
const value = select.value;
preview.innerHTML = value ? 
`<img src="/images/${value}.png" alt="Symbol ${value}">` : 
'';
calculateSolution();
}
function calculateSolution() {
const x = parseInt(document.getElementById('laptopX').value) || 0;
const y = parseInt(document.getElementById('laptopY').value) || 0;
const z = parseInt(document.getElementById('laptopZ').value) || 0;
const equation1 = 2 * x + 11;
const equation2 = (2 * z + y) - 5;
const equation3 = Math.abs((y + z) - x);
const solution = `${String(equation1).padStart(2, '0')}-${String(equation2).padStart(2, '0')}-${String(equation3).padStart(2, '0')}`;
document.getElementById('solution').textContent = solution;
}
document.getElementById('laptopX').value = '20';
document.getElementById('laptopY').value = '11';
document.getElementById('laptopZ').value = '22';
updatePreview(document.getElementById('laptopX'), 'previewX');
updatePreview(document.getElementById('laptopY'), 'previewY');
updatePreview(document.getElementById('laptopZ'), 'previewZ');
calculateSolution();