var myModule = (function () {
    // Initialize module
    var init = function () {
        _setUpListners();
    };
    // Listners events
    var _setUpListners = function () {
        $('#add-new-item').on('click', _showModal);
        $('#add-new-project').on('submit', _addNewProject);
    };
    // Work with modal window
    var _showModal = function (event) {
        event.preventDefault();
        console.log("Show console window");
        var divPopup = $('#new-progect-popup'),
            form = divPopup.find('.form-new-project');
        divPopup.bPopup({
            speed: 650,
            transition: 'slideDown',
            onClose: function() {
                form.find('.server-mes').text('').hide();
            }
        });
    };
    // Add new project
    var _addNewProject = function (event) {
        event.preventDefault();
        console.log("Submit form add new project");

        var form = $(this);
        var url = 'add_project.php';
        serverAnswer = _ajaxForm(form, url);

        serverAnswer.done(function(ans) {
            console.log(ans);
            if(ans.status === 'success') {
                form.find('.server-mes').text('').hide();
                form.find('.success-mes').text(ans.text).show();
            } else {
                form.find('.server-mes').text('').hide();
                form.find('.error-mes').text(ans.text).show();
            }
        });
        
    };
    // Function AJAX request
    var _ajaxForm = function (form, url) {
        //if(valid) return false;
        data =  form.serialize();

        var result =  $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        }).fail(function(ans) {
            console.log("Problem with PHP");
            form.find('.error-mes').text('На сервере произошла ошибка').show();
        });

        return result;
    };




    return {
        init: init
    };
})();

myModule.init();