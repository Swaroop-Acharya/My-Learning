package Advanced;

import java.util.ArrayList;
import java.util.Iterator;
//An Iterator is an object that can be used to loop through collections, like ArrayList and HashSet. 
// It is called an "iterator" because "iterating" is the technical term for looping.
// To use an Iterator, you must import it from the java.util package.

//methods
//hasNext()
//next()
//remove()

public class IteraTOR {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(2);
        numbers.add(4);
        numbers.add(6);
        numbers.add(1);
        numbers.add(9);
        numbers.add(10);
        numbers.add(11);

        Iterator<Integer> it=numbers.iterator();  

        // System.out.println(it.next());
        // System.out.println(it.next());
        System.out.println(it.hasNext());

        System.out.println("------------------");
        while (it.hasNext()) {
            // Integer is the wrapper class
            // when u r using the collection normal premitive data types won't work
            Integer i = it.next();
            if (i < 5) {
                it.remove();
            }

        }
        System.out.println(numbers);
    }
}
