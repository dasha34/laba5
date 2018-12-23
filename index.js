let readlineSync = require('readline-sync');
let tkoefst = readlineSync.question('Введите коефицент стюдента');
console.log('Hi ' + tkoefst + '!');

const n = 10;
let y=[1];
let x=[1];
input(x,y,n);
let {mx,my}= help(0,0,n,y,x);
let {disx,disy}=dispersia(0,0,x,y,n);
let {skox,skoy}=sko();
let koefkore=koefkor(n,x,y,0);
let koefvx,koefvy;
let normox,normoy;
let kst=krst(n);
function input(x,y,n) {

    for (let i=1;i<=n;i++){
         x[i]=x[i-1]*2;
         y[i]=y[i-1]+10;
    }
    console.log("x: ",x);
    console.log("y: ",y);
    return {x,y}
}

function help(s1,s2,n,y,x) {
    for ( let i=1;i<=n;i++){
        s1=s1+x[i];
        s2=s2+y[i];
    }
    let mx=s1/n;
    let my=s2/n;

        console.log("Мат.ожидание х:",mx);

        console.log("Мат.ожиданеи y:",my);

    return {mx,my}
}

//help(0,0,n,y,x);
function dispersia(s1,s2,x,y,n){
   //let {mx,my}= help(0,0,n,y,x);
    for( let i=1;i<=n;i++){
        s1=s1+Math.pow((x[i]-mx),2);
        s2=s2+Math.pow((y[i]-my),2);
    }
   let disx=s1/(n-1);
   let disy=s2/(n-1);
    console.log("Диспесия по х: ",disx);
    console.log("Диспесия по y: ",disy);
    return{disx,disy}
}
//dispersia(0,0,x,y,n);

function sko(){

    let skox=Math.sqrt(disx);
    let skoy=Math.sqrt(disy);
    console.log("средний кв. отклонени по x: ",skox);
    console.log("средний кв. отклонения по y: ",skoy);
    return{skox,skoy}
}
sko();
function koefvar() {
    koefvx=(skox/mx)*100;
    koefvy=(skoy/my)*100;
    console.log("коэф.вариации х= ",koefvx," ","%");
    console.log("коэф.вариации y= ",koefvy," ","%");
}
koefvar();
function normotkl(x,y,n) {
    for(let i=1;i<=n;i++){
        normox=(x[i]-mx)/skox;
        normoy=(y[i]-my)/skoy;
    }
    console.log("Нормальное откл. по х=",normox);
    console.log("Нормальное откл. по y=",normoy);
}
normotkl(x,y,n);

function koefkor(n,x,y,s) {
    //let {mx,my}= help(0,0,n,y,x);
        for(let i=1;i<=n;i++){
            s=s+(x[i]-mx)*(y[i]-my);
            }
  let koefkore=s/((n-1)*skox*skoy);
    console.log("коэффицент корелляции=",koefkore);
    return koefkore;
}
//koefkor(n,x,y,0);
function krst(n) {
    //let koefkore=koefkor(n,x,y,0);
    let kst=(Math.abs(koefkore))*(Math.sqrt(n-1)) /(Math.sqrt(1-koefkore));
    console.log("Критерий стьюдента=",kst);
    return kst;
}
krst(n);
function zav(kst) {

    if (tkoefst<kst){
        console.log("линейная зависимость между x и y существует");
    }
    else {
        console.log("линейная зависимость между x и y отсутствует");
    }
}
zav(kst);



