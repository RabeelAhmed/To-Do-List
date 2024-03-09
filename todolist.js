// const box = document.querySelector('.box')

// const btn = document.querySelector('#btn')

// let count = 1

// let total = 0

// btn.addEventListener('click', ()=>{
//     let get = document.querySelector('#get').value
//     if(get.trim()!==''){
//         box.innerHTML += `<div>${count} : ${get}</div>`
//         count++
//         total++
//         document.querySelector('#get').value = ''
//     }else{
//         alert("Enter Value")
//     }
// })



// const btn2 = document.querySelector('#btn2')

// btn2.addEventListener('click', () =>{
        
//         box.innerHTML = ''
//         count = 1
//         console.log(total)

// })


// second Method

const box = document.querySelector(".box")

const btn1 = document.querySelector("#btn1")

const btn2 = document.querySelector("#btn2")

const btn3 = document.querySelector("#btn3")

const btn4 = document.querySelector("#btn4")


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const p = document.createElement("p");

btn1.addEventListener("click", () => {

    var crntdate = new Date();

    var today = days[crntdate.getDay()];
    var todayday = `${today}`;
    p.textContent = todayday;
    p.style.textAlign = "center"

    if (!p.parentElement) {
        box.appendChild(p);
    }
});

btn4.addEventListener("click", ()=>{
    var destinationDiv = document.querySelector(".savedata");

    while (box.firstChild) {
        destinationDiv.appendChild(box.firstChild);
      }
})

btn1.addEventListener('click', ()=>{
    const put = document.querySelector("#put").value
    const li = document.createElement("li")
      

    if(put.trim()!== ''){
        li.textContent = `${put}`
        document.querySelector('.box').appendChild(li)
        document.querySelector('#put').value = ""
    }else{
        alert("Enter Task")
    }
})

btn2.addEventListener('click', () =>{
    box.lastChild.remove()
})

btn3.addEventListener('click', () =>{
    const total = document.querySelectorAll("li")
    total.forEach(e => {
        e.remove()
    })
})


