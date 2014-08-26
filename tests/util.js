var loadImage = function(image_url, callback) {
    var $image = $("<img />");
    delete window.image_url;

    $image.attr('src', image_url);

    $image.one("load", function() {
        if (! this.complete ||
            typeof this.naturalWidth == "undefined" ||
            this.naturalWidth === 0
        ) {
            callback(new Error("Unable to find proof"));
            return;
        }

        window.image_url = image_url;
        callback();
    });

    $image.one("error", function() {
        callback(new Error("Unable to find proof"));
    });
}

var checkThat = function(name_of_action, callback) {
    var image_location;

    name_of_action = name_of_action.toLowerCase().replace(/\s+/g, "-");
    image_location = "proof/" + name_of_action + ".jpg";

    loadImage(image_location, callback);
}

teardown(function() {
    $(".error").remove();
    $(".replay").remove();

    if (window.image_url) {
        $("pre").last().append("<br \><img src='"+image_url+"' />");
    }
});