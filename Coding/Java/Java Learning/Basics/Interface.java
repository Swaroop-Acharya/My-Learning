// An interface is a completely "abstract class" that is used to group
// related methods with empty bodies:

interface Animal {

    // Interface attributes are static and final
    String size = "Small";
    String communication = "No Communication";
    int age = 100;

    // Interface methods are by default abstract and public
    // All three are valid
    public void sound();

    public abstract void name();

    void sleepSound();
}

class Whale implements Animal {
    public void sound() {
        System.out.println("ZZZzz");
    }

    public void name() {
        System.out.println("Whale");
    }

    public void sleepSound() {
        System.out.println("WRozzz wrozzz");

    }
}

public class Interface {
    public static void main(String[] args) {
        // Directly accessed using the interface name because interface is static
        System.out.println(Animal.size);
        System.out.println(Animal.communication);


        Whale obj = new Whale();
        obj.name();
        obj.sleepSound();
        obj.sound();
        // Animal.communication="Swaroop "; this gives an error because it is final

    }
}

// Notes on Interfaces:
// Like abstract classes, interfaces cannot be used to create objects (in the
// example above, it is not possible to create an "Animal" object in the
// MyMainClass)
// Interface methods do not have a body - the body is provided by the
// "implement" class
// On implementation of an interface, you must override all of its methods

// An interface cannot contain a constructor (as it cannot be used to create
// objects)