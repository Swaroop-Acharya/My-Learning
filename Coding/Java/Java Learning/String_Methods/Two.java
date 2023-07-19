package String_Methods;
// String comparison - We can compare String in Java on the basis of content and reference.

// methods 
//equals() 
//equalsIgnoreCase()
//==
//compareTo()
public class Two {
    public static void main(String[] args) {
        String s1 = "Swaroop";
        String s2 = new String("Swaroop");
        String s3 = "Swaroop";
        String s4 = "Sud";
        System.out.println(s1.equals(s4)); // false
        System.out.println(s1.equals(s2));// true
        System.out.println(s1.equals(s3)); // true

        String s5 = "SWAROOP";
        System.out.println(s1.equals(s5)); // false
        System.out.println(s1.equalsIgnoreCase(s5)); // true

        System.out.println(s1 == s2); // false
        System.out.println(s1 == s3); // true

        // The String class compareTo() method compares values lexicographically and
        // returns an integer value that describes
        // if first string is less than, equal to or greater than second string.

        // s1 == s2 : The method returns 0.
        // s1 > s2 : The method returns a positive value.
        // s1 < s2 : The method returns a negative value.

        String str1 = "Sachin";
        String str2 = "Sachin";
        String str3 = "Rachin";
        String str4 = "SACHIN";
        System.out.println(str1.compareTo(str3)); // 1
        System.out.println(str3.compareTo(str1)); // -1
        System.out.println(str1.compareTo(str2)); // -1

    }
}
