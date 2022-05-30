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