function Other () {}

function Base (a) {
    this.a = a;
}

function Child (a,b) {
    //Base.call(this.a);
    this.b = b;
}

Child.prototype = new Base();

var ch = new Child(10,20);

print(ch instanceof Other)
print(ch instanceof Child)
print(ch instanceof Base);

if (ch instanceof Base)
    print("YES");
