function texture(){
    modif=document.getElementById("text").value;
    if(modif=='italic' ){
        document.getElementsByClassName("card")[0].style.textDecoration="none";
        document.getElementsByClassName("card")[0].style.fontWeight="normal";
        document.getElementsByClassName("card")[0].style.fontStyle=modif;
    }
    
    if(modif=='bold'){
        document.getElementsByClassName("card")[0].style.fontWeight=modif;
        document.getElementsByClassName("card")[0].style.fontStyle="normal";
        document.getElementsByClassName("card")[0].style.textDecoration="none";

    }
    
    if(modif=='souligné'){
        document.getElementsByClassName("card")[0].style.textDecoration="underline";
        document.getElementsByClassName("card")[0].style.fontStyle="normal";
        document.getElementsByClassName("card")[0].style.fontWeight="normal";
    }
    
    if(modif=='normal')
    {
    document.getElementsByClassName("card")[0].style.textDecoration="none"
    document.getElementsByClassName("card")[0].style.fontStyle=modif;
    document.getElementsByClassName("card")[0].style.fontWeight=modif;}

    
}
function rld(){
    document.location.reload()
}
function fam(){
document.getElementsByClassName("card")[0].style.fontFamily=document.getElementById('fam').value;
document.getElementsByClassName("card")[0].children[0].style.fontFamily=document.getElementById('fam').value;
}
function fam1(){
    document.getElementsByClassName("card")[0].children[0].style.fontFamily=document.getElementById('fam1').value;
}

function couleur(){
    card=document.getElementsByClassName('card')[0];
    card.style.backgroundColor=document.getElementById('cf').value;

    }
    function rojo(){
        cible=document.getElementById("mr").value;
        document.getElementsByClassName("word")[cible].style.color='red';
        
    }
    function char1(){ 
        span=parseInt(document.getElementById('fletter'));
        for(i=0;i<span.length;i++){
            span[i].style.fontWeight=document.getElementById("char1").value;
        }
        
    }
    function image(){
        ima=document.getElementById('img');
        ima.style.border=document.getElementById("bdr").value;
    }