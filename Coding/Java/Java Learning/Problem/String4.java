package Problem;

public class String4 {
    public static void main(String[] args) {
        String sentence ="i love java";
        String[] words = sentence.split("\\s");
        String result="";
        for(String w:words){
            String first = w.substring(0, 1);
            String rest = w.substring(1).toUpperCase();
            result+=first+rest+" ";
        }
        System.out.println(result);
    }
}
