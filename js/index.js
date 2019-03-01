function quad(a,b,c) {
    if(a==0) return"Помилка а=0";
    let D=b*b+4*a*c;
    let x1,x2;
    if(D>0) {
        x1=(-b+Math.sqrt(D))/(2*a);
        x2=(-b-Math.sqrt(D))/(2*a);
        return "x1=" + x1 + ", x2=" + x2 + "\nD=" + D;
    }else if(D==0){
        x1=-b/(2*a);
        return "x=" + x1 + ",\nD=" + D;
    }else if(D<0) 
        return "Корнів немає , D=" +D;
}
function prog(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let result = quad(a,b,c);
    document.getElementById('result').textContent = result;
    document.getElementById('vidpovid').style.display = 'block';
}
