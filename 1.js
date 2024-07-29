//1-ое
function squar (x1, x2, y1, y2){
    let a = Math.abs(x1-x2)
    let b = Math.abs(y1-y2)
    console.log(a*b)
}

squar(5, 4, 5, 8)
squar(15, 25, 7, 10)

// 2-ое
function drobi (a, b, n ){
    let adrob = Math.round(a % 1 * Math.pow(10,n));
    let bdrob = Math.round(b % 1 * Math.pow(10,n));

    console.log(adrob);
    console.log(bdrob);

    console.log("adrob > bdrob ", adrob > bdrob);
    console.log("adrob < bdrob ", adrob < bdrob);
    console.log("adrob >= bdrob ", adrob >= bdrob);
    console.log("adrob <= bdrob ", adrob <= bdrob);
    console.log("adrob === bdrob ", adrob === bdrob);
    console.log("adrob != bdrob ", adrob != bdrob);
}

drobi( 13.123456789,  2.123,  5 )
drobi(13.890123, 2.891564, 2)

//3-е
function randomizer (n, m){
    let range = Math.abs(m - n);

    let namberrinrange = Math.floor(Math.random() * range / 2) * 2 + 1;
    console.log(namberrinrange);    
}

randomizer (0,100)
randomizer (-10,100)