import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

interface IBankAccountOperation {
    void deposit(double amount);
    void withdraw(double amount);
    double processOperation(String message);
}

class BankAccountOperations implements IBankAccountOperation {
    private double balance;

    public BankAccountOperations() {
        this.balance = 0.0;
    }

    @Override
    public void deposit(double amount) {
        balance += amount;
    }

    @Override
    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }

    @Override
    public double processOperation(String message) {
        String[] words = message.split(" ");

        for (int i = 0; i < words.length; i++) {
            if (words[i].equalsIgnoreCase("see") || words[i].equalsIgnoreCase("show")) {
                return balance;
            } else if (i < words.length - 1) {
                if (words[i].equalsIgnoreCase("deposit") || words[i].equalsIgnoreCase("put") ||
                words[i].equalsIgnoreCase("invest") || words[i].equalsIgnoreCase("transfer")) {
                    double amount = Double.parseDouble(words[i + 1]);
                   
                    deposit(amount);
                    return balance;
                } else if (words[i].equalsIgnoreCase("withdraw") || words[i].equalsIgnoreCase("pull")) {
                    double amount = Double.parseDouble(words[i + 1]);
                    withdraw(amount);
                    return balance;
                }
            }
        }

        return balance;
    }
}

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter pw = new PrintWriter(System.out);

        int n = Integer.parseInt(br.readLine());
        List<String> inputs = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            inputs.add(br.readLine());
        }

        BankAccountOperations opt = new BankAccountOperations();
        for (String item : inputs) {
            pw.println((int) opt.processOperation(item));
        }

        pw.flush();
        pw.close();
    }
}
