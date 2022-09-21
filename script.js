var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a0d07a57d3234f90b88ece7ea8399ce4");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
        results = "";
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

        $('#searchResults').html(results);
        $('#searchResults').dialog({
            width: 600,
            height: 600,
});
    })
    .fail(function () {
      alert("error");
    });
}

function searchDialog() {
    $('#searchResults').dialog({
        width: 600,
        height: 600,
        show: {
            effect: "fade",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        }
    });
}

function apiSearching() {

    apiSearch();
}

function backgroundChange() {
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1571878385238-2d89b27962b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hZ25pZnlpbmclMjBnbGFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60")`;
}

function curTime()
    {
    const date = new Date();
    let time = date.toLocaleTimeString();
    $('#time').html(time);
    $("#time").dialog();

}


