package Advanced;

import java.util.LinkedList;

import java.util.Iterator;

// addFirst()	Adds an item to the beginning of the list.	
// addLast()	Add an item to the end of the list	
// removeFirst()	Remove an item from the beginning of the list.	
// removeLast()	Remove an item from the end of the list	
// getFirst()	Get the item at the beginning of the list	
// getLast()	Get the item at the end of the list

// ArrayList vs. LinkedList

// The LinkedList class is a collection which can contain many objects of the same type, just like the ArrayList.

// The LinkedList class has all of the same methods as the ArrayList class because they both implement the List interface. 
// This means that you can add items, change items, remove items and clear the list in the same way.

// However, while the ArrayList class and the LinkedList class can be used in the same way, they are built very differently.

// How the ArrayList works?
// The ArrayList class has a regular array inside it. When an element is added, it is placed into the array. 
// If the array is not big enough, a new, larger array is created to replace the old one and the old one is removed.

// How the LinkedList works?
// The LinkedList stores its items in "containers." The list has a link to the first container and each container has a 
// link to the next container in the list. To add an element to the list, the element is placed into a new container and 
// that container is linked to one of the other containers in the list.

// When To Use
// Use an ArrayList for storing and accessing data, and LinkedList to manipulate data.
public class Linked_List {
    public static void main(String[] args) {
        LinkedList<String> fruits = new LinkedList<String>();
        fruits.add("A");
        fruits.add("C");
        fruits.add("B");
        
        System.out.println(fruits);
        System.out.println(fruits.getFirst());

        fruits.remove(1);
        System.out.println(fruits);

        
    }
}
