import java.util.Scanner;

class TableCalculator {
    public void printTable(int num) {
        for(int i=1;i<=10;i++){

            System.out.println(i * num);
        }
    }
}

public class Main {

    public static void main(String[] args) {
        TableCalculator obj=new TableCalculator();
        Scanner in= new Scanner(System.in);
        int num=in.nextInt();
        obj.printTable(num);
    }
}