package File_Handling;
// The File class from the java.io package, allows us to work with files.

// To use the File class, create an object of the class, and specify the filename or directory name:

// canRead()	- Boolean	Tests whether the file is readable or not
// canWrite()	- Boolean	Tests whether the file is writable or not
// createNewFile()- 	Boolean	Creates an empty file
// delete()	- Boolean	Deletes a file
// exists()	- Boolean	Tests whether the file exists
// getName()	- String	Returns the name of the file
// getAbsolutePath()	- String	Returns the absolute pathname of the file
// length()	- Long	Returns the size of the file in bytes
// list()	- String[]	Returns an array of the files in the directory
// mkdir()	- Boolean	Creates a directory

import java.io.File;
import java.io.IOException;

public class One {
    public static void main(String[] args) {
        try {
            File myObj = new File("filename.txt");
            if (myObj.createNewFile()) {
                System.out.println("File created " + myObj.getName());

            } else {
                System.out.println("File already exists");
            }

        } catch (IOException e) {
            System.out.println("An error encountered");
            e.printStackTrace();
        }
    }
}
