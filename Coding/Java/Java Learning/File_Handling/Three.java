
package File_Handling;

import java.io.File;  // Import the File class

public class Three {
  public static void main(String[] args) { 
    File myObj = new File("Name.txt"); 
    if (myObj.delete()) { 
      System.out.println("Deleted the file: " + myObj.getName());
    } else {
      System.out.println("Failed to delete the file.");
    } 
  } 
}