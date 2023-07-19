package Advanced;

import java.util.HashMap;

// methods
//put()
//get()
//remove()
//clear()
//size()
//.keySet()
//.values()
public class Hash_Map {
    public static void main(String[] args) {
        HashMap<String, Integer> numbers = new HashMap<String, Integer>();
        numbers.put("One", 1);
        numbers.put("two", 2);
        numbers.put("three", 3);
        numbers.put("three", 4);

        System.out.println(numbers.get("three"));
        System.out.println(numbers);
        numbers.remove("three");

        System.out.println(numbers);

        for (String i : numbers.keySet()) {
            System.out.println(i);
        }

        for (Integer i : numbers.values()) {
            System.out.println(i);
        }

        for (String i : numbers.keySet()) {
            System.out.println("Key: " + i + " Value: " + numbers.get(i));
            
        }

    }
}
