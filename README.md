AdServer Conversion Pixel
=

Load Script
------------
*  <script id="ntvConversionPixel"  src="<url to the conversion pixel script>" data-vendor-id=<vendor or advertiser id> ></script>

* * Make sure to add id="ntvConversionPixel" to script tag

Default Conversion Event Methods
------------
*  ntv.conversion.view_content()
* *  Used to fire conversion event: 0
*  ntv.conversion.search()
*  *  Used to fire conversion event: 1
*  ntv.conversion.add_to_cart()
*  *  Used to fire conversion event: 2
*  ntv.conversion.add_to_wish_list()
*  *  Used to fire conversion event: 3
*  ntv.conversion.initiate_checkout()
*  *  Used to fire conversion event: 4
*  ntv.conversion.add_payment_info()
*  *  Used to fire conversion event: 5
*  ntv.conversion.purchase()
*  *  Used to fire conversion event: 6
*  ntv.conversion.lead()
*  *  Used to fire conversion event: 7
*  ntv.conversion.complete_registration()
*  *  Used to fire conversion event: 8

Override Default Conversion Event Methods
------------
*  You can override the default conversion event pixel value by assigning a new number as an argument to the method
*  *  Example:
*  *  *  ntv.conversion.lead(7)

Custom Conversion Event Method
------------
*  ntv.conversion.custom_event()
*  *  Used to fire conversion event: 1-12
*  *  *  A conversion event number must be assigned as an argument to the custom_event()
*  *  *  to fire the pixel.
* *  To Override a custom event, provide a second argument.

Listening to Events
------------
*  You can listen to conversion pixel events on ntv.events
*  *  Example:
*  *  *  ntv.events.addEventListener("missingid",function(e){ console.log("Message: ", e.detail.message) },false)

Events
------------
*  missingid - fires when a vendor id is missing in script tag
*  error - fires on any general error
*  converted - fires when a pixel is fired successfully and returns the URL of the pixel
*  failed - fires when a pixel is fired unsuccessfully and returns the URL of the pixel
*  invalidpixel - fired when the event id passed is invalid

Documened by
------------
* Anthony Crawford