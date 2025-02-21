let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell =document.createElement('div')
    cell.classList.add('cell')
    field.appendChild(cell)
}
let current_color = "red"
let isClicked = false
let fill_mod = false
document.querySelector('.fill').addEventListener('click', function(){
    fill_mod = true
})
document.addEventListener('mousedown', function(){
    isClicked = true
})
document.addEventListener('mouseup', function(){
    isClicked = false
})
document.body.style.cursor.background = current_color
let cells = document.querySelectorAll('.cell')
for (let i = 0; i < cells.length; i++){ 
    cells[i].addEventListener('mousemove', function(){
        if (isClicked){
            cells[i].style.background = current_color
        }})
    cells[i].addEventListener('click', function(){
        if (fill_mod){
            for (let j = 0; j < cells.length; j++){
                cells[j].style.background = current_color
                fill_mod = false
            }
        }
        else{
            cells[i].style.background = current_color
    }})}
let color_cells = document.querySelectorAll('.color-cell')
for (let i = 0; i < color_cells.length; i++){
    color_cells[i].addEventListener('click', function(){
        current_color = getComputedStyle(color_cells[i]).background
        document.style.cursorColor = current_color
    })
}
let eraser = document.querySelector('.eraser')
eraser.addEventListener('click', function(){
    current_color = 'gray'
})
document.querySelector('.save').addEventListener('click', function(){
    domtoimage.toJpeg(field, { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-art.jpeg';
        link.href = dataUrl;
        link.click();
    });
})
