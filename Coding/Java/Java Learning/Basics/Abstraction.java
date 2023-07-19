// Abstract class: is a restricted class that cannot be used to create objects
// (to access it, it must be inherited from another class).
// The abstract keyword is a non-access modifier, used for classes and methods:
abstract class Car {
    int a=10;

    // An abstract class can have both abstract and regular methods
    public void sound() {
        System.out.println("Vrooom vroom...");
    }

    public abstract void Features();
}

class BMW extends Car {

    // Abstract method: can only be used in an abstract class, and it does not have
    // a body. The body is provided by the subclass (inherited from).
    public void Features() {
        System.out.println("Drive,Sound Sytem, AC, TV");
    }

}

public class Abstraction {
    public static void main(String[] args) {

        BMW obj = new BMW();
        obj.Features();
        System.out.println(obj.a);
        obj.a=11;
        System.out.println(obj.a);

    }
}

// Data abstraction is the process of hiding certain details and showing only
// essential information to the user.
// Abstraction can be achieved with either abstract classes or interfaces.
