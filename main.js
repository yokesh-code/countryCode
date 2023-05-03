let select=document.querySelectorAll(".code")
        let select1=document.querySelectorAll(".curr")
        let btn=document.querySelectorAll(".btn")
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json`)
        .then(response=>response.json())
        .then(data=>{
            var list=Object.entries(data)
            for(var i=0;i<list.length;i++){
            let opt = `<option value="${list[i][0]}">${list[i][0]}</option>`
            let opt1 = `<option value="${list[i][1]}">${list[i][1]}</option>`            
            select[0].innerHTML += opt
            select1[0].innerHTML+=opt1
        }
    })
        // console.log(Object.entries(data))
        // console.log(list[1][0])