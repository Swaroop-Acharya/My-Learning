
class A {

    int x = 10;

    public void message() {
        System.out.println("Hi this is me");
    }

    class B {
        int y = 20;

        public void show() {
            System.out.println("This is inside class");
        }

        public int access() {
            message();
            return x;
        }
    }
}

public class InnerClass1 {
    public static void main(String[] args) {
        A outer = new A();
        A.B inner = outer.new B();
        System.out.println(inner.y);
        inner.show();
        System.out.println(inner.access());
    }
}