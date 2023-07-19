package String_Methods;

public class Five {
    public static void main(String[] args) {
        String str = " SwarooP ";
        System.out.println(str.toUpperCase());
        System.out.println(str.toLowerCase());
        System.out.println(str.length());
        System.out.println(str.trim());
        System.out.println(str.charAt(2));
        System.out.println(str.startsWith(" S"));// true
        System.out.println(str.endsWith("o ")); //false

        //Java intern() method
        //A pool of strings, initially empty, is maintained privately by the class String.

        //When the intern method is invoked, if the pool already contains a String equal to this String object as 
        // determined by the equals(Object) method, then the String from the pool is returned. Otherwise, this String 
        // object is added to the pool and a reference to this String object is returned.
        String s = new String("Sachin");
        String s2 = s.intern();
        System.out.println(s2);// Sachin


        // Java String valueOf() Method
        //The String class valueOf() method coverts given type such as int, long, float, double, boolean, 
        //char and char array into String.

        int a=10;
        String stri1=String.valueOf(a);
        System.out.println(stri1 + 11 + "Swaroop");


        String sentence="Hi iam swaroop";
        String result=sentence.replace("Hi", "Hello");
        System.out.println(result); //Hello iam swaroop


        String str1 = new String("Hello");
        String str2 = "Hello";

        String internedStr1 = str1.intern(); // Adds "Hello" to the pool and returns the reference
        String internedStr2 = str2.intern(); // Returns the reference to the already interned "Hello" string

        System.out.println(str1 == str2); // false, different references
        System.out.println(str2 == internedStr1); // false, different references
        System.out.println(internedStr1 == internedStr2); // true, same reference

    }
}
