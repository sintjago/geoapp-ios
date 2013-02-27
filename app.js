function onLoad() {
    document.addEventListener(
      "deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    Parse.initialize("kup71jplyebmqgJNHtEOmSLCad7Gox2PNHPageo8", "15cHc7mGqxhotI3AApuqUqQD9CaM1ZAuRfaHgNCF");

    Lungo.init({
        name: "Claro App"
    });

    Lungo.dom('#qr-reader').on('load', function(event) {
        window.plugins.barcodeScanner.scan( function(result) {
            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
            }
        }, function(error) {
            alert("Ha ocurrido un error: " + error);
        });
    });
}
