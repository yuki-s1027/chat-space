$(function(){

  function buildHTML(message){
    if (message.image) {
      var html =  
        `<div class="message__info">
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
    } else {
      var html = 
        `<div class="message__info">
          <div class="name">
            ${message.user_name}</div>
          <div class="day">
            ${message.created_at}</div>
        </div>
        <div class="message__text">
          <p class="lower-message__text">
            ${message.text}
          </p>
        </div>`
      return html;
    }
    return html
  }

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
      $('.ChatMain__messages__list').append(html);      
      $('form')[0].reset();
      $('.ChatMain__messages').animate({ scrollTop: $('.ChatMain__messages')[0].scrollHeight});
      $(".form__submit").prop("disabled", false);
    })
    .fail(function(){
      alert("エラー")
    })
  })
});