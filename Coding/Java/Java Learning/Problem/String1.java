package Problem;

//reverse a string  in java

public class String1 {
    public static void main(String[] args) {
        // StringBuilder sb = new StringBuilder(str);
        // sb.reverse();
        // return sb.toString();

        String s = "Swaroop";
        char[] ch = s.toCharArray();
        String rev = "";
        for (int i = ch.length - 1; i >= 0; i--) {
            rev += ch[i];
        }
        System.out.println(rev);
    }
}
