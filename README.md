This project finds the constant term c of a hidden polynomial using a set of encoded points, simulating Shamir's Secret Sharing.

Decode Points: Each point has an x (position) and an encoded y value in a specific base (e.g., binary or decimal). We decode y into base 10.
Lagrange Interpolation: Using the decoded points, we calculate the constant term c with Lagrange interpolation.


Result: Outputs c as the "secret."


How to Run
Place JSON data in input.json.

Run the script with:
bash
Copy code
node yourScript.js
Output: Displays the calculated secret c.

output for first json file is 3
output for second json file is 79836264050688






