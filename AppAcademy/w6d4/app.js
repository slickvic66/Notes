var makeTagController = function (element) {
  var tagController = {
    addTag: function (data) {
      element.append(
        $('<div></div>')
          .addClass('facebox')
          .css('left', data.x)
          .css('top', data.y)
          .append(
            $('<div></div>')
              .addClass('name')
              .text(data.name)
          )
      );
    },

    showFaceBox: function (data){
      element.append(
        $('<div></div>')
          .addClass('facebox temp')
          .css('left', data.x)
          .css('top', data.y)
      );
    },

    deleteTemp: function () {
      $('.temp').detach();
    },

    showTextBox: function (x, y) {
      element.append(
        $('.temp')
          .css('left', x)
          .css('top', y)
          .append(
            $('<input type="text"></input>')
          )
      );

      $('input').focus();
    },

    tagHandler: function (e) {
        if (e.which == 13) {
          this.data.name = $('input').val();
          this.deleteTemp();
          if (this.data.name.replace(/^\s+$/, '') !== '') {
            this.addTag(this.data);
          }
        }
      },

    clickHandler: function (e) {
      this.data = {
        x: parseInt(e.pageX, 0) - 50 + "px",
        y: parseInt(e.pageY, 0) - 50 + "px",
        name: null
      };

      this.showFaceBox(this.data);
      this.showTextBox(this.data.x, this.data.y);
      $('input').keypress(this.tagHandler.bind(this));
    },

    listen: function () {
      element.click(this.clickHandler.bind(this));
    }
  };

  tagController.listen();

  return tagController;
};

var makeButtonController = function (element) {
  var buttonController = {
    hidden: false,
    showTags: function () {
      $('.tag').css('display', 'block');
      $('button').text('Hide Tags');
    },

    hideTags: function () {
      $('.tag').css('display', 'none');
      $('button').text('Show Tags');
    },

    clickHandler: function (e) {
      if (this.hidden) {
        this.showTags();
        this.hidden = false;
      } else {
        this.hideTags();
        this.hidden = true;
      }
    },

    listen: function () {
      element.click(this.clickHandler.bind(this));
    }
  };

  buttonController.listen();

  return buttonController;
};

var data = {
  tag1: {
    x: '100px',
    y: '300px',
    name: 'John'
  }
};

var displayTags = function (data) {
  for (var tag in data) {
    tagController.addTag(data[tag]);
  }
};



$(function () {
  tagController = makeTagController($('.canvas'));
  displayTags(data);
  makeButtonController($('button'));
});