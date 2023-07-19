// Why And When To Use Interfaces?
// 1) To achieve security - hide certain details and only show the important details of an object (interface).

// 2) Java does not support "multiple inheritance" (a class can only inherit from one superclass). 
// However, it can be achieved with interfaces, because the class can implement multiple interfaces. 
// Note: To implement multiple interfaces, separate them with a comma (see example below).

interface Father {
    public void eyeColor();

}

interface Mother {
    public void hairColor();

}

class Child implements Father, Mother {
    public void eyeColor() {
        System.out.println("Blue eyes");
    }

    public void hairColor() {
        System.out.println("Brown hair");
    }

}

public class MultipleInterface {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.eyeColor();
        obj.hairColor();
    }
}
