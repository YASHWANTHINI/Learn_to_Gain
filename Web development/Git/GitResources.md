#### How Git and DevOps are related?
DevOps has a few fundamental principles that most modern software projects follow. One of the key principles is to continuously plan, build and release small improvements to your product.This is contrasted with what might be called the waterfall approach, In which many features are planned, developed and released as one batch.Continuous small changes to a product, also known as small batch sizes leads to continuous improvement.
We know that each commit is a snapshot of the entire project at a given point in time. With many small changes to the project, you might think that Git stores many copies of the same file. This is not how Git works however.
<b>Git is very efficient at storing commits. Each unique file is stored only once.</b>

For example, after commit A, Git has stored 50 files. Commit B only adds one file for Git to store, the file that contains the bug fix. So after commit B, there are a total of 51 files stored. 

The collection of commits contain the history of the project. At any time you can review the projects history and undo changes by going back to the previous version of the project.

All commits belong to a <b>branch.</b>

A branch can be thought of as an independent line of development of the project. By default, there is a single branch and it's called master. In this example, commits A, B, and C all belong to the master branch.
All commits belong to a branch, a branch can be thought of as an independent line of development of the project. By default, there is a single branch and it is called <b>master.</b> 
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
Reason to use the command line is that if something can be executed at the command line, it can also be automated. One of the fundamental principles of DevOps is to automate everything that can be automated. So using the command line goes hand in hand with automation.

#### Basic Syntax
![image](https://user-images.githubusercontent.com/58984578/119642788-b770c880-be38-11eb-9a9a-c2ac1bfddd3e.png)

![image](https://user-images.githubusercontent.com/58984578/119642842-c5bee480-be38-11eb-8b99-477e0ada6650.png)

![image](https://user-images.githubusercontent.com/58984578/119642891-d2433d00-be38-11eb-822c-7afff8a120f8.png)

![image](https://user-images.githubusercontent.com/58984578/119642942-dcfdd200-be38-11eb-8952-bf54c0229a45.png)

![image](https://user-images.githubusercontent.com/58984578/119643036-ee46de80-be38-11eb-8f33-12a5634a8f8d.png)

![image](https://user-images.githubusercontent.com/58984578/119643542-7b8a3300-be39-11eb-9d85-8e419dd398d2.png)

![image](https://user-images.githubusercontent.com/58984578/119643752-c310bf00-be39-11eb-8b04-4fe24e224380.png)

![image](https://user-images.githubusercontent.com/58984578/119643978-0408d380-be3a-11eb-88b1-99f519bf3e2b.png)
In this example, we're reading the current value of our name and email address. If this command is executed from inside a local repository, the local value will be returned. If a local value is not specified, the global value is returned. If a global value is not specified, the system value is returned.

![image](https://user-images.githubusercontent.com/58984578/119644183-374b6280-be3a-11eb-8d5b-066c818af64e.png)

Git sometimes opens an editor for you to type a message. For example, an editor will open if you don't specify a commit message. To set your preferred Git editor, you can set the value of the core.editor key. In this example the default Git editor has been changed to nano. 

#### Locations of Git
![image](https://user-images.githubusercontent.com/58984578/119644945-20594000-be3b-11eb-9767-b8852904f044.png)

### Working Tree
We know that a commit is a single snapshot of the project. The working tree is the location on your computer that contains the directories and files of a single commit. This is where you can view and edit the files of the project, preparing them for the next commit. 
### Staging Area
The staging area, which is also sometimes called the index. The staging area contains a list of files that are planned to be included in the next commit that you make. You prepare the staging area just the way that you want it, so that the next commit is a meaningful snapshot of the project. 
### Local Repository
The local repository contains all of the commits that have been made for the project. These commits represent the version history of the project.
### Project directory
The working tree, staging area, and local repository are commonly all contained in a single directory on your local computer. This is called the project directory. The project directory contains the working tree. The working tree contains the directories and files of a single commit or snapshot of your project. You can view and edit these files to prepare them for the next commit. The project directory also contains a hidden directory anyname.git(This is where the staging area and local repository are located). Notice that if you delete your project directory, you are also deleting your local repository and staging area, because they are in the .git directory. 
### Remote Repository
The remote repository is usually located in a data center or in the cloud. The remote repository contains the commits of the project, and is often considered the source of truth or official state of the project. And it often integrates with other systems like issue trackers and continuous delivery pipelines. When the local and remote repositories are synchronized, they contain exactly the same commits.
Hosted options for remote git repositories include Bitbucket and GitHub. On-premise options include Bitbucket Server, GitHub Enterprise, as well as some open source on-premise options. The on-premise options can be hosted in a data center or in the cloud. A remote repository is often a bare repository. Because nobody works with the repository locally, there is usually no working tree or staging area on a remote repository. The root directory of a remote repository is similar to the ".git" directory in a local repository. By convention, remote repository names end with ".git".

![image](https://user-images.githubusercontent.com/58984578/119650848-eb9cb700-be41-11eb-94e5-b69740a9ed1a.png)

#### Create a local repository 
![image](https://user-images.githubusercontent.com/58984578/119646487-da04e080-be3c-11eb-9edb-e0c656646e53.png)

![image](https://user-images.githubusercontent.com/58984578/119646533-e721cf80-be3c-11eb-81ad-80686187c318.png)

For a new local repository, the working tree and staging area start out empty, and no commits are in the local repository. You can execute the git init command in an empty directory to initialize or create a repository. Here we are in our home directory and we create a repos directory. This is a recommended single location for all of your local repositories on your computer. We change directories to the repos directory. Next, we'll create a project directory. We are naming this directory myproj. We change into the myproj directory. Now that we are inside of our project directory, we can execute git init to begin managing our project directory with Git. Notice that Git responds with a message saying that it has initialized and empty Git repository inside of a newly created dot Git directory in the project directory. We can now list the contents of the project directory, specifying the dash a flag to include hidden directories. Notice that Git has created a dot git directory. In your project directory you now have an empty working tree and a hidden dot git directory. The dot git directory contains an empty staging area and a local repository containing no commits. 

#### Commit to Local repository
[PDF](https://d3c33hcgiwev3.cloudfront.net/_7f00ec98be4bc67d9c4478a9c111d2e5_lab3_1_04b_cli_commit.pdf?Expires=1622160000&Signature=G4pwq2DpDAAepRtR-poHHlqEsvbPa7xMXVEPuFDXR56Y6fEn3LtA-XM4umK3CvP9RtMGGeTcGx1lIRntAINta~rkBcssF5ZM6zOepRagrZmAZbaP0ZKFzOYB3LsKj1xRggpj6fvYmg8u3qycAL4jrNhAXmVGb-y5GQbBiFWNGQE_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

![image](https://user-images.githubusercontent.com/58984578/119647640-26045500-be3e-11eb-9822-719860da581b.png)

![image](https://user-images.githubusercontent.com/58984578/119647769-4b915e80-be3e-11eb-9b2b-368165debd44.png)

![image](https://user-images.githubusercontent.com/58984578/119648001-927f5400-be3e-11eb-8f94-98cc4d7d29e2.png)

![image](https://user-images.githubusercontent.com/58984578/119648127-b3e04000-be3e-11eb-9119-059c7b62f22a.png)

![image](https://user-images.githubusercontent.com/58984578/119648188-cc505a80-be3e-11eb-8af2-cdda5bd0c565.png)

![image](https://user-images.githubusercontent.com/58984578/119648586-41bc2b00-be3f-11eb-81d9-249fd4743a3e.png)

![image](https://user-images.githubusercontent.com/58984578/119648719-6d3f1580-be3f-11eb-9fb1-78e53ee1e325.png)

![image](https://user-images.githubusercontent.com/58984578/119648963-af685700-be3f-11eb-9223-6c76763084d1.png)

Use the git commit command to add staged content to the local repository as a commit.
This includes content that you have recently added to the stage, as well as the content that was in the previous commit.
The result is a commit that is an entire snapshot of the project. In other words, once you have committed a file, it will remain in the staging area and in all commits, unless you specifically remove it.
When executing git commit, you can use the -m flag to specify a short commit message. In this case, our commit message is initial commit. If you don't specify -m, your default git editor will open. And you can enter a message describing the commit. This is especially useful if your commit message contains multiple lines of text.
The commit message is included when viewing the project history. So it's important that it is clear and accurate.
Once we execute git commit, you will see that a commit has been created in the local repository. Git status will then show that the working tree and staging area are clean.

![image](https://user-images.githubusercontent.com/58984578/119649090-dde63200-be3f-11eb-96c2-ac35f321cb26.png)

![image](https://user-images.githubusercontent.com/58984578/119649154-ef2f3e80-be3f-11eb-9034-0483fba30812.png)

![image](https://user-images.githubusercontent.com/58984578/119649288-17b73880-be40-11eb-843c-ccbd867a223b.png)

#### [Create a remote repository](https://d3c33hcgiwev3.cloudfront.net/YrG1-uXRQ2mxtfrl0SNpEQ_103c217d58d7468283954c42dcd586dc_lab3_1_05_create_remote.pdf?Expires=1622160000&Signature=SerQlDFkW0ntXOwPGM8-fbPGkqz3VlRZmvTaEPXTMWAeAtUyJ6Z3VTZ3MIWNEiK1~mol9IhAdtjWmet4ChkOH4Z7lrJKoWNliNj9HdtHyl8k5WqU7PeusTrKsC3Xd-vArhbq7FByIxhKWbVEItPgGVWUD8Fie3nazTQ~KIXKHX8_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A) 

[Bitbucket](https://bitbucket.org/)

#### Push to remote repository
![image](https://user-images.githubusercontent.com/58984578/119651456-aa58d700-be42-11eb-8e9e-157b1073aafa.png)

If you do not have an existing local repository, then you will clone the remote repository, creating a local repository that is associated with the remote repository. If you already have a local repository with commits that you want to push to a remote repository, then you will add the remote repository to your local repository.

![image](https://user-images.githubusercontent.com/58984578/119651626-d5432b00-be42-11eb-9260-e532c958ecec.png)

Once you have cloned a repository, you can work with the local repository optionally pushing your commits to and pulling new commits from the remote repository. A reference to the remote repository is included in the local repository. This allows you to synchronize the repositories.

![image](https://user-images.githubusercontent.com/58984578/119651947-281ce280-be43-11eb-98b8-325d8c5d22d6.png)

#### Clone
The git clone command is used to clone a remote repository. You can copy the command or the URL from a git hosting provider.
If you specify a local project name, that will be used as the name of the project directory.
If you do not specify a local project name, then the project name in the URL minus the .git will be used as the name of the project directory. 

![image](https://user-images.githubusercontent.com/58984578/119652350-9b265900-be43-11eb-9a60-b1920967c7af.png)

![image](https://user-images.githubusercontent.com/58984578/119674047-80f77580-be59-11eb-8b7b-8fbb02174cc0.png)

Instead of including that URL in git commands, you can use the alias named origin.

#### [Add Repository](https://d3c33hcgiwev3.cloudfront.net/bN_e21yWRsGf3ttclqbBfg_dfd113937c634510801a5199e1d2e90b_lab3_1_06b_cli_push.pdf?Expires=1622160000&Signature=NzcEJisSEma8IbUwbQuJ0APTzU5c4ZxnVOe509USvByMrfLTRa9~ye~qf16P0sCxaw-mv8WuxxVdJK2dVzEwHJBUeaisUe3DIwVgRFuXHiupUm45PsIGIH2T~JVpWQ7ATGmh4zXQRSrNXHYHT3WzNA636Ygsv1ypGnTjI8FOzi4_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

![image](https://user-images.githubusercontent.com/58984578/119695155-8958ac00-be6b-11eb-9645-f56e7e07d05e.png)

name- origin

![image](https://user-images.githubusercontent.com/58984578/119694953-5adad100-be6b-11eb-9ab8-c307dd2915f0.png)

Git push writes commits for a branch from the local repository to the remote repository. A successful push synchronizes the branches on the local and remote repositories so that they contain exactly the same commits. Pushing to the remote repository is primarily done to share your work with the team, but it also serves as a good back up of the local repository.

![image](https://user-images.githubusercontent.com/58984578/119695925-4cd98000-be6c-11eb-910f-8f21cbc8da48.png)

You execute the git push command to push commits from the local repository to the remote repository. The first time you push, you should pass the repository shortcut name or Url. The shortcut name is often origin.
You should also include the branch name that you would like to push. The set upstream, or -u option, is used to set up a tracking relationship between your local branch and the corresponding remote branch. Git can then inform you when the branches are out of synch.
The values after git push are all optional, because git will assume default information or use previous values after you've executed the first push.

First we use the git remote command to verify that our local repository named repoa has an association with the remote repository. Here you can see that the shortcut name of the remote repository is origin and it corresponds to the URL of a repository on Bitbucket.
Next, we execute the git push command. We specify the -u flag the first time to set up a tracking relationship between the local and remote branches. We are pushing to the remote repository named origin, and the branch that we are pushing is called master.
The first time you push, you may need to specify your Bitbucket user name and password.
The commits from the local master branch are then written to the remote master branch. Because there is only one branch on both repositories, the repositories are now synchronized.

Notice that after writing the objects to the remote repository, git informs you that a tracking relationship has been set up between the local and remote branches because you specified the -u flag.

![image](https://user-images.githubusercontent.com/58984578/119696792-29fb9b80-be6d-11eb-9115-e1f4c2010c02.png)
