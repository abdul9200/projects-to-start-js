var htmlreponse=0
var htmlscore=0;
var cssreponse=0
var cssscore=0;
var jsreponse=0
var jsscore=0;
function repasser(){
    document.location.reload();
}
function validate(){
    
for(i=1;i<11;i++){
    htmlanswer=document.getElementsByName("q"+i)
    for(j=0;j<htmlanswer.length;j++){
        if(htmlanswer[j].checked){
        htmlreponse +=1;
        htmlscore+=parseFloat(htmlanswer[j].value);
        }

    }
    cssanswer=document.getElementsByName("Q"+i)
    for(j=0;j<cssanswer.length;j++){
        if(cssanswer[j].checked){
        cssreponse +=1;
        cssscore+=parseFloat(cssanswer[j].value);
        }

    }
    jsanswer=document.getElementsByName("qq"+i)
    for(j=0;j<jsanswer.length;j++){
        if(jsanswer[j].checked){
        jsreponse +=1;
        jsscore+=parseFloat(jsanswer[j].value);
        }

    }
    
  

}

if(htmlreponse<7 && cssreponse<7 && jsreponse<7){
    alert("answer at least 7 question per category");
    htmlscore=0;
    jsscore=0;
    cssscore=0;
    htmlreponse=0;
    cssreponse=0;
    jsreponse=0;
}
else{
    score=htmlscore+cssscore+jsscore
    document.getElementById("container").style.display="none";
    document.getElementById("message").innerHTML="<h3>your score is "+score+"<br> HTML score : "+htmlscore+"<br> CSS score : "+cssscore+"<br> JavaScript score : "+jsscore+'</h3>';
    document.getElementById("resultat").style.display="block";
    
    console.log(htmlscore)
    console.log(cssscore)
    console.log(jsscore)
    htmlscore=0;
    jsscore=0;
    cssscore=0;
    htmlreponse=0;
    cssreponse=0;
    jsreponse=0;
}
}
function testpart(e){
    document.getElementById('html').style.display='none';
    document.getElementById('css').style.display='none';
    document.getElementById('js').style.display='none';
    document.getElementById(e).style.display='block';

    
}
function afficherReponse(i){
    document.getElementsByClassName('help')[i].style.display="block";
    if(i<10 && i>=0)
        htmlscore --;
    else if(i<20 && i>=10)
        cssscore --;
    else
        jsscore--; 
}