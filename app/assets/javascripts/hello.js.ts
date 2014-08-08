/// <reference path="typings/tsd.d.ts" />

class HelloTypeScript {
    say() :string {
        return "Hello, TypeScript! " + new Date();
    }
}

$(() => {
    var hello = new HelloTypeScript();
    $('#hello').text(hello.say());
});

