module.exports = {
  my_uniq: function(sm_array){
    var rtrn_array = [];
    sm_array.forEach(sm_func);

    function sm_func(element){
      if((rtrn_array.indexOf(element)) === -1){
        rtrn_array.push(element);
      };
    };

    return rtrn_array;
  },

  twoSum: function(arr){
    var len = arr.length;
    for(var i=0; i <= len; i++){
      for(var j=0; j <= len; j++){
        if(j <= i){ continue; }
        if((arr[i] + arr[j]) === 0){
          return true;
        };
      };
    };

    return false;
  },

  my_transpose: function(array){
    len = array[0].length;
    var columns = [];
    for(var i=0; i<len; i++){
      var sub_array = [];
      array.forEach(function(element){sub_array.push(element[i])});
      columns.push(sub_array);
    };

    return columns;
  },

  multiples: function(array){
    return array.map(function(el){
      return el * 2;
    });
  },

  my_each: function(array, func){
    array.forEach(func);
    return array;
  },

  my_inject: function(array, func){
    var memo = "";
    array.forEach(function(el){ memo += func(el); });

    return memo;
  },

  bubble_sort: function(array){
    var len = array.length;
    var unsorted = true;
    while(unsorted === true){
      unsorted = false;
      for(var i = 0; i<(len-1); i++){
        if(array[i]>array[i+1]){
          temp = array[i+1];
          array[i+1] = array[i];
          array[i] = temp;
          unsorted = true;
        }
      }
    }
    return array;
  },

  substring: function(string){
    var substrings = [];
    len = string.length;
    for(var i = 0; i <= len; i++){
      for(var j = 0; j <= len; j++){
        if(j <= i){
          continue;
        };
        substrings.push(string.slice(i,j));
      };
    };
    return substrings;
  },

  arrSumIterate: function(array){
    sum = 0;
    len = array.length;
    array.forEach(function(el){sum+=el});

    return sum;
  },

  arrSumRecurse: function(array){
    if(array.length === 1){
      return array[0];
    };
    array.push(array.shift()+array.pop());
    return this.arrSumRecurse(array)
  }

};