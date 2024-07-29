let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]


    function filetetObj (objects, key, value){
        let NewObj = [];

        for(let i = 0; i < objects.length; i++){
            let obj = objects[i]
            if(obj[key] === value){
                NewObj.push(obj)
            }
        }
        
        console.log(NewObj)
        return NewObj
    }

    filetetObj (objects, 'name', 'Иван')


    let arr = [
        {
           value: "Russia",
           label: 'Russia',
        },
        {
            value:"Germany",
            label:"Germany",
        },
        {
            value:"France",
            label:"France",
        }
    ]

    function list (arr, defaultValue){
        const select = document.createElement('select');
        
        for(let i = 0; i < arr.length; i++){
            const opt = document.createElement('option')

            opt.value = arr[i].value;
            opt.innerHTML = arr[i].label;
            if(arr[i].value === defaultValue)[
                opt.selected = true
            ]
            select.append(opt)
        }
        
        if(!select.value){
            select.value = arr[0].value;
        }

        return select

    }
    
    const lists = list (arr, 'France')
    document.body.append(lists)

    