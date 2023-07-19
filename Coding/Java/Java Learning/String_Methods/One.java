package String_Methods;

// Immutable String in Java

// A String is an unavoidable type of variable while writing any application program. 
// String references are used to store various attributes like username, password, etc. 
// In Java, String objects are immutable. Immutable simply means unmodifiable or unchangeable.

// Once String object is created its data or state can't be changed but a new String object is 
// created.
public class One {
    public static void main(String[] args) {
        String str = "Sudeep"; // String object is created using String literal
        String str2 = new String("Sudeep"); // String object is created using new keyword
        char[] str3 = { 'S', 'u', 'd', 'e', 'e', 'p' };
        String str4 = new String(str3);
        System.out.println(str4);
        System.out.println(str4 == str);// false becuase str in string constant pool but str4 in non-pool

        String s = "Swaroop";
        s.concat("Acharya"); // creates a new object
        System.out.println(s);// o/p Swaroop

        s = s.concat(" Acharya");
        System.out.println(s);// o/p Swaroop Acharya
    }
}
