function onLoad() {
    document.addEventListener(
      "deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    Parse.initialize("kup71jplyebmqgJNHtEOmSLCad7Gox2PNHPageo8", "15cHc7mGqxhotI3AApuqUqQD9CaM1ZAuRfaHgNCF");

    Lungo.init({
        name: "Claro App"
    });

    Lungo.dom('#qr-reader').on('load', function(event){
        alert("qr");
        window.plugins.barcodeScanner.scan( function(result) {
            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.openExternal(args.text, usePhoneGap);
            }
        }, function(error) {
            alert("Ha ocurrido un error al leer el código: " + error);
        });
    });
}
