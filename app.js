function onLoad() {
    document.addEventListener(
      "deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    Lungo.init({
        name: "Claro App"
    });
    Lungo.dom('#qr-reader').on('load', function(event){
        alert("qr");
        window.plugins.barcodeScanner.scan( function(result) {
            alert("We got a barcode\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled);
        }, function(error) {
            alert("Scanning failed: " + error);
        });
    });
}
