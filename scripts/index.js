async function extractData(API) {
    return await fetch(API).then(response=> response.json());
}
createSatysComponent();
searchField.onkeydown = ()=> {
    main.style.display='none';
    loader.style.display='block';
    snip.style.display='block';
    loader.style.marginTop='4rem';
    try {
        extractData('../scripts/json/stays.json')
        .then(stays=> {
            stays.forEach((stay,i)=> {
                allStays[i].classList.add('hide_stay');
                if(stay.city.toLowerCase().includes(searchField.value.toLowerCase())) {
                    allStays[i].classList.remove('hide_stay');
                    locat.classList.add('open');
                    locationAlert.innerHTML = `${stay.city}, Finland`;

                    setTimeout(()=> {
                        main.style.display='block';
                        header.style.display='block';
                        loader.style.display='none';
                        snip.style.display='none';
                    }, 600)
                }
            })
        })
    }catch {
        return 'there is no state!';
    }
}
visitGuest.onclick = function () {
    blockComp.classList.remove('focus');
    closeEdit.parentElement.style.display='none';
    searchComponent.classList.add('fl_c');
    loc.classList.remove('open');
    guestEdit.classList.remove('open');
    logo.classList.remove('close');
    if(childrens+adults==0){
        guestsVisited.textContent = `add guests`;
    }
    else {
        guestsVisited.textContent = `${childrens+adults} guests`;
    }
    try {
        extractData('../scripts/json/stays.json')
        .then(stays=> {
            stays.forEach((stay,i)=> {
                allStays[i].classList.add('hide_stay');
                if(stay.maxGuests<=childrens+adults) {
                    main.style.display='none';
                    header.style.display='none';
                    loader.style.display='block';
                    snip.style.display='block';
                    allStays[i].classList.remove('hide_stay');
                    locationAlert.innerHTML = `${stay.city}, Finland`;
                    setTimeout(()=> {
                        main.style.display='block';
                        header.style.display='block';
                        loader.style.display='none';
                        snip.style.display='none';
                    }, 600)
                }
            })
        })
    }catch(err) {
        return err;
    }
}