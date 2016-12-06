$('.accordion-tab').click(function(){

  var $this = $(this);

  var vals = ['true', 'false'];
  toggleAttr($($this.next()), 'aria-hidden', vals);
  toggleAttr($($this),'aria-selected', vals);
  toggleAttr($($this),'aria-expanded', vals);

  if($this.next().hasClass('accordion-panel')){
    $this.next().toggle(function(){
      $this.next().show();
    }, function() {
    });
  }

});

function toggleAttr(el, attribute, vals){

  if ($(el).attr(attribute) ===  vals[0]){
      $(el).attr(attribute, vals[1]);
  } else if ($(el).attr(attribute) === vals[1])

  {
    $(el).attr(attribute, vals[0]);
  }

};