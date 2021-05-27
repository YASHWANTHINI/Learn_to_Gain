A graph model defines the relationship among the commits in a repository.
 * Directed Acyclic Graph
     Graphs contain nodes connected by lines. The lines are technically called edges.The nodes represent the things that are being modeled, and the lines represent the connections between them.
 * Directed graph
     A directed graph means that the nodes are connected in a certain direction. The direction is represented using arrows.
     
Git models the relationship of commits with the directed acyclic graph. The entire graph contains a project's history. Each node in Git represents a commit. The arrows point at a commit's parents.The arrows point at a commit's parents. In this example, you can see that commit D has two parents, commit B and commit C. 
The commits and the relationship between them is what forms the project's history. A branch occurs if a commit has more than one child. This graph contains a branch because commit A has two children, commit B and commit C. A merge occurs when a commit has more than one parent. In this example, commit D is a merge of branch one and branch two.

![image](https://user-images.githubusercontent.com/58984578/119757941-54784380-bec3-11eb-95f6-2782f629d96b.png)

#### Git objects
Git uses objects to store four types of things.
A commit object is a simple text file that contains information such as the commit user information, commit message, a reference to the commit's parent or parents, and a reference to the root tree of the project. That information is all that Git needs to rebuild the full contents of a commit.
An annotated tag is a permanent reference to a specific commit. 
A tree is an object that contains a list of the filenames and directories inside of a directory. 
A blob is an object that stores the content of a file that is being managed by Git.
Typical Git user may only interact with commit objects and tags. Git keeps these objects internally in something called the object store, but you typically don't directly interact with the object store.

#### Git ID
A Git ID is the name of a Git object. All of the objects stored by Git are named with a 40-character hexadecimal string. These strings are commonly known as Git IDs, but they are also known as object IDs, SHA-1s, hashes and checksums.

![image](https://user-images.githubusercontent.com/58984578/119759285-9bffcf00-bec5-11eb-8cc9-6f59c4c5c996.png)

SHA-1 values are designed to avalanche. Which means that small changes in the content, leads to a large difference in the SHA-1 values. 

![image](https://user-images.githubusercontent.com/58984578/119759562-192b4400-bec6-11eb-9569-9f295d1eb350.png)

#### Plumbing Commands
Git hash-object is an example of a low level or plumbing command in Git. You probably will not commonly use plumbing commands, but they're useful for scripting and can be useful for helping you to understand Git. 
![image](https://user-images.githubusercontent.com/58984578/119759678-47a91f00-bec6-11eb-81f9-f0e9e0e44a6d.png)

#### Shortend ID

![image](https://user-images.githubusercontent.com/58984578/119759812-817a2580-bec6-11eb-8072-7ced8b7ba8c2.png)

Since the 40-character Git ID names are not very people friendly, Git sometimes shortens them to the first seven characters. Here you can see that the Git log command with the one line option returns a shortened Git ID for the commit object. If we execute the Git log command with no options, you can see that the full 40-character version of the commit object name is used. Notice that the first seven characters match the shortened version of the Git ID. When you are entering IDs in Git commands, you can shorten the IDs too, just to use at least the first four characters when referencing an ID. If there is only one object in the object store that starts with those characters, Git will know which object you are referring to.
we use the Git show command, which shows the contents of an object. Here, we include only the first four characters of the Git ID. Git knows which object you are referring to and returns information on the object.
