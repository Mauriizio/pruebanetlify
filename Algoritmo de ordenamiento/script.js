document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const values = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    
    function createBars(arr) {
        container.innerHTML = '';
        arr.forEach(value => {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${value * 3}px`;
            bar.style.width = '10px';
            container.appendChild(bar);
        });
    }

    async function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    createBars(arr);
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
            }
        }
    }

    createBars(values);
    bubbleSort(values);
});
