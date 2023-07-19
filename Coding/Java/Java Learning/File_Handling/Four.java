package File_Handling;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Four {
    public static void main(String[] args) {
        try {
            File myObj = new File("name.txt");
            Scanner data = new Scanner(myObj);
            while (data.hasNextLine()) {
                String d = data.nextLine();
                System.out.println(d);
            }
            data.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
