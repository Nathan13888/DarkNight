import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Java {
    String name;
    String breed;
    int age;
    String colour;
    // Single-line Comment
    /*
     * Multi-line Comment
     */

    public Java(String name, String breed, int age, String colour) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.colour = colour;
    }

    @Override
    public String toString() {
        return ("Hi my name is " + this.getName() + ".\nMy breed, age and colour are " + this.getBreed() + ","
                + this.getAge() + "," + this.getcolour());
    }

    /**
     * JavaDoc Comment
     * 
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            String name = br.readLine().trim();
            String breed = br.readLine().trim();
            int age = Integer.parseInt(br.readLine().trim());
            String colour = br.readLine().trim();
            Java newDog = new Java(name, breed, age, colour);
            System.out.println(newDog.toString());
        }
    }

    // GETTERS
    public String getName() {
        return name;
    }

    public String getBreed() {
        return breed;
    }

    public int getAge() {
        return age;
    }

    public String getcolour() {
        return colour;
    }
}
