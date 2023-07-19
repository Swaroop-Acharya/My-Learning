public class Program1 {
    public static void main(String[] args) {
        System.out.println("Swaroop");
        String[] cars = {};
        System.out.println(cars.length);


        String[] cars1 = {"BMW","ace"};
        System.out.println(cars1.length);
        for(String c: cars1){
            System.out.println(c);
        }

        int[][] myNumbers={{0,1,2,3,4},{5,6,7}};
        for(int i=0;i<myNumbers.length;i++){
            for(int j=0;j<myNumbers[i].length;j++){
                System.out.print(myNumbers[i][j]);
            }
        }

        




    }
}
