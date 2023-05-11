let images = [ //gpts 1 version des arrays
    './img/aussicht.jpg',
    './img/bowl.jpg',
    './img/chill.jpg',
    './img/elefanten.jpg',
    './img/hochhaus.jpg',
    './img/palme.jpg',
    './img/tempel.jpg'
];


//gpt verion 4 
function render() {
    const container = document.getElementById('container');
    for (let i = 0; i < images.length; i++) {
      container.innerHTML += `
        <div class="image-container">
          <img class="gallery-image" src="${images[i]}" />
        </div>
      `;
    }
  }
  




//gpt version 3
// function render() {
//     const container = document.getElementById('container');
//     // Erstelle eine leere Variable `addPicture`, um den HTML-Code für jedes Bild zu speichern
//     let addPicture = '';
//     // Iteriere über alle Bilder im `images`-Array
//     for (let i = 0; i < images.length; i++) {
//       // Erstelle ein neues <div> Element mit der Klasse "image-container"
//       addPicture += `<div class="image-container"><img src="${images[i]}" /></div>`;
//     }
//     // Setze das `innerHTML` des Containers auf den HTML-Code für alle Bilder
//     container.innerHTML = addPicture;
//   }
  //meine frage für version 4 : könnte man bei der render function nicht addpicture weglassen und gleich container.innerhtml += (hier div mit den img einfügen) ?

  

// gpt version 2 
// function render() {
//     const container = document.getElementById('container');
//     // Erstelle eine leere Variable `html`, um den HTML-Code für alle Bilder zu speichern
//     let html = '';
//     // Iteriere über alle Bilder im `images`-Array
//     for (let i = 0; i < images.length; i++) {
//       // Erstelle ein neues <div> Element mit der Klasse "image-container"
//       html += `<div class="image-container"><img src="${images[i]}" /></div>`;
//     }
//     // Setze das `innerHTML` des Containers auf den gesamten HTML-Code für alle Bilder
//     container.innerHTML = html;
//   }
//meine weitere frage für version 3 :  bitte benutze eine andere variable als let html da das ja das gesamte html anspricht eher sowas wie addPicture




//gpt version 1
// function render() {
//     const container = document.getElementById('container');
//     // Iteriere über alle Bilder im `images`-Array
//     for (let i = 0; i < images.length; i++) {
//         // Erstelle ein neues <img> Element
//         const img = document.createElement('img');
//         // Setze den `src`-Attribut des Bildes auf den entsprechenden Pfad aus dem `images`-Array
//         img.src = images[i];
//         // Füge das Bild dem HTML-Container hinzu
//         container.appendChild(img);
//     }
// }
// meine weitere frage für version2: lass die bilder bitte ins innereHTML der div mit der id container laden in einzelnen divs



//meine erste frage zum erstellen des arrays nachdem ich die imgs als array ausgegeben habe: schreibe eine Javascript function namens render() welche über alle bilder aus dem array iteriert und diese in den div mit der id 'container' rendert

//bei mir hat es tatsächlich direkt geklappt mit dem bilder array mit dieser formulierung: hallo, bitte erstelle mit ein array namens images in dem die pfade der bilder aufgelistet werden, vor den pfad soll noch ./img/ geschrieben werden um in diesen ordner zu navigieren + (dateien angehängt)