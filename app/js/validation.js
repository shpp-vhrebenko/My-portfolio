var validation = (function () {

    // init module.
    var init = function () {
        _setUpListners();
    };
    
    // Listners events.
    var _setUpListners = function () {
        
    };
    
    var _createQtip = function () {
        // position tooltip
        if(position === 'right') {
            position = {
                my: 'left center',
                at: 'right center'
            }
        } else {
            position = {
                my: 'right center',
                at: 'left center',
                adjust: {
                    method: 'shift none'
                }
            }
        }

        element.qtip({
            content: {
                text: function() {
                    return $(this).attr('qtip-content');
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown hideTooltip'
            },
            position: position,
            style: {
                classes: 'qtip-mystyle qtip-rounded',
                tip: {
                    height: 10,
                    width: 16
                }
            }
        }).trigger('show');
    }

    var validateForm = function(form) {
        var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            valid = true;

        $.each(elements, function (index, value) {
            console.log(index);
            console.log(val);
        })    

    }

    // Return object - publics methods.
    return {
        init: init,
        validateForm: validateForm
    };
})();

validation.init();