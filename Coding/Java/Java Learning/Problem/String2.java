package Problem;

//  Write a java program to capitalize each word in string?
public class String2 {
    public static void main(String[] args) {
        String sentence = "Hellow this is swaroop";
        String[] words = sentence.split("\\s");
        String capSentence = "";
        for (String w : words) {
            String first = w.substring(0, 1);
            String rest = w.substring(1);
            capSentence += first.toUpperCase() + rest + " ";
        }
        System.out.println(capSentence);
    }
}
