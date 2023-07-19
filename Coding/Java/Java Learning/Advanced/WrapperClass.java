package Advanced;

//Wrapper classes provide a way to use primitive data types (int, boolean, etc..) as objects.
// Sometimes you must use wrapper classes, for example when working with Collection objects, 
// such as ArrayList, where primitive types cannot be used (the list can only store objects):
public class WrapperClass {
    public static void main(String[] args) {
        Integer myInt = 5;
        Double myDouble = 5.99;
        Character myChar = 'A';
        System.out.println(myInt);
        System.out.println(myDouble.doubleValue());
        System.out.println(myChar);

        // Another useful method is the toString() method, which is used to convert
        // wrapper objects to strings.

        // In the following example, we convert an Integer to a String, and use the
        // length() method of the String class to output the length of the "string":
        Integer myNumber = 1000;
        String numberString = myNumber.toString();
        System.out.println(numberString.length());// o/p 4
    }
}
