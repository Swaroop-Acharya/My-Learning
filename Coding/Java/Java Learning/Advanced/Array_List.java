package Advanced;

import java.util.ArrayList;
// The ArrayList class is a resizable array, which can be found in the java.util package.
//It is the part of collection framework
//ArrayList is a Java class implemented using the List interface
/* 
The difference between a built-in array and an ArrayList in Java, is that the size of an array cannot be modified
 (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and 
removed from an ArrayList whenever you want. */

// methods
//size()
//add()
//get()
//remove()
//set(index,value)
//contains()- returns true is exist else false
//isEmpty()
//clear()- to clear the array List

public class Array_List {
    public static void main(String[] args) {
        ArrayList<String> myCar = new ArrayList<String>();
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(13);
        numbers.add(11);
        numbers.add(10);
        numbers.add(12);

        myCar.add("BMW");
        myCar.add("Toyota");
        myCar.add("Ferari");
        myCar.add("Buggati");
        System.out.println(myCar);

        System.out.println(myCar.get(2));

        myCar.remove(1);
        System.out.println(myCar);

        myCar.set(0, "Benz");
        System.out.println(myCar);

        for (String i : myCar) {
            System.out.println(i);
        }

        System.out.println(myCar.contains("Buggati"));

        System.out.println(myCar.isEmpty());

        System.out.println(myCar.size());

        myCar.sort(null);
        System.out.println(myCar);

        numbers.sort(null);
        System.out.println(numbers);
        
        System.out.println();
        myCar.clear();
        System.out.println(myCar);
    }
}
