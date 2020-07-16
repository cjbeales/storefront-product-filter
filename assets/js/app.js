// Grid
let gridItem = document.querySelectorAll('.product');
let sectionTitle = document.querySelectorAll('.section-title');
let filterBtn = document.querySelectorAll('li');
let clearAll = document.getElementById('clearAll');

for (let a = 0; a < gridItem.length; a++) {
    if (gridItem[a].classList.contains('popular')) {
        gridItem[a].classList.add('active');
    }
}

function getAttributes(event) {
    event.preventDefault();
    let thisValue = event.target.getAttribute('data-filter');
    let thisBtn = event.target;

    for (let a = 0; a < gridItem.length; a++) {
        const gridFilterAttr = gridItem[a].getAttribute('data-filterType');
        if (thisValue == gridFilterAttr) {
            gridItem[a].classList.add('active');
            gridItem[a].classList.add('animate__animated');
            gridItem[a].classList.add('animate__fadeIn');
        } else if (thisValue !== gridFilterAttr) {
            gridItem[a].classList.remove('active');
        }
    }

    for (let b = 0; b < sectionTitle.length; b++) {
        const gridFilterAttr = sectionTitle[b].getAttribute('data-filterType');
        if (thisValue == gridFilterAttr) {
            sectionTitle[b].classList.add('active');
            sectionTitle[b].classList.add('animate__animated');
            sectionTitle[b].classList.add('animate__fadeIn');
        } else if (thisValue !== gridFilterAttr) {
            sectionTitle[b].classList.remove('active');
        }
    }

    if (thisBtn.classList.contains('active')) {} else {
        for (let c = 0; c < filterBtn.length; c++) {
            filterBtn[c].classList.remove('active');
        }
        thisBtn.classList.add('active');
    }
}

for (let b = 0; b < filterBtn.length; b++) {
    filterBtn[b].addEventListener('click', getAttributes);
}

clearAll.addEventListener('click', function () {
    for (let a = 0; a < gridItem.length; a++) {
        if (gridItem[a].classList.contains('popular')) {
            gridItem[a].classList.add('active');
            gridItem[a].classList.add('animate__animated');
            gridItem[a].classList.add('animate__fadeIn');
        }
    }
});