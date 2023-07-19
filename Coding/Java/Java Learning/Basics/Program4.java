//There can only be one public class because its name should be same as
//File name

public class Program4 {
    private class A {
        static int a = 10;
    }

    public static void main(String[] args) {
       
        System.out.println(A.a);
    }
}
