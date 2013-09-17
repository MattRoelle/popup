/*
 * Popup
 * Jquery Plugin
 * Matt Roelle
 * 2013
 */

(function ($, window, undefined) {
  $.fn.popup = function(o) {

    var defaults = {
      //default options
      overlayOpacity : 0.6,
      width          : 100,
      height         : 100
    };

    //Initialize variables
    var wrapper        = $(this),
        options        = $.extend(defaults, o || {}),
        previewElement = $(wrapper.children()[0]),
        contentElement = $(wrapper.children()[1]),
        overlayStyles  = {
          'position'      : 'fixed',
          'width'         : '100%',
          'height'        : '100%',
          'top'           : '0',
          'left'          : '0',
          'background'    : '#000',
          'zIndex'        : '50',
          'opacity'       : options['overlayOpacity'],
          'MsFilter'      : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=('+(options['overlayOpacity']*100)+')',
          'filter'        : 'alpha(opacity='+(options['overlayOpacity']*100)+')',
          'MozOpacity'    : options['overlayOpacity'],
          'KhtmlOpacity'  : options['overlayOpacity'],
          'opacity'       : options['overlayOpacity'],
          'display'       : 'none',
        },
        contentStyles = {
          'display'          : 'none',
          'position'         : 'fixed',
          'zIndex'           : '60',
          'top'              : '50%',
          'left'             : '50%',
          'margin-left'      : '-'+options['width']/2+'px',
          'margin-top'       : '-'+options['height']/2+'px',
          'background-color' : '#fff',
          'border'           : '1px solid #eee',
          'border-radius'    : '2px',
          'box-shadow'       : '-2px 2px 1px #888',
          'padding'          : '2px',
          'width'            : options['width']+'px',
          'height'           : options['height']+'px'
        };
    
    var displayContent = function () {
      $('.previewjs-overlay').show();
      $('.previewjs-content').show();
    };

    var clickHandler = function () {
      displayContent();
    };

    var init = function () {
      //Initialize plugin
      contentElement.hide();
      $('body').append('<div class="previewjs-overlay"></div>');
      $('body').append('<div class="previewjs-content"></div>');
      $('.previewjs-overlay').css(overlayStyles);
      $('.previewjs-content').css(contentStyles);
      $('.previewjs-content').append(contentElement.html());
      previewElement.click(clickHandler);
    };

    var main = function () {
      init();
    };

    main();

    return this; //maintain jQuery chainability
  };
} (jQuery, window));
