let adults = 0;
let childrens = 0;
editGuests();
function editGuests() {
    addGuest[0].onclick = function() {
        adults++;
        this.previousElementSibling.textContent=adults;
    }
    addGuest[1].onclick = function() {
        childrens++;
        this.previousElementSibling.textContent=childrens;
    }
    removeGuests[0].onclick = function() {
        if(adults>0)adults--;
        this.nextElementSibling.textContent=adults;
    }
    removeGuests[1].onclick = function() {
        if(childrens>0)childrens--;
        this.nextElementSibling.textContent=childrens;
    }
}
closeEdit.onclick = function() {
    blockComp.classList.remove('focus');
    this.parentElement.style.display='none';
    searchComponent.classList.add('fl_c');
    loc.classList.remove('open');
    guestEdit.classList.remove('open');
    logo.classList.remove('close');
}
document.querySelector('.blc').onclick = function() {
    blockComp.classList.add('focus');
    closeEdit.parentElement.style.display='flex';
    searchComponent.classList.remove('fl_c');
    guests.onclick = function() {
        guestEdit.classList.add('open');
        loc.classList.remove('open');
    }
    searchField.onfocus = function() {
        loc.classList.add('open');
        guestEdit.classList.remove('open');
    }
    searchButton.onclick = function() {
        closeEdit.parentElement.style.display='none';
        searchComponent.classList.add('fl_c');
        loc.classList.remove('open');
        guestEdit.classList.remove('open');
        blockComp.classList.remove('focus');
    }
}