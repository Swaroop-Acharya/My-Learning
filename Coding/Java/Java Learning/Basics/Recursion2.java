public class Recursion2 {
    static int adder(int start, int end) {
        if (start < end) {
            return start + adder(start + 1, end);
        } else {
            return start;
        }
    }

    public static void main(String[] args) {
        int result = adder(5, 10);
        System.out.println(result);
    }

}
