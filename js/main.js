var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

let clickDropdown = document.querySelectorAll(".click-dropdown");
clickDropdown.forEach(clickDrop => {
    let openElement = clickDrop.querySelector(".open-drop")
    openElement.addEventListener("click", () => {
        if (openElement.className.includes("no-close")) {
            clickDrop.classList.add("is-show");
        } else {
            clickDrop.classList.toggle("is-show");
        }
    }, supportsPassive ? { passive: true } : false);
});
window.addEventListener("click", (event) => {
    clickDropdown.forEach(clickDropd => {
        if (!event.composedPath().includes(clickDropd) && !clickDropd.className.includes("win-not-close")) {
            clickDropd.classList.remove("is-show");
        } else if (event.composedPath().includes(clickDropd) && !event.composedPath().includes(clickDropd.querySelector(".click-dropdown-content")) && !event.composedPath().includes(clickDropd.querySelector(".open-drop")) && !clickDropd.className.includes("win-not-close")) {
            clickDropd.classList.remove("is-show");
        }
    });
}, supportsPassive ? { passive: true } : false);

// var slider = tns({
//     container: '.my-slider',
//     items: 1,
//     slideBy: 'page',
//     autoplay: true,
//     autowidth: true,
//     controlsContainer: '#carousel-controls'
//   });

let submit = document.getElementById('submit');
if (submit) {
    submit.addEventListener('click', function (){
        let name = document.getElementById('form-name');
        let email = document.getElementById('form-email');
        let text = document.getElementById('form-text');

        if ( ! name.value || ! email.value || ! text.value) {
            alert('Zkontrolujte, zda máte formulář vyplněn správně.');
            return;
        }

        let msg = {
            subject: 'ZORRAK - Nezávazná poptávka',
            text: 'Nezávazná poptávka od ' + name.value + ' (' + email.value + ') - ' + text.value,
            html: '<h2>Nezávazná poptávka</h2><br>Jméno: <b>' + name.value + ' (' + email.value + ') </b><br><br>' + text.value.replaceAll('\n','<br>'),
            email: email.value
        }

        fetch('https://zorak-mailer.vercel.app/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(msg),
        });

        name.value = '';
        email.value = '';
        text.value = '';

        document.getElementsByClassName('message-ok')[0].style.display = 'block';
    });
}

window.addEventListener('load', function (){
    let type = location.search.split('type=')[1];

    if (type === 'obklady') {
        document.getElementById('form-name').focus();
        document.getElementById('form-text').innerHTML = 'Dobrý den, \n\n' +
            'prosím o zaslání nezávazné nabídky na obklady / dlažbu. ' +
            '\n\nJedná se o rozměry: ' +
            '\n\nDěkuji. \n';
    } else if (type === 'okna') {
        document.getElementById('form-name').focus();
        document.getElementById('form-text').innerHTML = 'Dobrý den, \n\n' +
            'prosím o zaslání nezávazné nabídky na dveře / okna. ' +
            '\n\nJedná se o rozměry: ' +
            '\n\nDěkuji. \n';
    }
});