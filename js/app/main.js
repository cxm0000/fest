requirejs(["parse", "jquery"], function (Parse, jquery) {


    jquery(document).ready(function () {
        var userEmailInput = jquery('#userEmail');
        var form = jquery('#subscribeForm');

        Parse.initialize("nJv9HEJkB6j6etfQ6L1k9FBa2nEYChHHTJmvuyO8", "NsTQDX7WhMT4vrZ9bxUrHgsBc8btfE0L9mqGpX6n");

        form.on('submit', function () {
            var userEmail = userEmailInput.val();

            if (userEmail.length === 0) {
                alert("Please provide us a valid email.");
                return false;
            }

            var Subsriber = Parse.Object.extend("Subsciber");
            var tbl = new Subsriber();
            var query = new Parse.Query(Subsriber);
            query.equalTo("email", userEmail);
            query.find({
                success: function (results) {
                    console.log(results);
                    if (results.length === 0) {
                        tbl.save(
                            {email: userEmail},
                            {success: function (tbl) {
                                // The object was saved successfully.
                                alert("Thank your and welcome!");
                            },
                            error: function (tbl, error) {
                                // The save failed.
                                // error is a Parse.Error with an error code and message.
                                alert(error);
                            }
                        });
                    } else {
                        alert("You have already joined, be patient =)");
                    }

                },
                error: function (error) {

                }
            });

            return false;
        });
    });


});
