AdServer Conversion Pixel
=

Load Script
------------
*  <script src="<url to the conversion pixel script>" data-vendor-id=<vendor or advertiser id> ></script>

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
*  *  Used to fire conversion event: 9 - 10
*  *  *  A conversion event number must be assigned as an argument to the custom_event()
*  *  *  to fire the pixel.

Listening to Events
------------
*  You can listen to conversion pixel events on ntv.events
*  *  Example:
*  *  *  ntv.events.addEventListener("missingid",function(e){ console.log("Message: ", e.message) },false)

Documened by
------------
* Anthony Crawford