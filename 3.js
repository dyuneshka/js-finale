
// 1-ое
function array_randomizer (n, m ,count){

    let arr = [];
    let Max = Math.max(n, m)
    let Min = Math.min(n, m)
    let range = (Max - Min +1) + Min

    while(arr.length < count){
        arr.push(Math.floor(Math.random() * range))    
    }
   
    console.log(arr);
}

array_randomizer(0, 100, 50)
array_randomizer(30, 70, 33)

// 2-ое

let str = "Привет, мир!"
let rts = ""

for(i = str.length - 1; i >=0; i--){
    rts += str[i]
}

console.log(str)
console.log(rts)

//3-e

function roadMines(...rest){
    let damage = false
    for(let i = 0; i < rest.length; i++){
        console.log(`Танк переместился ${i +1}`)
        if(rest[i]){
            if(damage){
                console.log('танк уничтожен');
                break;
            } else {
                damage = true; 
                console.log('танк поврежден');
            }
        }       
    }
}

roadMines(false, false, true, false, false, false, false, true)

// 4-oe

function calendar(day){
    let mounth = []
    let week = ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Субюота", "Воскресенье"]

    let dayIndex = week.indexOf(day)

    for(let i = 1; i < 32; i++ ){
        mounth.push(i)
    }



    for(elem of mounth){
        const Firstday = (dayIndex + elem - 1) % 7
        console.log(`${elem} Января, ${week[Firstday]}`)
    }
}

calendar("Вторник")
calendar("Среда")