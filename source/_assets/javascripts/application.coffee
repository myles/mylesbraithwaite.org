#= require jquery
#= require iconic

#= require analytics

$(document).ready ->
  menuToggle = $('#js-mobile-menu').unbind()
  $('#js-navigation-menu').removeClass 'show'
  $("#js-elsewhere-menu").removeClass 'show'
  menuToggle.on 'click', (e) ->
    e.preventDefault()
    $('#js-navigation-menu').slideToggle ->
      if $('#js-navigation-menu').is(':hidden')
        $('#js-navigation-menu').removeAttr 'style'
      if $("#js-elsewhere-menu").is(':hidden')
        $("#js-elsewhere-menu").removeAttr 'style'
      return
    return
  
  $('.demo-link').on 'click', ->
    window.open $(this).attr('href'), $(this).attr('title'), 'width=800,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0'
    return false
  
  return
