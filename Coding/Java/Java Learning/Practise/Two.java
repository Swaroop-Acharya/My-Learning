package Practise;
class Employee{
    private double salary;
    
    public double getSalary(){
        return salary;
    }
    public void setSalary(double newSalary){
        salary= newSalary;
    }
}
public class Two {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.setSalary(1234.23d);
        System.out.println(e1.getSalary());
    }
}
