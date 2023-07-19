public class Recursion1 {

    static int addNum(int x) {
        if (x > 0) {
            return x + addNum(x - 1);
        } else {
            return 0;
        }
    }

    public static void main(String[] args) {
        // recursion to add all of the numbers up to 10.

        System.out.println(addNum(10));
    }
}

// Halting Condition
// Just as loops can run into the problem of infinite looping,
// recursive functions can run into the problem of infinite recursion.
// Infinite recursion is when the function never stops calling itself.
// Every recursive function should have a halting condition, which is the
// condition
// where the function stops calling itself. In the previous example, the halting
// condition is when the parameter k becomes 0.
