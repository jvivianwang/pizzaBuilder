$(document).ready(function() {
    $('.message').hide();
    $("button").click(function(){
        var topping = [];
        var total = 0;

        total+=parseFloat($('select[name=size]').val());
        $.each($("input[name='topping']:checked"), function(){
            total += parseFloat($(this).val());
        });
        console.log(total);

        event.preventDefault();
        $('.body').hide();
        $('.message').show();
        $('.submit_message').html("<p>Your total cost is $" + total + ".</p>" );
    });

    $(".back_home").click(function(){
        event.preventDefault();
        $('.message').hide();
        $('.body').show();
        $('.topping').prop('checked', false);
        $(this).closest('form').find("input[type=text], textarea").val("");
    });
});