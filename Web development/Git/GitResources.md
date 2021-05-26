#### How Git and DevOps are related?
DevOps has a few fundamental principles that most modern software projects follow. One of the key principles is to continuously plan, build and release small improvements to your product.This is contrasted with what might be called the waterfall approach, In which many features are planned, developed and released as one batch.Continuous small changes to a product, also known as small batch sizes leads to continuous improvement.
We know that each commit is a snapshot of the entire project at a given point in time. With many small changes to the project, you might think that Git stores many copies of the same file. This is not how Git works however.
<b>Git is very efficient at storing commits. Each unique file is stored only once.</b>

For example, after commit A, Git has stored 50 files. Commit B only adds one file for Git to store, the file that contains the bug fix. So after commit B, there are a total of 51 files stored. 

The collection of commits contain the history of the project. At any time you can review the projects history and undo changes by going back to the previous version of the project.

All commits belong to a <b>branch.</b>

A branch can be thought of as an independent line of development of the project. By default, there is a single branch and it's called master. In this example, commits A, B, and C all belong to the master branch.
How do you maintain a stable project at the same time that you are working on it? You can create a separate branch and work on it independently of the master branch.
Here a featureX branch was created, and commit C includes content that is unique to the featureX branch. In this case, the master branch does not know that the featureX branch exists. The master branch thinks that the latest commit is B, even though separate work has been done on commit C. We've seen that branches can be used to independently work on the project without disrupting the rest of the project. Here the master branch sees the project as 50 stable files. This commit has usually been tested, approved and maybe the version of the product that is currently in production.
The featureX branch sees the same 50 files plus maybe one file that was added for the new feature.
The independence of branches allow teams to scale their work.
In this example, the project can be in production at commit B and separate development can be done on featureX, bugY, and featureZ.
Commit B on the master branch is not aware of or impacted by the other branches. Git can manage the many versions of projects with commits and that the project can be worked on independently using branches.<b>Merging independent branches using pull requests.</b>

When a branch is ready to become part of the master branch, it can be merged into the master branch. <b>A merge combines the work of separate branches.</b>before the merge, featureX is implemented on its own branch which is also called featureX.
Before the merge, the master branch has no knowledge of the featureX branch.
After the merge, there's a single master branch with the latest commit, including the code that implements featureX.
Before you merge content into the master branch, how do you know that your changes are good?

<b>A pull request is a request to merge your branch into another branch.</b>
This request is usually made by developer of the branch when the feature, bug fix or other change is complete. In this example, the pull request is a request to merge the commit that includes featureX into the master branch. During a pull request team members can discuss, review, and approve your changes.
You can also require that automated test pass before the merge is allowed to happen. This helps ensure that the changes introduced by the merge don't cause problems for the customer.
If the pull request is accepted, your version of the project is merged and becomes the latest commit on the master branch.
You can feel good about the quality because the changes were reviewed and automated tests have passed.

![image](https://user-images.githubusercontent.com/58984578/119631238-5263a580-be2d-11eb-845f-6cd4c2b4e615.png)

#### Git Overview
Version control manages a collection of changing and improving files which we can call a project. The complete history of the project is tracked and available at any time. Version control also supports teams working on that collection of files. Teams work in many different ways, and a good version control system will support many of their workflows or ways of getting work done. Version control helps support collaboration on the project and improves quality through facilitating team communication and reviews.Version control enables agility, the ability to adapt quickly and constructively to a changing environment.

![image](https://user-images.githubusercontent.com/58984578/119639086-e2591d80-be34-11eb-826e-76927fc39bb6.png)

#### What type of content can be managed with version control?
Any content that you value and want to continuously improve is a good candidate for version control.
Git is commonly used for managing the source code related to software projects. Git is especially good at managing text-based content like this.
Code that is used to run tests is also a good candidate for version control. 
The tests need to be properly managed and are usually always improving. Version control is not limited to developer related projects.
IT teams should manage configuration information in version control as well so that the infrastructure can be properly managed and rebuilt at any time. 
Documentation, books and websites all contain content that is consistently changing and improving, making them great candidates for version control as well. 
Again any content that you want to properly manage and continuously improve should be managed with version control.

![image](https://user-images.githubusercontent.com/58984578/119639827-9bb7f300-be35-11eb-9841-547b4226b4a3.png)

#### Distributed Version Control System (DVCS)
A distributed version control system is a type of version control system. It usually has these characteristics. 
 * Each user has a local copy of the complete history of the project, which is known as a repository. Here we see that there are two users on the team and each has a copy of a remote repository on their local computer. Even though repositories are distributed among team members there's also a single remote repository that is designated as the source of truth or official state of the project. This repository is usually hosted in a data center or in the cloud.
 * Because each user has a local copy of the complete history of the project, they can continue to work while offline
 * Content is synchronized between repositories by pulling content from or pushing content to a remote repository. 

![image](https://user-images.githubusercontent.com/58984578/119640642-724b9700-be36-11eb-88e2-2c0da43361bb.png)
#### Git
Git is a distributed version control system. We've seen that this means each user has a local copy of the repository and that repositories can easily be synchronized. Git is a free and open source software project meaning that the code that implements Git is publically available. No single company owns Git, and anyone can make contributions to improve it. 
In fact software development of the Linux operating system is managed using Git. A Git repository contains a series of snapshots of the project over time which are known as commits. Each commit contains all of the directories and files of the project at the time the snapshot was taken. You can go back and view the project at earlier points by viewing the older commits.
Interfacing with Git through the command line interface and the graphical user interface.
