async function extractData(API) {
    return await fetch(API).then(response=> response.json());
}
createSatysComponent();
searchField.onkeydown = ()=> {
    
    try {
        extractData('../scripts/json/stays.json')
        .then(stays=> {
            stays.forEach((stay,i)=> {
                allStays[i].classList.add('hide_stay');
                if(stay.city.toLowerCase().includes(searchField.value.toLowerCase())) {
                    allStays[i].classList.remove('hide_stay');
                    locat.classList.add('open');
                    locationAlert.innerHTML = `${stay.city}, Finland`;
                }
            })
        })
    }catch {
        return 'there is no state!';
    }
}
visitGuest.onclick = function () {
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
                    allStays[i].classList.remove('hide_stay');
                    locationAlert.innerHTML = `${stay.city}, Finland`;
                }
            })
        })
    }catch(err) {
        return err;
    }
}