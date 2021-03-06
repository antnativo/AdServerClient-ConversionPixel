; var ntv;
!function (ntv) {
  ntv.events = document.createElement("ntv");
  function dispatchEvent(type, msg) { var event = new CustomEvent(type, { detail: { "message": msg } }); ntv.events.dispatchEvent(event); }
  try {
    var vendorConversionInclusion = document.getElementById("ntvConversionPixel");
    vendorId = vendorConversionInclusion.dataset.vendorId,
      firePixel = function (pixel) {
      if (/^([0-9]{0,2}$|(^[0-9]{0,2}[\%]{0,1})([0-9]{3,4}$))/.test(pixel)){
        var img = new Image();  
        img.src = "http://jadserve.postrelease.com/conversion?ntv_conv_event=" + pixel + "&ord=" + new Date().valueOf() + "&ntv_pixel_id=" + vendorId;
        img.onload = function (e) { dispatchEvent("converted", img.src); }
        img.onerror = function (e) { dispatchEvent("failed", img.src); }
      }else
        dispatchEvent("invalidpixel", pixel + " is an invalid tracking pixel.");  
      },
      overridePixel = function (oldPixel, newPixel) {
        if (typeof newPixel != "undefined" && isNaN(newPixel))
          dispatchEvent("invalidpixel", newPixel + " is an invalid tracking pixel.");
        else
          return (typeof newPixel != "undefined" && !isNaN(newPixel)) ? encodeURIComponent(oldPixel + "#" + newPixel) : oldPixel;
      },
      validCustomEvent = function (newPixel) { return newPixel > 8 && newPixel < 21 };
    if (vendorId)
      ntv.conversion = {
        view_content: function (newPixel) { firePixel(overridePixel(0, newPixel)); }                // fire 0
        , search: function (newPixel) { firePixel(overridePixel(1, newPixel)); }                    // fire 1
        , add_to_cart: function (newPixel) { firePixel(overridePixel(2, newPixel)); }               // fire 2
        , add_to_wish_list: function (newPixel) { firePixel(overridePixel(3, newPixel)); }          // fire 3
        , initiate_checkout: function (newPixel) { firePixel(overridePixel(4, newPixel)); }         // fire 4
        , add_payment_info: function (newPixel) { firePixel(overridePixel(5, newPixel)); }          // fire 5
        , purchase: function (newPixel) { firePixel(overridePixel(6, newPixel)); }                  // fire 6
        , lead: function (newPixel) { firePixel(overridePixel(7, newPixel)); }                      // fire 7
        , complete_registration: function (newPixel) { firePixel(overridePixel(8, newPixel)); }     // fire 8
        , custom_event: function (oldPixel, newPixel) {
          if ((!isNaN(oldPixel) && validCustomEvent(oldPixel + 8) && typeof newPixel == "undefined")
            || (!isNaN(oldPixel) && validCustomEvent(oldPixel + 8)  && typeof newPixel != "undefined" && !isNaN(newPixel) && validCustomEvent(newPixel + 8)))
            firePixel(overridePixel(oldPixel, newPixel)); 
          else dispatchEvent("invalidpixel", newPixel + " is an invalid tracking pixel.");
        } // fires between 9-20
      }
    else{
      dispatchEvent("missingid", "There is a missing vendor id attribute in script tag. Use data-vendor-id=<your vendor id>")
      console.log("There is a missing vendor id attribute in script tag. Use data-vendor-id=<your vendor id>")
    }
  } catch (e) {
    dispatchEvent("error", e.message)
  }
}(ntv || (ntv = {}))