// 1-ое
function reliable (password){
    if (password.length > 3 && (password.includes("-") || password.includes("_"))){
        console.log("Пароль надежный")
    }else{
        console.log("Пароль недостаточно надежный")
    }
}

reliable("qwerty_")
reliable("wsa")

//2-ое
function human (name, surname){

    let newName = (name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase())
    let NewSurname = (surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase())

    let NAME = newName != name ? console.log(`${newName} имя преобразованно`) : console.log(`${name} имя осталось без изменений`)
    let SURNAMR = NewSurname != surname ? console.log(`${NewSurname} фамилия преобразованно`) : console.log(`${surname} фамилия осталось без изменений`)
}

human("Бауди", "Шарапуддинов")
human("бАУдИ", "шАРаПуДдинОв")

// другой способ
function human (name, surname){

    let newName = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    let NewSurname = (surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase())

    let NAME = newName != name ? console.log(`${newName} имя преобразованно`) : console.log(`${name} имя осталось без изменений`)
    let SURNAMR = NewSurname != surname ? console.log(`${NewSurname} фамилия преобразованно`) : console.log(`${surname} фамилия осталось без изменений`)
}

human("Дени", "Шарапуддинов")
human("дЕнИ", "шАРаПуДдинОв")