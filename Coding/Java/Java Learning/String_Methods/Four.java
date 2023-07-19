package String_Methods;
//Java Substring 

//startIndex: inclusive
// endIndex: exclusive

public class Four {
    public static void main(String[] args) {
        String s = "Swaroop Acharya";
        System.out.println(s.substring(0, 9)); // Swaroop A

        String sentence1 = "Hello, Iam Swaroop";
        String[] arr1 = sentence1.split(" ");
        System.out.println(arr1.length);
        for (String w : arr1) {
            System.out.println(w);
        }

        String sentence2 = "One sentence. Second Sentence. Third Sentence";
        String[] arr2 = sentence2.split("\\.");
        System.out.println(arr2.length);
        for (String w : arr2) {
            System.out.println(w.trim());
        }

    }
}
