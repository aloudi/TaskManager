const autoResizeDirective = ($timeout) => {
  return {
    restrict: 'A',
    link: function autoResizeLink(scope, element) {
      $timeout(() => {
        element.css('height', 'auto');
        element.css('height', `${element[0].scrollHeight}px`);
      }, 0);
      element.on('input', () => {
        element.css('height', 'auto');
        element.css('height', `${element[0].scrollHeight}px`);
      });
    },
  };
};

export { autoResizeDirective };
