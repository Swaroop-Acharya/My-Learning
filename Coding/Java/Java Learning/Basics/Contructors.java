public class Contructors {
    int x; // Class Attribute
    int init;

    // Default constructor
    public Contructors() {
        x = 5;
    }

    // Parameterized Constructor
    public Contructors(int init) {
        this.init = init;
    }

    public static void main(String[] args) {
        Contructors con = new Contructors();
        Contructors con1 = new Contructors(10);
        System.out.println(con.x);
        System.out.println(con1.x);
    }
}
// A constructor in Java is a special method that is used to initialize objects.
// The constructor is called when an object of a class is created. It can be
// used to
// set initial values for object attributes: