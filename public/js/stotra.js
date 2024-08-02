const loader = document.getElementById('loader')

window.addEventListener('load', () => {
  loader.style.display = 'none';
})

const data = [
    {
        "id": 1,
        "title": "येत आहे लवकरच",
        "content": ""
    },
]

function showContent(id) {
}

data.forEach(item => {
    let element = document.createElement('button');
    element.textContent = item.title;

    document.getElementById('container').appendChild(element)
})

