const n = 10;
let y=[1];
let x=[1];
let mx,my;
let disx,disy;
let skox,skoy;
let koefvx,koefvy;
function input(x,y,n) {

    for (let i=1;i<=n;i++){
         x[i]=x[i-1]*2;
         y[i]=y[i-1]+10;
    }
    console.log("x: ",x);
    console.log("y: ",y);
}
input(x,y,n);
function help(s1,s2,n,y,x) {
    for ( let i=1;i<=n;i++){
        s1=s1+x[i];
        s2=s2+y[i];
    }
    mx=s1/n;
    my=s2/n;
    console.log("Мат.ожидание х:",mx);
    console.log("Мат.ожиданеи y:",my);
    return {mx,my}
}
//help(0,0,n,y,x);
function dispersia(s1,s2,x,y,n){
   let {mx,my}= help(0,0,n,y,x);
    for( let i=1;i<=n;i++){
        s1=s1+Math.pow((x[i]-mx),2);
        s2=s2+Math.pow((y[i]-my),2);
    }
    disx=s1/(n-1);
    disy=s2/(n-1);
    console.log("Диспесия по х: ",disx);
    console.log("Диспесия по y: ",disy);
    return{disx,disy}
}
//dispersia(0,0,x,y,n);
function sko(){
    let {disx,disy}=dispersia(0,0,x,y,n);
    skox=Math.sqrt(disx);
    skoy=Math.sqrt(disy);
    console.log("средний кв. отклонени по x: ",skox);
    console.log("средний кв. отклонения по y: ",skoy);
    return{skox,skoy}
}
sko();
function koefvar(mx,my) {
    let {skox,skoy}=sko();
    koefvx=(skox/mx)*100;
    koefvy=(skoy/my)*100;
    console.log("коэф.вариации х= ",koefvx," ","%");
    console.log("коэф.вариации y= ",koefvy," ","%");
}
koefvar(mx,my);



