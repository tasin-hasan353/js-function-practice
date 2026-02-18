function validOtp(otp) {
    // Your code here
    if(typeof otp === 'string') {

        if(otp.length === 8 && otp.startsWith("ph-")) {
            return true;
        }else{
            return false;
        }

    }else {
        return "Invalid"
    }

}


// const Otp = validOtp("abc-12345");
// console.log(Otp);





