function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_o8py17g','template_zqslqc2', tempParams)
    .then(function(res){
       console.log("success", res.status);
    })
}