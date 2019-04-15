window.onload = function () {
    var first_question = '<h2>お名前を教えてください<h2>';
    var first_output = document.getElementById('question');
    first_output.innerHTML = first_question;
}

var sequence = 0;

function send_message() {
    question = document.getElementById('question').innerHTML;
    message = document.getElementById('message').value;
    document.getElementById('answer').innerHTML += question + '<br>' + message;

    if (sequence == 0) {
        set_next_question('出身地を教えてください');
    }
    if (sequence == 1) {
        set_next_question('趣味を教えてください')
    }
    if (sequence == 2) {
        set_next_question('好きな食べ物を教えてください')
    }
    if (sequence == 3) {
        set_next_question('ご回答ありがとうございました');
        document.getElementById('message').setAttribute('disabled', 'disabled');
        document.getElementById('send').setAttribute('disabled', 'disabled');
    }
    sequence++;
}

function set_next_question(next_question) {
    var add_question = '<h2>' + next_question + '<h2>';
    var add_output = document.getElementById('question');
    add_output.innerHTML = add_question;
    document.getElementById('message').value = '';
}