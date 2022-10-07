//*************************** Video 12 ***************************
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

/* 
const urlApi = "https://platzi-avo.vercel.app/api/avo";

// Web API
// Conectarnos al server
window
.fetch(urlApi)
// Procesar la respuesta y convertirla a JSON
.then((respuesta) => respuesta.json())
// JSON -> Data -> Renderizar info browser
.then((respuestaJSON) => {
    console.log(respuestaJSON);
    respuestaJSON.data.forEach(element => {
        console.log(element.name);
    });
});

//*************************** Promesas con async/away ***************************
const getDataAvo = async (urlApi) =>{
    try{
        const respuesta2 = await window.fetch(urlApi);
        const respuestaJSON2 = await respuesta2.json();
        respuestaJSON2.data.forEach(elemento => {
            console.log(elemento.price);
        })
    } catch (error){
        console.error(error);
    }
};
getDataAvo(urlApi);

//*************************** Otra forma de ver el Async ***************************
//URL API
const url = "https://platzi-avo.vercel.app/api/avo";*/

/*Web API Fetch
La utilizamos para traer recursos desde cualquier otro sitio web
Lo unico que tenemos que pasarle es nuestra url
1. Nos conectaremos al servidor*/
//window
   //.fetch(url)
/*2. Procesar la respuesta y despues la convertimos en JSON
   Fetch es algo que nos devuelve una promesa asi que
   trabajaremos con promesas para obtener la respuesta
   y transformarla en JSON*/
   //.then(respuesta => respuesta.json())

/*3.
Luego de que convirtamos la respuesta en JSON lo que obtenemos
ahora es informacion y la obtenemos concatenando otra promesa
Cuando tengamos el JSON  tendremos esa informacion que
nos servira para renderizar esa info en nuestro navegador*/
   //.then(responseJson =>{

       //const todosLosItems = [];
       /*recorremos cada uno de los elementos que estan en arrays
       con un forEach*/
       //responseJson.data.forEach(item => {
       /*atraves del parametro de la funcion del forEach accedemos
       a los elementos de la respuesta json*/

   //creamos nuestros elementos
       /*const imagen = document.createElement('img');
       const titulo = document.createElement('h2');
       const precio = document.createElement('div');
     
   // cremos el contenedor donde vamos a poner nuestros elementos
       const container = document.createElement('div');*/

   /*agregamos los elementos a un contenedor
       container.appendChild(imagen);
       container.appendChild(titulo);
       container.appendChild(precio);*/
       /*container.append(imagen,titulo,precio);
       
   //agregamos el contenedor en nuestro body
       //document.body.appendChild(container);
       todosLosItems.push(container);
           console.log(item.name);
       });
       document.body.append(...todosLosItems)
   });*/
/*RESUMEN: NOS CONECTAMOS A UNA API QUE ES UN PUENTE CON LA INFORMACION 
 DE UN SERVIDOR Y ESE SERVIDOR NOS DEVUELVE ESA INFORMACION, Y UTILIZAMOS
 UN CICLO POR CADA UNO DE LOS ELEMENTOS QUE NOS DEVUELVE ESE SERVIDOR
 CREAMOS NODOS Y SE LOS AGREGAMOS AL FINAL A NUESTRO HTML*/
//RETO PARA MEJORAR ESTE CODIGO  Y ES HACERLO CON ASYNC Y AWAIT EN VES DE PROMESAS


//******************************** Video 13 ********************************
const URL_BASE = "https://platzi-avo.vercel.app";
const appNode  = document.querySelector('#app');

//Price format to use in HTML
const formatprice = (price) => { //Se crea una function arrow para no modificar nada con return price

    const newprice = new window.Intl.NumberFormat("en-EN",{ //Se crea una nueva variable para agregar el formato con Intl.(Sus atributos).
        style: "currency",
        currency: "USD",
    }).format(price); //Lo pasas en el formato price y s retorna finalmente en el newprice

    return newprice;
};

//Uso de fetch
const getData = async url => {

    try{
        const response     = await fetch(url);
        const data3         = await response.json();
        const allAguacates = data3.data;

        printItems(allAguacates);

    }catch(error){
        console.log(error);
    }
}

const printItems = (items) => {

    const allItems = [];

        items.forEach(item => {
            //Crear imagen
            const img = document.createElement('img');
            img.src = `${URL_BASE}${item.image}`;
            img.className = "img";

            //Crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "title";

            //crear precio
            const price = document.createElement('div');
            price.className = "price";
            price.textContent = formatprice(item.price); //formatprice funcion para estilo moneda
            
            //Crear un container
            const container = document.createElement('div');
            container.append(img, title, price);
            container.className = "palta-container";

            allItems.push(container);
        
        });

        //Agregamos todo al contendor principal
        appNode.append(...allItems);
        
}
//Finalmente inbocamos la API con las URL necesarias
getData(`${URL_BASE}/api/avo`);
