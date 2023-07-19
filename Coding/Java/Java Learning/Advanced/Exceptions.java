package Advanced;

import java.util.Scanner;

public class Exceptions {
    static void checkAge(int age) {
        // User defined exception
        if (age > 10) {
            throw new ArithmeticException(" Age is greater than 10 , he can vote");
        }else{
            System.out.println("He cannot vote!!!");
        }

    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int numerator = in.nextInt();
        int denomenator = in.nextInt();
        try {
            int result = numerator / denomenator;
            System.out.println(result);
        } catch (Exception e) {
            System.out.println("Divided by zero error " + e);
        } finally {
            System.out.println("Program done");
        }
        in.close();

        int age = 20;

        checkAge(age);
    }
}
