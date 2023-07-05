


function Actualizar(){
let time=new Date()
let hora=time.getHours()
let minutes=time.getMinutes()
let second=time.getSeconds()
let horaExacta=hora+minutes/60
let gradosdeRotacionHour=(6+horaExacta)*30
let gradosdeRotacionMin=(6+minutes/5)*30
let gradosdeRotacionSecond=(6+second/5)*30

let miVariableHora=`rotate(${gradosdeRotacionHour}deg) translate(0, 0px)`
let miVariableMinuts=`rotate(${gradosdeRotacionMin}deg) translate(0, 0px)`
let miVariableSecond=`rotate(${gradosdeRotacionSecond}deg) translate(0, 0px)`
let AgujaHora=document.getElementById("hora")
let AgujaMin=document.getElementById("minutero")
let AgujaSecond=document.getElementById("second")
AgujaHora.style.setProperty("--mivariableHour",miVariableHora)
AgujaMin.style.setProperty("--mivariableMin",miVariableMinuts)
AgujaSecond.style.setProperty("--mivariableSecond",miVariableSecond)


}
setInterval(Actualizar,1000)