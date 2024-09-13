/** Given:
[1,2,3,4,5,6]

Return
[2,1,4,3,6,5]



import java.util.Arrays;
public class ReArrangeNumbers {

}
} **/



import java.util.Arrays;

public class ReArrangeNumbers {
    public static void main(String[] args) {
        // Example input
        int[] inputArray = {1, 2, 3, 4, 5, 6};
        
        // Call the function to swap adjacent elements
        int[] outputArray = swapAdjacent(inputArray);
        
        // Print the output array
        System.out.println(Arrays.toString(outputArray));
    }
    
    public static int[] swapAdjacent(int[] array) {
        // Create a copy of the input array to avoid modifying the original
        int[] result = array.clone();
        
        // Loop through the array in steps of 2
        for (int i = 0; i < result.length - 1; i += 2) {
            // Swap the elements at indices i and i + 1
            int temp = result[i];
            result[i] = result[i + 1];
            result[i + 1] = temp;
        }
        
        return result;
    }
}


