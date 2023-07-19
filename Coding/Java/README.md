# Java
# Java Strings
- reference https://www.javatpoint.com/java-string

## Immutable String in Java

- A String is an unavoidable type of variable while writing any application program. 
String references are used to store various attributes like username, password, etc. 
In Java, String objects are immutable. Immutable simply means unmodifiable or unchangeable.

- Once String object is created its data or state can't be changed but a new String object is created.

Why String objects are immutable in Java?
- As Java uses the concept of String literal. Suppose there are 5 reference variables, all refer to one object "Sachin". If one reference variable changes the value of the object, it will be affected by all the reference variables. That is why String objects are immutable in Java.

Following are some features of String which makes String objects immutable.
1. ClassLoader:
  A ClassLoader in Java uses a String object as an argument. Consider, if the String object is modifiable, the value might be changed and the class that is supposed to be loaded might be different.
  To avoid this kind of misinterpretation, String is immutable.

2. Thread Safe:
  As the String object is immutable we don't have to take care of the synchronization that is required while sharing an object across multiple threads.

3. Security:
  As we have seen in class loading, immutable String objects avoid further errors by loading the correct class. This leads to making the application program more secure. Consider an example of banking software.    The username and password cannot be modified by any intruder because String objects are immutable. This can make the application program more secure.

5. Heap Space:
  The immutability of String helps to minimize the usage in the heap memory. When we try to declare a new String object, the JVM checks whether the value already exists in the String pool or not. If it exists,     the same value is assigned to the new object. This feature allows Java to use the heap space efficiently.

reference :- https://www.javatpoint.com/immutable-string

# Difference between StringBuilder and StringBuffer
- reference :- https://www.javatpoint.com/difference-between-stringbuffer-and-stringbuilder

# String Tokenizer Class in Java
- reference :- https://www.javatpoint.com/string-tokenizer-in-java


git add . | git commit -m "Done revision" | git push origin main
