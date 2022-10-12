/* **Consegna:**


**MILESTONE 3**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
**Prima di partire a scrivere codice:**
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.
**Consigli del giorno:**
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */


//recupero div caroselloimg dall'html
const caroselloImgHtml = document.querySelector(".carosello-img-container");
console.log(caroselloImgHtml);

//Creo array contente le immagini 
const caroselloImg = ["img/01.jpg" , "img/02.jpg" , "img/03.jpg" , "img/04.jpg" , "img/05.jpg"];
console.log(caroselloImg);

//per ogni elemento creo il suo div
for(let i=0 ; i <caroselloImg.length ; i++){
    const divimg = 
    `<div class="caroselloimg  hidden">
        <img src="${caroselloImg[i]}" alt="">
    </div>`

    //aggiungo all'html i div contenti le img
    caroselloImgHtml.innerHTML += divimg;
}

//rendo visibile solo la prima immagine 
const containImg = document.getElementsByClassName("caroselloimg");
console.log(containImg); 
let indexImg = 0 ; 
containImg[indexImg].classList.remove("hidden");

//al click del bottone avanti cambio posizione dell'indice mostrando l'altra immagine e nascondendo la precendeter 
//recupero elementi html dei due bottoni 
const btnFoll = document.querySelector(".foll");
console.log(btnFoll);

const btnPrev = document.querySelector(".prev");
console.log(btnPrev);


//Istruzioni da eseguire quando clicco foll
btnFoll.addEventListener ("click" , function(){ 
    if(indexImg < (containImg.length -1 )){
        //rendo invisibile la prima immagine 
        containImg[indexImg].classList.add("hidden");
        //incremento l'indice 
        indexImg++;
        //rimuovo la classe hidden al nuovo indice 
        containImg[indexImg].classList.remove("hidden");
    }if (indexImg > (containImg.length -1)){
        containImg[indexImg].classList.add("hidden");
        indexImg = 0 ; 
        containImg[indexImg].classList.remove("hidden");
    }
});

//Istruzioni da eseguire quando clicco prev 
btnPrev.addEventListener("click" ,function(){
    if(indexImg > 0 ){
        //inserisoc  la classe hidden all'item corrente 
        containImg[indexImg].classList.add("hidden");
        //decremento indexiMg
        indexImg--;
        //rimuovo la classe hiden al nuovo indice  
        containImg[indexImg].classList.remove("hidden");
    }
})