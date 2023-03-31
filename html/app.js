QBScoreboard = {}

$(document).ready(function(){
    window.addEventListener('message', function(event) {
        switch(event.data.action) {
            case "open":
                QBScoreboard.Open(event.data);
                break;
            case "close":
                QBScoreboard.Close();
                break;
        }
    })
});

QBScoreboard.Open = function(data) {
    $(".scoreboard-block").fadeIn(150);
    $("#total-players").html("<p>"+data.players+"/"+data.maxPlayers+"</p>");
    $("#time-players").html(data.timehour + "h " + data.timemenu + "m 🕓");
    $("#ogtal3b").html("<p>" + data.ogtal3b + "</p>");

    $.each(data.requiredCops, function(i, category){
        var beam = $(".scoreboard-info").find('[data-type="'+i+'"]');
        var status = $(beam).find(".info-beam-status");


        if (category.busy) {
            $(status).html('<i class="fas fa-clock"></i>');
        } else if (data.currentCops >= category.minimum) {
            $(status).html('<i class="fas fa-eye" style="color: #00ff33;"></i>');
        } else {
            $(status).html('<i class="fas fa-eye-slash" style="color: #ff0000;"></i>');
        }

        $("#bateal-pass").html("<p>"+data.ogtal3b+"</p>");

        // if (data.currentCops > 0) {
        //     var Abeam = $(".scoreboard-info").find('[data-type="police"]');
        //     var Astatus = $(Abeam).find(".info-beam-status");
        //     $(Astatus).html('<i class="fas fa-check"></i>');
        // } else {
        //     var Abeam = $(".scoreboard-info").find('[data-type="police"]');
        //     var Astatus = $(Abeam).find(".info-beam-status");
        //     $(Astatus).html('<i class="fas fa-times"></i>');
        // }

        if (data.currentAmbulance > 0) {
            var Abeam = $(".scoreboard-info").find('[data-type="ambulance"]');
            var Astatus = $(Abeam).find(".info-beam-status");
            $(Astatus).html('<i class="fas fa-eye" style="color: #00ff33;"></i>');
        } else {
            var Abeam = $(".scoreboard-info").find('[data-type="ambulance"]');
            var Astatus = $(Abeam).find(".info-beam-status");
            $(Astatus).html('<i class="fas fa-eye-slash" style="color: #ff0000;"></i>');
			
        }
		   if (data.currentrealestate > 0) {
            var Abeam = $(".scoreboard-info").find('[data-type="realestate"]');
            var Astatus = $(Abeam).find(".info-beam-status");
            $(Astatus).html('<i class="fas fa-eye" style="color: #00ff33;"></i>');
        } else {
            var Abeam = $(".scoreboard-info").find('[data-type="realestate"]');
            var Astatus = $(Abeam).find(".info-beam-status");
            $(Astatus).html('<i class="fas fa-eye-slash" style="color: #ff0000;"></i>');
        }
		
		   if (data.currentcardealer > 0) {
            var Abeam = $(".scoreboard-info").find('[data-type="cardealer"]');
            var Astatus = $(Abeam).find(".info-beam-status");
            $(Astatus).html('<i class="fas fa-eye" style="color: #00ff33;"></i>');
        } else {
            var Abeam = $(".scoreboard-info").find('[data-type="cardealer"]');
            var Astatus = $(Abeam).find(".info-beam-status");
            $(Astatus).html('<i class="fas fa-eye-slash" style="color: #ff0000;"></i>');
        }
    });
}

QBScoreboard.Close = function() {
    $(".scoreboard-block").fadeOut(150);
}