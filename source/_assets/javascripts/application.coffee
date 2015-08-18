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
  
  iframe = document.getElementById('results_iframe')
  overlay = iframeOverlay.createOverlay(iframe)
  
  $('.results iframe').on 'click', ->
    overlay.resume()
    return
  
  $('.results iframe').on 'mouseleave', ->
    overlay.pause()
    return
    
  return
