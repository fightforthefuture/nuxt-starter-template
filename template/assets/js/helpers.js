// Global Helpers
//
// Usage in a Vue component:
// import { createMetaTags, myOtherHelperFunction } from '~/assets/js/helpers'


// Add meta tags per page for Twitter and Facebook share cards
export function createMetaTags(tags={}) {
  const meta = {}

  tags = Object.assign({
    'author': 'Fight for the Future',
    'og:description': tags.description,
    'og:image': tags.image,
    'og:site_name': 'TODO: site name',
    'og:title': tags.title,
    'og:type': 'website',
    'og:url': tags.url,
    'twitter:card': 'summary_large_image',
    'twitter:description': tags.description,
    'twitter:image': tags.image,
    'twitter:site': '@FightForTheFtr',
    'twitter:title': tags.title,
    'twitter:url': tags.url
  }, tags)

  const fakeTagNames = ['title', 'image', 'url']

  for (let key of Object.keys(tags)) {
    if (key.match(/^og\:/)) {
      meta[key] = {
        hid: key,
        property: key,
        content: tags[key]
      }
    }
    else if (!fakeTagNames.includes(key)) {
      meta[key] = {
        hid: key,
        name: key,
        content: tags[key]
      }
    }
  }

  return Object.values(meta)
}

// Open a pop-up window (mostly for sharing actions)
export function openPopup(url, title='popup', w=600, h=500) {
  // Fixes dual-screen position
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = ((height / 2) - (h / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
export function smoothScrollTo(endX, endY, duration) {
  var startX = window.scrollX || window.pageXOffset,
    startY = window.scrollY || window.pageYOffset,
    distanceX = endX - startX,
    distanceY = endY - startY,
    startTime = new Date().getTime()

  duration = typeof duration !== 'undefined' ? duration : 400

  // Easing function
  var easeInOutQuart = function(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from
  }

  var timer = window.setInterval(function() {
    var time = new Date().getTime() - startTime,
      newX = easeInOutQuart(time, startX, distanceX, duration),
      newY = easeInOutQuart(time, startY, distanceY, duration)
    if (time >= duration) {
      window.clearInterval(timer)
    }
    window.scrollTo(newX, newY)
  }, 1000 / 60) // 60 fps
}

// Smooth scroll animation to an element by ID
export function smoothScrollToElement(el, duration) {
  duration = typeof duration !== 'undefined' ? duration : 500;
  el = typeof el === 'string' ? document.querySelector(el) : el;

  if (el) {
    smoothScrollTo(el.offsetLeft, el.offsetTop, duration)
  }
}

// Smooth step scroll within an element
export function smoothScrollWithinElement(el, endY, duration) {
  var el = el,
      startY = el.scrollTop,
      change = endY - startY,
      currentTime = 0,
      increment = 20,
      duration = typeof duration !== 'undefined' ? duration : 400,

  easeInOutQuad = function (time, start, change, duration) {
    time /= duration/2;
    if (time < 1) return change/2*time*time + start
    time--
    return -change/2 * (time*(time-2) - 1) + start
  },

  smoothStepScroll = function() {
    currentTime += increment
    var val = easeInOutQuad(currentTime, startY, change, duration)
    el.scrollTop = val
    if(currentTime < duration) {
      setTimeout(smoothStepScroll, increment)
    }
  }
  smoothStepScroll()
}
