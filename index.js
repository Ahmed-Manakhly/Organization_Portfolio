// nav

let menuitem = document.querySelectorAll('.navbar ul li a');
menuitem.forEach(item => {
    item.addEventListener('click', (e) => {
        menuitem.forEach((item) => {
            item.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
    })
});
// end of nav
// our-work

let menuitem2 = document.querySelectorAll('.our-work ul li ');
removeact = () => {
    menuitem2.forEach(item => {
        item.classList.remove('active');
    })
};
menuitem2.forEach(item => {
    item.addEventListener('click', () => {
        removeact()
        item.classList.add('active');
    })
});
//------------------------------------------------------

let menuitem3 = document.querySelectorAll('.our-work .row div div ');
menuitem2.forEach((item2) => {
    item2.addEventListener('click', (e) => {
        let item2Name = e.currentTarget.innerText;
        menuitem3.forEach((item3) => {
            if (item2Name == "All") {
                item3.parentNode.style.display = 'block'
            } else if (item3.dataset.work == item2Name) {
                item3.parentNode.style.display = 'block'
            } else {
                item3.parentNode.style.display = 'none'
            }
            // console.log(item3.dataset.work);
            // console.log(item2Name);
        });
    });
});

// end of our-work