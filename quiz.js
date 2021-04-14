$(document).ready(function() {
    console.log("DOM Ready!!")

    function renderQuizQuestion(quizData, pos) {
    //     <section class="question-wrapper">
    //     <h3>Q1. Which was not Voldemorts ...</h3>

    //     <label>
    //         <input type="radio" name="q1" /> Harry
    //     </label>
    //     <label>
    //         <input type="radio" name="q1" /> Nagini
    //     </label>
    //     <label>
    //         <input type="radio" name="q1" /> Helga's Diadem
    //     </label>
    //     <label>
    //         <input type="radio" name="q1" /> Tom's Diary
    //     </label>
    // </section>

        var mainWrapper = $("<section>");
        var question = $("<h3>").html(quizData.question)
        mainWrapper.append(question);

        for(var i=0; i<quizData.options.length; i++){
            var optionWrapper = $("<label>")
            var option = $("<input>").attr({
                type: "radio",
                name: pos + 1
            })
            var optionText = $("<span>").html(quizData.options[i]);

            optionWrapper.append(option, optionText);
            mainWrapper.append(optionWrapper)
        }

        $("#quiz-form").append(mainWrapper);
    }

    // $.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response) {
    //     var quizList = response;
    //     console.log(quizList)

    //     for(var i=0; i<quizList.length; i++ ) {
    //         renderQuizQuestion(quizList[i], i);
    //     }
    // })

    $.ajax({
        type: "GET",
        url: "http://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
        data: video,
        success: function(response) {
            var quizList = response;
            console.log(quizList)

            for(var i=0; i<quizList.length; i++ ) {
                renderQuizQuestion(quizList[i], i);
            }
        },
        error: function(request,status,errorThrown) {
            // There's been an error, do something with it!
            // Only use status and errorThrown.
            // Chances are request will not have anything in it.        
        }
    });

    var video = {
        id: 1,
        title: "How to make Lasgana",
        duration: "300"
    }

    // $.post("URL", video, function() {

    // });

    // $.ajax({
    //     type: "DELETE",
    //     url: "api-endpoint",
    //     data: video,
    //     success: function(response) {
    //         // Do stuff
    //     },
    //     error: function(request,status,errorThrown) {
    //         // There's been an error, do something with it!
    //         // Only use status and errorThrown.
    //         // Chances are request will not have anything in it.        
    //     }
    // });
})