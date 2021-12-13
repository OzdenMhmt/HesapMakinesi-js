
//Genel degiskenler
var optDurum=false,
opt="",
sonuc=0;




//rakamlari kontrol edelim;
var rakam = document.querySelectorAll(".rakam");
var gosterge=document.querySelector("#gosterge");
var btnOpt =document.querySelectorAll(".btnOpt");
var islem= document.querySelector("#islem");
var btnCE=document.querySelector(".btnCE");
var btnC=document.querySelector(".btnC");
var btnEsit=document.querySelector(".btnEsit");
var btnNokta=document.querySelector(".btnNokta");

rakam.forEach(function(element) {
    element.onclick=function(e) { 
        if ( gosterge.textContent=="0" || optDurum) {
            gosterge.textContent="";
        }
        gosterge.textContent += this.textContent;
        optDurum= false;
    };
});

btnOpt.forEach(function(element){
    element.onclick=function(e){
        optDurum=true;
         var yeniOpt=this.textContent;
         islem.textContent= islem.textContent+ " "+ gosterge.textContent +" "+yeniOpt;

         //sonucu yaziyoruz
        /*  switch (opt) {
             case "+":gosterge.textContent = (sonuc + Number(gosterge.textContent));
                 
                 break;
            case "-":gosterge.textContent = (sonuc - Number(gosterge.textContent));
                 
                 break;
             case "/":gosterge.textContent = (sonuc / Number(gosterge.textContent));
                 
                 break;

            case "*":gosterge.textContent = (sonuc * Number(gosterge.textContent));
                 
                 break;
             default:
                 break;
         } */
         sonuc=Number(gosterge.textContent);
         opt=yeniOpt;
    };
})
//C'den sadece gosterge etkilenecek
btnC.onclick= function(e){
gosterge.textContent= "0";
}
//CE'den islem ve gosterge etkilenecek
btnCE.onclick= function(e){
gosterge.textContent= "0";
islem.textContent="";
sonuc=0;
    }

btnEsit.onclick = function (e)
{
      islem.textContent = "";
      optDurum = true;
    
      switch (opt) {
        case "+":
          gosterge.textContent = sonuc + Number(gosterge.textContent);
          break;
        case "-":
          gosterge.textContent = sonuc - Number(gosterge.textContent);
          break;
        case "*":
          gosterge.textContent = sonuc * Number(gosterge.textContent);
          break;
        case "/":
          gosterge.textContent = sonuc / Number(gosterge.textContent);
          break;
    
        default:
          break;
      }
    
      sonuc = Number(gosterge.textContent);
      gosterge.textContent = sonuc;
      sonuc = 0;
      opt = "";
    
    }

    btnNokta.onclick=function(e){
        if (!optDurum && !gosterge.textContent.includes(".")) {
            gosterge.textContent +=".";

        }else if(optDurum) {
            gosterge.textContent="0";
        }

        if (!gosterge.textContent.includes(".")) {
            gosterge.textContent=".";
            
        }
        optDurum=false;
    }

