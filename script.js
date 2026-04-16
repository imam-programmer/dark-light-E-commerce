let link=document.querySelector('#dark')

let button=document.querySelector('#b');
let res1=document.querySelector('#res1');


button.addEventListener('click',(d)=>{
    d.preventDefault()
    let href=link.getAttribute('href')
   
    if(href==='./style.css'){
        link.setAttribute('href','./dark.css');
    }else{
        link.setAttribute('href','./style.css')
    }
})
let n=document.querySelector('#n')
let inp=document.querySelector('#inp')
n.addEventListener('click',(e)=>{
    e.preventDefault()
    inp.value=""
   
})


