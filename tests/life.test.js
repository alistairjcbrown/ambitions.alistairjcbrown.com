
suite("Milestones in Life", function() {

    suite("Life", function() {

        test("should fall in love", function(done) {
            checkThat("I have fallen in love", done);
        });

        test("should move in together", function(done) {
            checkThat("I have moved in with my girlfriend", done);
        });

        test("should get a dog", function(done) {
            checkThat("I have a dog", done);
        });

        test("should buy a house", function(done) {
            checkThat("I have a house", done);
        });

        test("should be a best man", function(done) {
            checkThat("I have been a best man", done);
        });

        test("should propose", function(done) {
            checkThat("I have proposed", done);
        });

        test("should get married", function(done) {
            checkThat("I am married", done);
        });

    });

    suite("Qualifications", function() {

        test("should have completed the Duke of Edinburgh award scheme", function(done) {
            checkThat("I have completed the Duke of Edinburgh award scheme", done);
        });

        test("should have a Masters degree", function(done) {
            checkThat("I have a Masters degree", done);
        });

        test("should become chartered", function(done) {
            checkThat("I have become chartered", done);
        });

    });

    suite("Career", function() {

        test("should work as a developer", function(done) {
            checkThat("I have worked as a developer", done);
        });

        test("should work as a senior developer", function(done) {
            checkThat("I have worked as a senior developer", done);
        });

    });

    suite("Travelling", function() {

        test("should go to Cuba", function(done) {
            checkThat("I have been to Cuba", done);
        });

        test("should go to Japan", function(done) {
            checkThat("I have been to Japan", done);
        });

    });

    suite("Miscellaneous", function() {

        test("should get a Japanese toilet", function(done) {
            checkThat("I have a japanese toilet", done);
        });

        test("should be able to communicate in basic Japanese", function(done) {
            checkThat("I can communicate in basic Japanese", done);
        });

    });

});
