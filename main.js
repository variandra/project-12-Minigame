$(function() {
    $('.option').on('click', function() {
        $('.option').prop('disabled', true);

        const isCorrect = $(this).text() === '9';

        if(isCorrect) {
            $('#feedback').text('Correct! There were 9 rings of power.').css('color', 'green').css('font-weight', '800').css('background-color', 'lightgreen').css('padding', '20px');
        }else{
            $('#feedback').text('Incorrect! There were 9 rings of power.').css('color', 'red').css('font-weight', '800').css('background-color', 'lightred').css('padding', '20px');
        }
    });
    $('.reset').on('click', function (){
        window.location.reload();
    });













});