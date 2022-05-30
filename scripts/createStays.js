function createSatysComponent() {
    try {
        extractData('../scripts/json/stays.json')
        .then(stays=> {
            document.getElementById('count_stays').textContent=`+${stays.length} stays`;
            stays.forEach(stay=> {
                function isBeds() {
                    if(stay.beds != null) {
                        return stay.beds+'beds';
                    }else {
                        return '';
                    }
                }

                const mainDiv = document.createElement('div');
                const miniTitles = document.createElement('div');
                const mainTitle = document.createElement('h3');
                const superHost = document.createElement('div');
                const type = document.createElement('p');
                const rate = document.createElement('div');
                const star = document.createElement('img');
                const samp = document.createElement('samp');

                mainDiv.setAttribute('class', `stay ${stay.city.toLowerCase()}`);
                miniTitles.setAttribute('class','fl_ra_t');
                superHost.setAttribute('class','supr');
                rate.setAttribute('class','rate');
                star.setAttribute('src', '../images/star.svg');
                star.setAttribute('alt', 'rating');

                samp.textContent=stay.rating;
                mainTitle.textContent = stay.title;
                type.innerHTML = `${stay.type}. <span>${isBeds()}</span>`
                mainDiv.innerHTML = `
                <img src='${stay.photo}' alt='${stay.type}'>
                `
                if(stay.superHost) {
                    const strong = document.createElement('strong');
                    strong.textContent='SUPER HOST';
                    superHost.appendChild(strong);
                }
                
                rate.appendChild(star);
                rate.appendChild(samp);
                superHost.appendChild(type);
                miniTitles.appendChild(superHost);
                miniTitles.appendChild(rate);
                mainDiv.appendChild(miniTitles);
                mainDiv.appendChild(mainTitle);
                staysComponent.appendChild(mainDiv);
            })
        })
    }catch(err) {
        return err;
    }
}