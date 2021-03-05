# Optimisation algorithms

## A*

The A* algorithm uses a heuristic: h = 5(nodes to target)

Add the heuristic value to the sum of the node weights, perform BFS using a priority queue as in Dijkstra's algorithm

## Exam style questions

1. &#x200b;

   1. Fig. 2.1 shows the flight paths between a country's airports. The value in bold beneath each node is the heuristic value from E.

      [![Fig. 2.1](./a*_graph_1.png)](./a*_graph_1.png)  
      Fig. 2.1

      State the full name of the data structure shown in Fig. 2.1.
      - Weighted bidirectional graph
   2. The structure in Fig. 2.1 is searched using the A* algorithm making use of the heuristic values.
      1. State what the heuristic values could represent in Fig. 2.1
         - Physical distance from E to the node
      2. State the purpose of heuristic values in the A* algorithm.
         - Using heuristic values for each node allows the algorithm to spend less time searching paths which are unlikely to be the shortest
      3. Perform an A* algorithm on the data structure in Fig. 2.1 to find the shortest distance between H and E. Show each step of the process, and the calculations performed for each node visited.
         - <details><summary>Step 0</summary>

           | Visited | Queued     | Unknown |
           | ------- | ---------- | ------- |
           |         | H - 0 + 80 |         |
           |         |            | G       |
           |         |            | N       |
           |         |            | L       |
           |         |            | M       |
           |         |            | E       |
         </details>

         - <details><summary>Step 1</summary>

           | Visited | Queued              | Unknown |
           | ------- | ------------------- | ------- |
           | H - 80  |                     |         |
           |         | H⇒G - 80 + 25 + 70  |         |
           |         | H⇒N - 80 + 210 + 90 |         |
           |         |                     | L       |
           |         |                     | M       |
           |         |                     | E       |
         </details>

         - <details><summary>Step 2</summary>

           | Visited   | Queued               | Unknown |
           | --------- | -------------------- | ------- |
           | H - 80    |                      |         |
           | H⇒G - 175 |                      |         |
           |           | H⇒N - 380            |         |
           |           | G⇒L - 175 + 51 + 50  |         |
           |           | G⇒M - 175 + 176 + 20 |         |
           |           |                      | E       |
         </details>

         - <details><summary>Step 3</summary>

           | Visited   | Queued              | Unknown |
           | --------- | ------------------- | ------- |
           | H - 80    |                     |         |
           | H⇒G - 175 |                     |         |
           | G⇒L - 276 |                     |         |
           |           | G⇒M - 371           |         |
           |           | H⇒N - 380           |         |
           |           | L⇒E - 276 + 307 + 0 |         |
         </details>

         - <details><summary>Step 4</summary>

           | Visited   | Queued                           | Unknown |
           | --------- | -------------------------------- | ------- |
           | H - 80    |                                  |         |
           | H⇒G - 175 |                                  |         |
           | G⇒L - 276 |                                  |         |
           | G⇒M - 371 |                                  |         |
           |           | H⇒N - 380                        |         |
           |           | L⇒E - 583 \| M⇒E - 371 + 185 + 0 |         |
         </details>

         - <details><summary>Step 5</summary>

           | Visited   | Queued    | Unknown |
           | --------- | --------- | ------- |
           | H - 80    |           |         |
           | H⇒G - 175 |           |         |
           | G⇒L - 276 |           |         |
           | G⇒M - 371 |           |         |
           | H⇒N - 380 |           |         |
           |           | M⇒E - 556 |         |
         </details>

         - <details><summary>Step 6</summary>

           | Visited   | Queued | Unknown |
           | --------- | ------ | ------- |
           | H - 80    |        |         |
           | H⇒G - 175 |        |         |
           | G⇒L - 276 |        |         |
           | G⇒M - 371 |        |         |
           | H⇒N - 380 |        |         |
           | M⇒E - 556 |        |         |
         </details>

         - Fastest route: H⇒G⇒M⇒E
