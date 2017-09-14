var foo =function bar() //thisi is global variable
{
    var foo = "baz";   // in compilation var foo will be declared, in exicution it will be take as a string

    function baz(foo)
    {
        foo = bar;  //this is the string foo = ("bar")
        foo;       // console.log(foo), it will be print output
    }
    baz();    // ofter line no3, baz function will be exicute
};
foo();   //it is called form global variable i.e var foo(line 1)
bar();  //it is not declared in global scope, so when we exicute its come up like error


//global variables: 