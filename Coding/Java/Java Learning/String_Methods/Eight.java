package String_Methods;

// How to create Immutable class?

// There are many immutable classes like String, Boolean, Byte, Short, Integer, Long, Float, Double etc. 
// In short, all the wrapper classes and String class is immutable. We can also create immutable class by creating 
// final class that have final data members as the example given below:

//In this example, we have created a final class named Employee. It have one final datamember, a parameterized constructor and getter method.
final class Employee {
    String pancardNumber;

    public Employee(String pancardNumber) {
        this.pancardNumber = pancardNumber;
    }

    public String getPancardNumber() {
        return pancardNumber;
    }

}

public class Eight {
    public static void main(String[] args) {
        Employee e = new Employee("ABCD123EG");
        Employee e1 = new Employee("avaffffa");
        String s1 = e.getPancardNumber();
        String s2 = e1.getPancardNumber();
        System.out.println("Pan card no is: " + s1);
        System.out.println("Pan card no is: " + s2);
    }
}

// The above class is immutable because:
// 1.The instance variable of the class is final i.e. we cannot change the value
// of it after creating an object.
// 2.The class is final so we cannot create the subclass.
// 3.There is no setter methods i.e. we have no option to change the value of
// the instance variable.
// These points makes this class as immutable.
