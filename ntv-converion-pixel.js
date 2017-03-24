; var ntv;
!function (ntv) { 
  var vendorConversionInclusion = document.getElementById("ntvConversionPixel");
    vendorId = vendorConversionInclusion.dataset.vendorid,
    img = new Image(),
    firePixel = function (pixel) { img.src = "http://jadserve.postrelease.com/conversion?ntv_conv_event=" + pixel + "&ntv_pixel_id=" + vendorId; },
    overridePixel = function (oldPixel, newPixel) { return (typeof newPixel != "undefined" && !isNaN(newPixel)) ? encodeURIComponent(oldPixel + "#" + newPixel) : oldPixel; },
    validCustomEvent = function (newPixel) { return newPixel > 8 && newPixel < 21 };
  if (vendorId && !isNaN(vendorId) && !ntv.conversionPixel)
    ntv.conversion = {
      view_content: function (newPixel) { firePixel(overridePixel(0,newPixel)); }               // fire 0
      , search: function (newPixel) { firePixel(overridePixel(1,newPixel));}                    // fire 1
      , add_to_cart: function (newPixel) { firePixel(overridePixel(2,newPixel));}               // fire 2
      , add_to_wish_list: function (newPixel) { firePixel(overridePixel(3,newPixel));}          // fire 3
      , initiate_checkout: function (newPixel) { firePixel(overridePixel(4,newPixel));}         // fire 4
      , add_payment_info: function (newPixel) { firePixel(overridePixel(5,newPixel));}          // fire 5
      , purchase: function (newPixel) { firePixel(overridePixel(6,newPixel));}                  // fire 6
      , lead: function (newPixel) { firePixel(overridePixel(7,newPixel));}                      // fire 7
      , complete_registration: function (newPixel) { firePixel(overridePixel(8,newPixel));}     // fire 8
      , custom_event: function (newPixel) { if(validCustomEvent(newPixel)) firePixel(newPixel);} // fires between 9-20
    }
}(ntv || (ntv={}))