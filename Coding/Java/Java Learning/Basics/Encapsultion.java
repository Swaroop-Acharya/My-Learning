
class Data {
    private float Salary = 10_00_000f;
    // private float bonus;

    public float getSalary() {
        return Salary;
    }

    public void setSalary(float newSalary) {
        this.Salary = newSalary;
    }

}

public class Encapsultion {

    private int age = 10;

    public static void main(String[] args) {
        Encapsultion e = new Encapsultion();
        System.out.println(e.age);

        Data d = new Data();
        System.out.println(d.getSalary());

        int newSalary = 15_00_000;

        d.setSalary(newSalary);
        System.out.println(d.getSalary());
    }
}
