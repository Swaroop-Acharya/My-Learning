package Problem;

//  Write a java program to reverse each word in string?
public class String3 {
    public static void main(String[] args) {
        String sentence = "I love java bro";
        String[] words = sentence.split("\\s");
        String resultSentence = "";
        for (String w : words) {
            char[] ch = w.toCharArray();
            for (int i = ch.length - 1; i >= 0; i--) {
                resultSentence += ch[i];
            }
            resultSentence += " ";
        }
        System.out.println(resultSentence);
    }
}

// public class StringFormatter {
// public static String reverseWord(String str){
// String words[]=str.split("\\s");
// String reverseWord="";
// for(String w:words){
// StringBuilder sb=new StringBuilder(w);
// sb.reverse();
// reverseWord+=sb.toString()+" ";
// }
// return reverseWord.trim();
// }
// }