let canvas=document.getElementById("sprite1");
let ctx=canvas.getContext('2d'); //Contexto da imagem

let imagem= new Image(); //Declara nova imagem
imagem.src="sprites/luffy-base-sprites-transparente.png"; //Declara o local da imagem
let posSpriteX=0; //Valor da posiçãoX
let larguraImagem=0;
imagem.onload=()=> { //espera a imagem carregar para depois abri-la
    larguraImagem=imagem.width;
    //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
    ctx.drawImage(imagem,posSpriteX,0,45,80, 0,0,100,150)
}

let animaAvanco = 0; //Define se o sprite se a animação esta indo ou voltando

let anima=setInterval(()=>{
    ctx.clearRect(0,0,500,500);
    if(animaAvanco == 0){
        posSpriteX+=43;
        if(posSpriteX>=129){
            animaAvanco = 1;
        }
    }
    if(animaAvanco == 1){
        posSpriteX-=43;
        if(posSpriteX<=0){
            animaAvanco = 0;
        }
    }
    console.log(posSpriteX);
    
    ctx.drawImage(imagem,posSpriteX,0,45,80, 0,0,100,150)
},400)