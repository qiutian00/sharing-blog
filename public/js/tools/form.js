$(document).ready(function () {
  
  let bodyText = $('#desc')

  var el = document.querySelector('#editorSection');

  var editor = new tui.Editor({
    el: el,
    previewStyle: 'vertical',
    height: '300px',
    initialEditType: 'markdown',
    initialValue: bodyText ? bodyText.val() : '' || '# content to be rendered',
    events: {
      blur: blur
    }
  });

  function blur(val) {
    let editors = tui.Editor.getInstances();
    var inputVal = editors[0].getValue();
    console.log();
    $('#desc').val(inputVal);
  }



  el.addEventListener('blur', function () {
    console.log(editor.getValue());
  })

 });