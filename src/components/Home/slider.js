let items = document.querySelectorAll('.carousel .carousel-item');
// let container = document.querySelectorAll('.fw-light');
// container.style.backgroundColor = 'yellow';

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// https://www.codeply.com/p/0CWffz76Q9
