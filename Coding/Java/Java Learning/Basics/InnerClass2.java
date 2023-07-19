class outerClass {
    int x = 10;

    // Only inner class can be static
    static class innerClass {
        int y = 10;
    }

}

public class InnerClass2 {
    public static void main(String[] args) {

       outerClass.innerClass obj=new outerClass.innerClass();
       System.out.println(obj.y);
    
    }
}
