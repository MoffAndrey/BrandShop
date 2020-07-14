
	let main = document.querySelector('#cartMenu');
	document.addEventListener('click', evt => {
        if (evt.target.classList.contains('cartButton')) {
            main.classList.toggle('d-none');
            main.classList.toggle('d-block');
        }
    })
