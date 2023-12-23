/**
 * positiveSum
 */
public class positiveSum {

    public static int positive_sum(int[] array) {
        int sum = 0;

        for (int num : array) {
            // if num is positive number, add it to sum;
            if (num > 0) {
                sum += num;
            }
        }

        return sum;
    }

    public static void main(String[] args) {
        
        int[] numbers = {1, -2, 3, 4, -5};
        int positiveSum = positive_sum(numbers);

        System.out.println("Sum of positive integers: " + positiveSum);
    }
    
}
