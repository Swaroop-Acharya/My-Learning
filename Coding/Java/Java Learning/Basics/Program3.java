public class Program3 {
    static int a = 10;

    // b is called as non static varible or instance variable
    int b = 10;

    public static void main(String[] args) {
        Program3 p3 = new Program3();

        System.out.println(p3.b);
        System.out.println(a);
    }
}

// non-static variables are associated with an instance of a class.