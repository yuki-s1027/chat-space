$(function(){

  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.ChatMain__messages').animate({ scrollTop: $('.ChatMain__messages')[0].scrollHeight});
        $("#new_message")[0].reset();
        $(".form__submit").prop("disabled", false);
      }
    })
    .fail(function() {
      console.log('error');
    });
  };

  function buildHTML(message){
    if (message.image && message.text) {
      var html =  `<div class="message" data-message-id = ${message.id} >
         <div class="message__info">
            <div class="name">
              ${message.user_name}</div>
            <div class="day">
              ${message.created_at}</div>
        </div>
        <div class="message__text">
          <p class="lower-message__text">
            ${message.text}
          </p>
          <img src=${message.image} , class='lower-message__image'>
        </div>`
      return html;
    } else if(message.text){
      var html = `<div class="message" data-message-id = ${message.id}  >
          <div class="message__info">
          <div class="name">
            ${message.user_name}</div>
          <div class="day">
            ${message.created_at}</div>
        </div>
        <div class="message__text">
          <p class="lower-message__text">
            ${message.text}
          </p>
        </div>
        </div>`
      return html;
    } else if (message.image){
      var html =  `<div class="message" data-message-id = ${message.id} >
         <div class="message__info">
            <div class="name">
              ${message.user_name}</div>
            <div class="day">
              ${message.created_at}</div>
        </div>
        <div class="message__text">
          <p class="lower-message__text">
          </p>
          <img src=${message.image} , class='lower-message__image'>
        </div>`
      return html;
    };
    return html;
  };

  $("#new_message").on("submit",function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url, 
      type: 'POST', 
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);      
      $('form')[0].reset();
      $('.ChatMain__messages').animate({ scrollTop: $('.ChatMain__messages')[0].scrollHeight});
      $(".form__submit").prop("disabled", false);
    })
    .fail(function(){
      alert("エラー")
    })
  })
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});