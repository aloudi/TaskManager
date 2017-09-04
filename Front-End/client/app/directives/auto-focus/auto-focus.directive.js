const autoFocusDirective = () => {
  return {
    restrict: 'A',
    link: function autoFocusLink(scope, element) {
      element[0].focus();
    },
  };
};

export { autoFocusDirective };

