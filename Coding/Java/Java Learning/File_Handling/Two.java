package File_Handling;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Two {
    public static void main(String[] args) {
        try {
            File myObj = new File("filename.txt");
            FileWriter writer = new FileWriter(myObj);
            writer.write("Hi this is Swaroop");
            writer.close();
            System.out.println("File writing is Done!!");

        } catch (IOException e) {
            System.out.println("Something happend");
            e.printStackTrace();
        }
    }
}
