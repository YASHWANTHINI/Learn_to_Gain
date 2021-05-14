* JavaScript is a highly dependent ecosystem on third-party libraries. So, securing JavaScript requires following best practices to reduce the attack surface.

#### JavaScript Integrity Checks
As a frontend developer, you may have used <script> tags to import third-party libraries. Have you thought about the security risks of doing so?
What if the third-party resource has been tampered with?
Yes, these are things that can happen when you render external resources on your site. As a result, your site may face a security vulnerability.
As a safety measure for this, you can add an integrity (also known as Subresource integrity — SRI) code to your script 
 ```
 <script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous">
</script>
```
The integrity attribute allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated.

#### Frequent Tests for NPM Vulnerabilities
I hope all of you know that we can use npm audit command to detect vulnerabilities for all installed dependencies. It provides vulnerability reports and provides fixes for them. But how often do you do that?
Unless we automate it, these vulnerabilities will stack up, making it difficult to fix them. Remember, some of them could even be critical, allowing severe exploits.
As a solution, you can run NPM in your CI for each pull request to identify vulnerabilities. Therefore, you can prevent any vulnerabilities from going unnoticed.
  However, there are some vulnerabilities that will require a developer’s manual intervention to be solved.

#### An extra mile from GitHub
Lately, GitHub introduced a bot name Dependabot, to scan the NPM dependencies automatically and notify you by email stating the risks.
![image](https://user-images.githubusercontent.com/58984578/118213941-8b466680-b48c-11eb-8493-4b5456cb6d24.png)
Besides, suppose you enabled the “automated security fix PRs” option. In that case, GitHub will send an automated PR to fix these issues, addressing the security risks in advance.
<b>Build & share independent components with Bit</b>
Bit is an ultra-extensible tool that lets you create truly modular applications with independently authored, versioned, and maintained components.
Use it to build modular apps & design systems, author and deliver micro frontends, or simply share components between applications.

#### Keep Minor and Patch Version Updates Enabled
Have you ever seen ^ or ~ symbol in front of any NPM package version? These symbols indicate the automatic version bump for minor and patch versions (depending on the symbol).
Technically, minor and patch versions are both backward compatible, reducing the risk of introducing bugs to the application.
Since most third-party libraries release hot-fixes vulnerabilities as patch version bumps, at least enabling automated patch updates helps to reduce security risks.

#### Have Validations in Place to Avoid Injections
As a rule of thumb, we should never rely only on client-side validations since attackers can change them as required. However, some JavaScript injections can be omitted by having validations for every input.
For Example, if you type in the comment field anything with quotes <script><script/>, those quotes will be replaced with double — <<script>><</script>>. Then the entered JavaScript code will not be executed. This is called Cross-Site Scripting (XSS).
Likewise, there are a few other common ways to conduct JavaScript injection.
    1. Use the developer’s console to insert or change the JavaScript.
    2. Entering “javascript:SCRIPT” into the address bar.
Preventing JS injections is important to keep your application secure. Like I mentioned before, having validations place is one method to prevent it. For example, before saving any input to the database, replace all < with &lt;, and all > with &gt; .
Content Security Policies (CSP) are another way to avoid malicious injections. Using CSP is quite straightforward as follows.
```  
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```
  
#### Always Keep Strict Mode On
Having Strict mode on will limit you from writing unsafe code. Besides, its straightforward to enable this mode. It’s as simple as adding the below line as the first in your JavaScript files.
``` use strict ```

When the strict mode is on;
   1. It throws errors for some errors that were previously kept silent.
   2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
   3. Prohibits the use of reserved words likely to be defined in future versions of ECMAScript.
   4. Throws errors when ‘unsafe’ actions are taken (such as gaining access to the global object).
Every modern browser has supported strict mode for years. If the browser does not support strict mode, the expression is simply ignored.

#### Lint Your Code
Linters perform static analysis on your codebase. It helps to establish quality and avoid common pitfalls. Since quality goes hand in hand with security, Linting helps to reduce the security risks. Few popular tools that we use for JavaScript as follows.
JSLint
JSHint
ESLint
Further, tools like SonarCloud can also be used to identify code smells and known security vulnerabilities. 

#### Minify & Uglify Your Code
Attackers will most often try to understand your code to hack their way through. Therefore, having a readable source code in the production build increases the attack surface.
As a common practice, if you minify and ugly your JavaScript code, it is difficult to exploit vulnerabilities in the code you have written.
However, if you want extreme measures to hide your code from users/clients, it should be kept on the server-side without sending it to the browser at all.

[r1](https://blog.bitsrc.io/javascript-security-issues-and-best-practices-37e78df4dce4)
[r2](https://blog.bitsrc.io/enhance-javascript-security-with-content-security-policies-5847e5def227)
[r3](https://blog.bitsrc.io/how-to-hide-secrets-in-strings-modern-text-hiding-in-javascript-613a9faa5787)
