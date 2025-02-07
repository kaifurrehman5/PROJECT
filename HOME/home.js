     var st = document.getElementsByTagName("section")[1]
     st.style.display="none"

     var st = document.getElementsByTagName("section")[2]
     st.style.display="none"

     var st = document.getElementsByTagName("section")[3]
     st.style.display="none"

     var st = document.getElementsByTagName("section")[4]
     st.style.display="none"

     var st = document.getElementsByTagName("section")[5]
     st.style.display="none"

     var st = document.getElementsByTagName("section")[6]
     st.style.display="none"



     document.getElementById("graphic").addEventListener('click',function(){

        var st = document.getElementsByTagName("section")[1]
        st.style.display="block"
   
        var st = document.getElementsByTagName("section")[2]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[3]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[4]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[5]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[6]
        st.style.display="none"
     })

     document.getElementById("video").addEventListener('click',function(){

        var st = document.getElementsByTagName("section")[1]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[2]
        st.style.display="block"
   
        var st = document.getElementsByTagName("section")[3]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[4]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[5]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[6]
        st.style.display="none"

        
     })

     document.getElementById("writter").addEventListener('click',function(){

        var st = document.getElementsByTagName("section")[1]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[2]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[3]
        st.style.display="block"
   
        var st = document.getElementsByTagName("section")[4]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[5]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[6]
        st.style.display="none"
     })

     document.getElementById("data").addEventListener('click',function(){

        var st = document.getElementsByTagName("section")[1]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[2]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[3]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[4]
        st.style.display="block"
   
        var st = document.getElementsByTagName("section")[5]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[6]
        st.style.display="none"
     })

     document.getElementById("website").addEventListener('click',function(){

        var st = document.getElementsByTagName("section")[1]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[2]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[3]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[4]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[5]
        st.style.display="block"
   
        var st = document.getElementsByTagName("section")[6]
        st.style.display="none"
     })

     document.getElementById("software").addEventListener('click',function(){

        var st = document.getElementsByTagName("section")[1]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[2]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[3]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[4]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[5]
        st.style.display="none"
   
        var st = document.getElementsByTagName("section")[6]
        st.style.display="block"
     })



     let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})