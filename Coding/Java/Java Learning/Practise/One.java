package Practise;

import java.io.File;

public class One {
    public static void main(String[] args) {
        File myObj = new File("file.txt");
        if (myObj.delete()) {
            System.out.println("Deleted: " + myObj.getName());
        } else {
            System.out.println("File not deleted");
        }
    }
}
