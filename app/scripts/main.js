/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  // var querySelector = document.querySelector.bind(document);

  // var navdrawerContainer = querySelector('.navdrawer-container');
  // var body = document.body;
  // var appbarElement = querySelector('.app-bar');
  // var menuBtn = querySelector('.menu');
  // var main = querySelector('main');

  // function closeMenu() {
  //   body.classList.remove('open');
  //   appbarElement.classList.remove('open');
  //   navdrawerContainer.classList.remove('open');
  // }

  // function toggleMenu() {
  //   body.classList.toggle('open');
  //   appbarElement.classList.toggle('open');
  //   navdrawerContainer.classList.toggle('open');
  // }

  // main.addEventListener('click', closeMenu);
  // menuBtn.addEventListener('click', toggleMenu);
  // navdrawerContainer.addEventListener('click', function (event) {
  //   if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
  //     closeMenu();
  //   }
  // });
})();
$(document).ready(function() {
    $(".controls .all a").click(function() {
        $("#mixedContent").fadeOut(500, function() {
            $(".mix a").removeClass("hiddenSlide").animate({
                width: "100%",
                borderWidth: "2px",
                opacity: 1
            }, 10, function() {
                $(this).css("width", "-=4px"), $("#mixedContent").smoothDivScroll("recalculateScrollableArea")
            })
        }), $("#mixedContent").fadeIn(500)
    }), $(".controls .category_1 a").click(function() {
        $("#mixedContent").fadeOut(500, function() {
            $(".mix:not(.category_1) a").addClass("hiddenSlide").css({
                width: "0",
                borderWidth: 0,
                opacity: 0
            }), $(".mix.category_1 a").removeClass("hiddenSlide").animate({
                width: "100%",
                borderWidth: "2px",
                opacity: 1
            }, 10, function() {
                $(this).css("width", "-=4px"), $("#mixedContent").smoothDivScroll("recalculateScrollableArea")
            })
        }), $("#mixedContent").fadeIn(500)
    }), $(".controls .category_2 a").click(function() {
        $("#mixedContent").fadeOut(500, function() {
            $(".mix:not(.category_2) a").addClass("hiddenSlide").css({
                width: "0",
                borderWidth: 0,
                opacity: 0
            }), $(".mix.category_2 a").removeClass("hiddenSlide").animate({
                width: "100%",
                borderWidth: "2px",
                opacity: 1
            }, 10, function() {
                $(this).css("width", "-=4px"), $("#mixedContent").smoothDivScroll("recalculateScrollableArea")
            })
        }), $("#mixedContent").fadeIn(500)
    }), $(".controls .category_3 a").click(function() {
        $("#mixedContent").fadeOut(500, function() {
            $(".mix:not(.category_3) a").addClass("hiddenSlide").css({
                width: 0,
                borderWidth: 0,
                opacity: 0
            }), $(".mix.category_3 a").removeClass("hiddenSlide").animate({
                width: "100%",
                borderWidth: "2px",
                opacity: 1
            }, 10, function() {
                $(this).css("width", "-=4px"), $("#mixedContent").smoothDivScroll("recalculateScrollableArea")
            })
        }), $("#mixedContent").fadeIn(500)
    }), $(".logo");
    var b = $(".me"),
        c = $("ul.text-circle"),
        d = $(".text-circle li");
    $(".me > img");
    var f = $(".text-circle li:first-child"),
        g = $(".text-circle li:nth-child(2)"),
        h = $(".text-circle li:last-child"),
        i = $(".me > img").eq(0),
        j = $(".me > img").eq(1),
        k = $(".me > img").eq(2),
        l = $(".me > div").eq(2),
        m = $(".me > div").eq(1),
        n = $(".me > div").eq(0);
    d.click(function() {
        d.removeClass("activeCircle"), $(this).addClass("activeCircle")
    }), n.hover(function() {
        c.toggleClass("fullRotateThird")
    }), l.hover(function() {
        c.toggleClass("fullRotateFirst")
    }), m.hover(function() {
        c.toggleClass("fullRotateSecond")
    }), f.click(function() {
        c.removeClass("textRotateSecond textRotateThird"), c.addClass("textRotateFirst"), l.appendTo(b), i.animate({
            top: 0
        }, 300), j.animate({
            top: "160px"
        }, 200), k.animate({
            top: "160px"
        }, 200)
    }), g.click(function() {
        c.removeClass("textRotateFirst textRotateThird"), c.addClass("textRotateSecond"), m.appendTo(b), j.animate({
            top: 0
        }, 300), i.animate({
            top: "160px"
        }, 200), k.animate({
            top: "160px"
        }, 200)
    }), h.click(function() {
        c.removeClass("textRotateFirst textRotateSecond"), c.addClass("textRotateThird"), n.appendTo(b), k.animate({
            top: 0
        }, 300), j.animate({
            top: "160px"
        }, 200), i.animate({
            top: "160px"
        }, 200)
    }), $(".et-slider img").each(function() {
        if ($(this).attr("data-size")) {
            var a = $(this).attr("data-size");
            imgWidth = a.split("x")[0], imgHeight = a.split("x")[1], $(this).css("width", imgWidth), $(this).css("height", imgHeight)
        }
    })
}),
function(a) {
    function b(b, c, d, e) {
        var f = b.text().split(c),
            g = "";
        f.length && (a(f).each(function(a, b) {
            g += '<span class="' + d + (a + 1) + '">' + b + "</span>" + e
        }), b.empty().append(g))
    }
    var c = {
        init: function() {
            return this.each(function() {
                b(a(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                b(a(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var c = "eefec303079ad17405c889e092e105b0";
                b(a(this).children("br").replaceWith(c).end(), c, "line", "")
            })
        }
    };
    a.fn.lettering = function(b) {
        return b && c[b] ? c[b].apply(this, [].slice.call(arguments, 1)) : "letters" !== b && b ? (a.error("Method " + b + " does not exist on jQuery.lettering"), this) : c.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery);
$(function() {
      $(".et-slider").css("marginLeft","1500px");$(".et-slider").animate({marginLeft:"0"},1e3,"linear",function(){$("#mixedContent").smoothDivScroll("recalculateScrollableArea")});
      
      $('.slide').each(function(index, el) {
        var attr = $(this).attr('href');
        var pagin = $('<li><span><i class="uk-icon-circle"></i></span></li>');
        if (attr === '#web') {
          var webimg = $(this).find('img').clone().attr('data-size', '').attr('style', '');
          var webli = webimg.wrap('<li></li>').parent();
          webli.appendTo('#galerijaweb');
          pagin.appendTo('#web .uk-pagination');
        };
        if (attr === '#kurs') {
          var kursimg = $(this).find('img').clone().attr('data-size', '').attr('style', '');
          var kursli = kursimg.wrap('<li></li>').parent();
          kursli.appendTo('#galerijakurs');
          
          pagin.appendTo('#kurs .uk-pagination');
        };
        if (attr === '#aktivizam') {
          var aktivizamimg = $(this).find('img').clone().attr('data-size', '').attr('style', '');
          var aktivizamli = aktivizamimg.wrap('<li></li>').parent();
          aktivizamli.appendTo('#galerijaaktivizam');
          pagin.appendTo('#aktivizam .uk-pagination');
        };
        if (typeof attr !== 'undefined' && attr !== false) {
            var imagePath = $(this).find('img').attr('src');
            var imageName = imagePath.replace( /^.*?([^\/]+)\..+?$/, '$1' );
            
            $(this).on('click', function(event) {
              event.preventDefault();
              $('.ga').each(function(index3, el3) {
                $(this).find('.galerija li').each(function(index2, el2) {
                var image2Path = $(this).find('img').attr('src');
                var image2Name = image2Path.replace( /^.*?([^\/]+)\..+?$/, '$1' );
                if (imageName === image2Name) {
                  $('.galerija li').removeClass('uk-active');
                  $(this).addClass('uk-active');
                  $('.uk-pagination li').removeClass('uk-active');
                  $(this).parent().next('.uk-pagination').find('li:nth-child('+(index2+1)+')').addClass('uk-active');
                  console.log(index2);
                };
              });
              });
                
            });
        };
      });
    });
