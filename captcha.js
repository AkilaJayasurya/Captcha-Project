const autogeneratedvalue = document.getElementById("autogeneratedvalue")
const usercaptchavalue = document.getElementById("usercaptchavalue")
const message = document.getElementById("message")

let captchatext=""

generateautocaptcha();
function generateautocaptcha(){
    let length=6
    let captcha =[]
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

    for(let i=0;i<length;i=i+1)
    {
        let index =Math.floor(Math.random()*randomchar.length)
        captcha.push(randomchar[index])
    }
    autogeneratedvalue.innerHTML = captcha.join(" ")
    captchatext=captcha.join(" ")
}

function validationcaptcha(event){

    const userValue = usercaptchavalue.value.split("").join(" ")
    console.log("Generated Captcha:", captchatext)
    console.log("User Captcha:", userValue)
     if(userValue===captchatext){
        message.innerText="valid captcha"
        message.setAttribute("class","green")
     }
     else
     {
        message.innerText="In-valid captcha..Try Agani!"
        message.setAttribute("class","red")
     }
        
}