// $(document).ready(function () {
//   var cmd = "";
//   var resume = {};
//   $(function () {
//     $.getJSON('assets/js/resume.json', function (data) {
//       console.log('success');
//       resume = data;
//     }).error(function (jqXHR, textStatus, errorThrown) {
//       console.log('error');
//     });
//   });
//   // Display terminal
//   $('.navbar-brand').click(function () {
//     $('#terminal-overlay').removeClass('inactive');
//     $('#terminal-overlay').addClass('active');
//     $('body').addClass('noscroll');
//   });

//   // Hide terminal
//   $('#close-terminal').click(function () {
//     $('#terminal-overlay').removeClass('active');
//     $('#terminal-overlay').addClass('inactive');
//     $('body').removeClass('noscroll');
//   });

//   // Detect character press
//   $('#interactive-terminal').keypress(function (event) {
//     var keycode = event.keyCode;

//     if (keycode != 13 && keycode != 0 && keycode != 8 && keycode != 9) {
//       cmd += String.fromCharCode(keycode);
//       var cur = $('.cmd_active #cmd-text').html();
//       if (keycode == 32) {
//         $('.cmd_active #cmd-text').html(cur + '&nbsp;');
//       } else {
//         $('.cmd_active #cmd-text').html(cur + String.fromCharCode(keycode));
//       }
//     }

//   });


//   $('#interactive-terminal').keydown(function (event) {
//     var keycode = event.keyCode;
//     // Detect backspace press
//     if (keycode == 8) {
//       var t = $('.cmd_active #cmd-text').html();
//       if (cmd.charAt(cmd.length - 1) == ' ') {
//         var pos = t.lastIndexOf('&nbsp;');
//         $('.cmd_active #cmd-text').html(t.substring(0, pos));

//       } else {
//         $('.cmd_active #cmd-text').html(t.substring(0, t.length - 1));
//       }
//       cmd = cmd.substring(0, cmd.length - 1);
//     }
//     // stop tabs from working
//     else if (keycode == 0 || keycode == 9) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     // start new prompt by detecting enter
//     else if (keycode == 13) {
//       if (cmd.trim() == '') {
//         newPrompt();
//       } else {
//         processPrompt();
//       }

//     }

//   });

//   function newPrompt() {
//     $('.cmd_active').removeClass('cmd_active');
//     $('#interactive-shell').append(
//       '<div id="cmd" class="cmd_active">' +
//       '<span id="prompt">OSB>&nbsp;</span>' +
//       '<span id="cmd-text"></span> ' +
//       '<span id="cursor">&nbsp;</span>' +
//       '</div>');
//     $("#interactive-shell").animate({
//       scrollTop: $("#interactive-shell")[0].scrollHeight
//     }, 1);
//     cmd = '';
//   }

//   function processPrompt() {
//     var result = '';
//     var success = true;
//     if (cmd.toLowerCase() == "name") {
//       result = resume.name;
//     } else if (cmd.toLowerCase() == "address") {
//       result = resume.address;
//     } else if (cmd.toLowerCase() == "title" || cmd.toLowerCase() == "profession") {
//       result = resume.title;
//     } else if (cmd.toLowerCase() == "links") {
//       result = "<a href='" + resume.website + "'> Personal Website </a>, " +
//         "<a href='" + resume.github + "'> Github </a>";
//     } else if (cmd.toLowerCase() == "education") {
//       result = resume.education;
//     } else {
//       success = false;
//       result = "Command not found or Feature still under construction";
//     }
//     if (success) {
//       $('.cmd_active').append("<div class='result result-success'>" + result + "</div>");
//     } else {
//       $('.cmd_active').append("<div class='result result-error'>" + result + "</div>");
//     }
//     newPrompt();
//   }


// });

