public class MethodOverloading {
    static int myMethod(int x){
        return x;
    }

    static float myMethod(int x,float y){
        return x+y;
    }

    static float myMethod(float x){
        return x;
    }



    public static void main(String[] args) {
        System.out.println(myMethod(10));
        System.out.println(myMethod(10,11.4f));
        System.out.println(myMethod(11.4f));
    }
}
