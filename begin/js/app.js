const titleBtn = document.querySelector('#title-btn');

let anyFunction = () => {
    let num = 10;
    for (let i = 2; i < num; i++) {
        for (let j = 2; j < i - 1; j++) {
            if (i % j == 0) {
                console.log(i);
            }
        }
    }
}

titleBtn.addEventListener('click', anyFunction);