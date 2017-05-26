uis.directive('uiSelectFooter', function(uiSelectConfig){
  return {
    templateUrl: function (tElement) {
      // Needed so the uiSelect can detect the transcluded content
      tElement.addClass('ui-select-footer');

      // Gets theme attribute from parent (ui-select)
      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
      return theme + '/footer.tpl.html';
    },
    restrict: 'EA',
    transclude: true,
    replace: true
  };
<<<<<<< HEAD
});
=======
});
>>>>>>> 3f097e0a717e40e6fc931b7655afcc8a3c575f91
