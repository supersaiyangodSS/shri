const loader = document.getElementById('loader')

window.addEventListener('load', () => {
  loader.style.display = 'none';
})

const data = [
    {
        "id": 1,
        "title": "coming soon",
        "content": "content 1"
    },
    {
        "id": 1,
        "title": "coming soon",
        "content": "content 2"
    }
]

function showContent(id) {
}

data.forEach(item => {
    let element = document.createElement('button');
    element.textContent = item.title;

    document.getElementById('container').appendChild(element)
})

