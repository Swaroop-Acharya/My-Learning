package String_Methods;

// Java StringBuffer Class
// Java StringBuffer class is used to create mutable (modifiable) String objects. 
// The StringBuffer class in Java is the same as String class except it is mutable i.e. it can be changed.

// Important Constructors of StringBuffer Class

// StringBuffer()	It creates an empty String buffer with the initial capacity of 16.
// StringBuffer(String str)	It creates a String buffer with the specified string..
// StringBuffer(int capacity)	It creates an empty String buffer with the specified capacity as length.

//Methods
// append()
// insert(offset,string)
//repalce(start,end,string);
//delete(start,end)
//reverse()
//length
//charAt()
//capacity() -The capacity() method of the StringBuffer class returns the current capacity of the buffer. 
// The default capacity of the buffer is 16. If the number of character increases from its current capacity, 
// it increases the capacity by (oldcapacity*2)+2. For example if your current capacity is 16, it will be (16*2)+2=34

// ensureCapacity() -The ensureCapacity() method of the StringBuffer class ensures that the given capacity is 
// the minimum to the current capacity. If it is greater than the current capacity, it increases the capacity by (oldcapacity*2)+2. 
// For example if your current capacity is 16, it will be (16*2)+2=34.
public class Six {
    public static void main(String[] args) {
        StringBuffer str1 = new StringBuffer();
        StringBuffer str2 = new StringBuffer("Swaroop");
        StringBuffer str3 = new StringBuffer(50);

        str1.append("Sudeep");
        System.out.println(str1);
        str1.insert(2, "Swaroop");
        System.out.println(str1);
        str1.replace(1, 2, "null");
        System.out.println(str1);
        str1.delete(1, 2);
        System.out.println(str1);

        str2.reverse();
        System.out.println(str2); // poorawS

        System.out.println(str1.capacity()); // default 16
        System.out.println(str3.capacity()); // 50

        str1.append("hI Iam a software developer, Sepecialized in full stack ");
        System.out.println(str1);
        System.out.println(str1.capacity());

        StringBuffer str10 = new StringBuffer();
        str10.append("Shetty");
        str10.ensureCapacity(5);
        System.out.println(str10.capacity());// 16
        str10.append("ShettyShettyshetty");
        System.out.println(str10.capacity());// 34

        String str = "Swaroop is cool dude";
        String res = str.replace("Swaroop", "Sudeep");
        System.out.println(res);

    }
}
