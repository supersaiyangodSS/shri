const loader = document.getElementById('loader')

window.addEventListener('load', () => {
  loader.style.display = 'none';
})


document.addEventListener('DOMContentLoaded', () => {
    const beadsContainer = document.getElementById('mala');
    const counterDisplay = document.getElementById('counter');
    const incrementBtn =  document.getElementById('increment');
    const resetBtn = document.getElementById('reset');
    const totalJapaCounter = document.getElementById('total-japa')
    const totalMaliCounter = document.getElementById('total-mali')

    const totalBeads = 108;
    let currentCount = parseInt(localStorage.getItem('currentCount')) || 0;
    let totalJapaCount = parseInt(localStorage.getItem('totalJapaCount')) || 0;
    let totalMaliCount = parseInt(localStorage.getItem('totalMaliCount')) || 0;

    for (let i = 0; i < totalBeads; i++) {
        const bead = document.createElement('div');
        bead.classList.add('bead');
        beadsContainer.appendChild(bead);
    }

    const beads = document.querySelectorAll('.bead');

    for (let i = 0; i < currentCount; i++) {
        beads[i].classList.add('active');
    }
    counterDisplay.textContent = currentCount;
    totalJapaCounter.textContent = totalJapaCount;
    totalMaliCounter.textContent = totalMaliCount;

    incrementBtn.addEventListener('click', () => {
        if (currentCount < totalBeads) {
            beads[currentCount].classList.add('active');
            currentCount++;
            counterDisplay.textContent = currentCount;
            localStorage.setItem('currentCount', currentCount);
        }

        totalJapaCount++;
        totalJapaCounter.textContent = totalJapaCount;
        localStorage.setItem('totalJapaCount', totalJapaCount);

        if (currentCount === totalBeads) {
            totalMaliCount++;
            totalMaliCounter.textContent = totalMaliCount;
            localStorage.setItem('totalMaliCount', totalMaliCount);
            currentCount = 0;
            beads.forEach(bead => bead.classList.remove('active'));
            localStorage.setItem('currentCount', currentCount);
        }
    })


    resetBtn.addEventListener('click', () => {
        currentCount = 0;
        totalJapaCount = 0;
        totalMaliCount = 0;
        counterDisplay.textContent = currentCount;
        totalJapaCounter.textContent = totalJapaCount;
        totalMaliCounter.textContent = totalMaliCount;
        beads.forEach(bead => bead.classList.remove('active'));
        localStorage.setItem('currentCount', currentCount);
        localStorage.setItem('totalJapaCount', totalJapaCount);
        localStorage.setItem('totalMaliCount', totalMaliCount);
    })
})