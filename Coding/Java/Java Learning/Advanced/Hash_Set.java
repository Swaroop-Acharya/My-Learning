package Advanced;

import java.util.HashSet;

// A HashSet is a collection of items where every item is unique, and it is found in the java.util package:
//It stores the elements in the unordered manner , so we cannot access individual items
//methods
//add()
//contains()
//size()
//remove()
//clear
public class Hash_Set {
    public static void main(String[] args) {
        HashSet<String> cars = new HashSet<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("BMW");
        cars.add("Mazda");
        System.out.println(cars);
        System.out.println(cars.size());
        System.out.println(cars.contains("BMW"));
        cars.remove("Volvo");
        System.out.println(cars);
        cars.clear();
        System.out.println(cars);
    }
}
