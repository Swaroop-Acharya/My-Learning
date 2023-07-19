package String_Methods;

//Java Program to demonstrate the performance of StringBuffer and StringBuilder classes.  
public class Seven {
    public static void main(String[] args) {
        long time = System.currentTimeMillis();
        StringBuffer str = new StringBuffer("Swaroop");
        for (int i = 0; i < 10000; i++) {
            str.append("Adding");
        }
        System.out.println(
                "The String buffer took this much time to execute: " + (System.currentTimeMillis() - time) + "ms");
        time = System.currentTimeMillis();
        StringBuilder str1 = new StringBuilder("Swaroop");
        for (int i = 0; i < 10000; i++) {
            str1.append("Adding");
        }
        System.out.println(
                "The String buffer took this much time to execute: " + (System.currentTimeMillis() - time) + "ms");

    }
}
