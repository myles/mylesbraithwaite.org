#= require_tree .

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
  
  $('.results iframe').on 'click', ->
    $(this).plainOverlay('hide')
    return
  
  $('.results iframe').on 'mouseleave', ->
    $(this).plainOverlay('show')
    return
  
  return
