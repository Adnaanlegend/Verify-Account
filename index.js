let otp_boxes=document.querySelectorAll(".otp");
otp_boxes[0].focus();
const otp = "123456"
let bag="";
otp_boxes.forEach((e, i) => {
    e.addEventListener("keydown", (event) => {
        // console.log(event.key);
       
        if(event.key >= 0 && event.key <= 9){
            if(i===otp_boxes.length-1){
                return;
            }
            e.classList.add("valid");
            // if(i===otp_boxes.length-1){
            //     setTimeout(() => {
            //         otp_boxes.forEach((el) =>{
            //             bag+=el.value;
            //         })
            //         // bag+=otp_boxes[i].value
            //         if(otp==bag){
            //             return alert("OTP Verification Successful.")
            //          } else {
            //             return alert("OTP Verification Failed");
            //          }
            //         // console.log(bag); 
            //     }, 100);
            // }
            setTimeout(() => {
                    otp_boxes[i + 1].focus();
            }, 100);
        }
        else if((event.key = "Backspace")){
            otp_boxes[i-1].classList.remove("valid");
            setTimeout(() => {
                otp_boxes[i - 1].value="";
                otp_boxes[i - 1].focus();
            }, 100)
        }
    });
});


