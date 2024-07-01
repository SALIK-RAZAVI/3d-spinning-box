function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createFace(className, color) {
    const face = document.createElement('div');
    face.classList.add('face', className);
    face.style.backgroundColor = color;
    return face;
}

function generateBox() {
    const box = document.querySelector('.box');
    box.innerHTML = '';
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    faces.forEach(face => {
        const color = getRandomColor();
        box.appendChild(createFace(face, color));
    });
}

document.getElementById('speed').addEventListener('input', function() {
    const speed = this.value;
    const box = document.querySelector('.box');
    box.style.animationDuration = `${11 - speed}s`;
});

generateBox();
