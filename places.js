window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [

       {
           name: 'CITY AT SPEED 2019 - Acrylic on canvas 16 x 20 inches',
           logo: 's3.png',
           width: "1",
           height: "0.8",
           location: {
               lat: 44.83718,
               lng: 20.38938,
           }
        
       },
       {
        name: 'WIND OF CHANGE 2019 Acrylic on canvas 20 x 16 inches',
        logo: 's.png',
        width: "0.8",
        height: "1",
        location: {
            lat: 44.83692,
            lng: 20.38892,
        }
     
    },
       {
        name: 'PLEASANTVILLE 2019 - Acrylic on canvas 22 x 28 inches',
        logo: 's2.png',
        width: "1",
        height: "0.8",
        location: {
            lat: 44.83594,
            lng: 20.38905,
        }
     
    },
       {
        name: 'CITY AT SPEED 2019 - Acrylic on canvas 16 x 20 inches',
        logo: 's.png',
        width: "1",
        height: "0.8",
        location: {
            lat: 44.054821,
            lng: 20.487535,
        }
    },
    {
        name: 'WIND OF CHANGE 2019 Acrylic on canvas 20 x 16 inches',
        logo: 's3.png',
        width: "0.8",
        height: "1",
        location: {
            lat: 44.05456,
            lng: 20.48728,
        }
     
    },
    {
        name: 'PLEASANTVILLE 2019 - Acrylic on canvas 22 x 28 inches',
        logo: 's2.png',
        width: "1",
        height: "0.8",
        location: {
            lat: 44.05499,
            lng: 20.48730,
        }
     
    },

    {
        name: 'WIND OF CHANGE 2019 Acrylic on canvas 20 x 16 inches',
        logo: 's3.png',
        width: "0.8",
        height: "1",
        location: {
            lat: 40.71574,
            lng: -73.83696,
        }
     
    },
    {
        name: 'PLEASANTVILLE 2019 - Acrylic on canvas 22 x 28 inches',
        logo: 's2.png',
        width: "1",
        height: "0.8",
        location: {
            lat: 40.71547,
            lng: -73.83660,
        }
     
    },
    {
        name: 'CITY AT SPEED 2019 - Acrylic on canvas 16 x 20 inches',
        logo: 's.png',
        width: "1",
        height: "0.8",
        location: {
            lat: 40.71574,
            lng: -73.83692,
        }
     
    },
   
    
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let name2 = place.name;
       let logo = place.logo;
       let wdt = place.width;
       let hg = place.height;
       

       const model = document.createElement('a-image');
                   model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                   model.setAttribute('name', name2);
                   model.setAttribute('src', logo);
                   model.setAttribute('width', wdt); 
                   model.setAttribute('height', hg); 
                   model.setAttribute('look-at', '[gps-camera]');





                   // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                   model.setAttribute('scale', '20, 20');

                   

    

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
       
       const clickListener = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        
        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');


        if (el && el === ev.target) {

    
            const label = document.createElement('span');
            const msg = document.createElement('p');
            const container = document.createElement('div');
            const btn = document.createElement('button');
           // const btn1 = document.createElement('button');
            container.setAttribute('id', 'place-label');
            label.innerText = name;
           // msg.innerText = distanceMsg;
            btn.innerText = 'Close';
           // btn1.innerText = 'Play';
            container.appendChild(label);
            container.appendChild(msg);
            container.appendChild(btn);
            //container.appendChild(btn1);
            document.body.appendChild(container);

           // btn1.addEventListener("click", function() {
             //   let play = new SpeechSynthesisUtterance();
              // play.text = name;
              // window.speechSynthesis.speak(play);
              //});

            btn.addEventListener("click", function() {
                container.parentElement.removeChild(container);
              });

           // setTimeout(() => {
             //   container.parentElement.removeChild(container);
            //}, 1500);
        }
    };

    model.addEventListener('click', clickListener);
       scene.appendChild(model);
   });
}