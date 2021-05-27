A graph model defines the relationship among the commits in a repository.
 * Directed Acyclic Graph
     Graphs contain nodes connected by lines. The lines are technically called edges.The nodes represent the things that are being modeled, and the lines represent the connections between them.
 * Directed graph
     A directed graph means that the nodes are connected in a certain direction. The direction is represented using arrows.
     
Git models the relationship of commits with the directed acyclic graph. The entire graph contains a project's history. Each node in Git represents a commit. The arrows point at a commit's parents.The arrows point at a commit's parents. In this example, you can see that commit D has two parents, commit B and commit C. 
The commits and the relationship between them is what forms the project's history. A branch occurs if a commit has more than one child. This graph contains a branch because commit A has two children, commit B and commit C. A merge occurs when a commit has more than one parent. In this example, commit D is a merge of branch one and branch two.

![image](https://user-images.githubusercontent.com/58984578/119757941-54784380-bec3-11eb-95f6-2782f629d96b.png)
