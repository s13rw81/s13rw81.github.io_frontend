 $(function() {
     $("#contact_form").submit(function (e) {
        e.preventDefault() ;
        $form = $(this) ;
        $.ajax({
            type:"GET",
            url: "https://t55y141e4a.execute-api.ap-south-1.amazonaws.com/testing/contact",
            data: $form.serialize(),
            success: function(data){
                // alert(data) ;
                // var container = $("#form").find("form#contact_form") ;
                var container = $("#contact_form") ;
                container.empty() ;
                container.append("<h2>Hey " + data + "</h2><p>Your information has been submitted successfully.</p><p>Kindly standby for a response.</p>") ;
            },
            dataType : 'json'
        });
    });
});