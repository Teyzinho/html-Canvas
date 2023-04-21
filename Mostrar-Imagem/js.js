let canvas=document.getElementById("sprite1");
let ctx=canvas.getContext('2d'); //Contexto da imagem

let imagem= new Image(); //Declara nova imagem
imagem.src="sprites/luffy-base-sprites.png"; //Declara o local da imagem
imagem.onload=()=> { //espera a imagem carregar para depois abri-la
    //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
    ctx.drawImage(imagem,0,0,45,80, 0,0,100,150)
    ctx.drawImage(imagem,44,0,45,80, 0,150,100,150)
    ctx.drawImage(imagem,88,0,45,80, 0,300,100,150)
}