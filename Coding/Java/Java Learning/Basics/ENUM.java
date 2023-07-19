// An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables).

enum Levels {
    LOW,
    HIGH,
    MEDIUM
}

public class ENUM {
    public static void main(String[] args) {
        Levels Low = Levels.LOW;
        Levels high = Levels.HIGH;
        System.out.println("Current level" + Low);

        switch (high) {
            case LOW:
                System.out.println("Current level is Low");
                break;
            case HIGH:
                System.out.println("Current level is High");
                break;
            case MEDIUM:
                System.out.println("Current level is Medium");
                break;
            default:
                System.out.println("Not a valid option");
        }

        for (Levels myVar : Levels.values()) {
            System.out.println(myVar);
        }

    }
}
